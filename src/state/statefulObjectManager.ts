import { Game } from "../engine/game";
import { StatefulObjectState, StatefulObject, StatefulObjectUpdate } from "./statefulObject";




/**
 * Responsible for managing all the 
 * render states in a game
 * @group State
 */
export class StatefulObjectManager {
  
  private _game: Game;
  
  /**
    All the new state objects created since the last getUpdate
    call
  */
  private _newStateObjects: Set<StatefulObject<any>> = new Set();
  
  /**
    All the removed state objects ids since the last getUpdate call
  */
  private _removedStateObjectIds: Set<string> = new Set();
  
  private _renderStateObjects: Set<StatefulObject<any>> = new Set();
  
  constructor (game: Game) {
    this._game = game;
  }
  
  /**
   * @internal
   * Adds a render state object
   * this should be only called by the render state itself
   * @param renderStateObj 
   */
  addRenderState (renderStateObj: StatefulObject<any>): void {
    this._renderStateObjects.add(renderStateObj);
    this._newStateObjects.add(renderStateObj);
  }
  
  /**
   * @internal
   * Removes a render state object
   * this should only be called by the render state object
   * @param renderStateObj 
   */
  removeRenderState (renderStateObj: StatefulObject<any>): void {
    this._renderStateObjects.delete(renderStateObj);
    // Add to removed objects id
    // Note: the id wont be set to null as it is readonly
    this._removedStateObjectIds.add(renderStateObj.id!);
    // Remove from new state objects
    // to deal with the edge case of inserting and
    // removing
    this._newStateObjects.delete(renderStateObj);
  }
  
  /**
   * Gets the whole render state of the game
   */
  getState(): GameRenderState {
    const gameState: GameRenderState = {
      objects: []
    }
    this._renderStateObjects.forEach(o => {
      const objState = o.getState();
      if (objState !== null) {
        gameState.objects.push(objState);
      }
    })
    return gameState;
  }
  
  /**
   * Gets a game update needed for the renderer
   * to render the game. Returns null if there are
   * no updates
   * @returns 
   */
  getUpdate(): GameRenderUpdate | null {
    
    /**
     * Add new updates
     */
    
    const newObjects: Array<StatefulObjectState<any>> = [];
    
    this._newStateObjects.forEach(o => {
      const state = o.getState();
      if (state !== null) {
        newObjects.push(state);
      }
    })
    
    /**
     * Add updates
     */
    
    const objUpdates: Array<StatefulObjectUpdate<any>> = [];
    
    this._renderStateObjects.forEach(o => {
      const update = o.getUpdate();
      
      // Only add if there is an update
      if (update !== null && Object.keys(update.update).length !== 0) {
        objUpdates.push(update);
      }
    })
    
    /**
     * Add deleted ids
     */
    
    const deletedIds = Array.from(this._removedStateObjectIds);
    
    /**
      Clear at the end of game step
    */
    if (this._game !== null) {
      this._game.event.addEventlistener("gameStepEndEvent", e => {
        this._newStateObjects.clear();
        this._removedStateObjectIds.clear();
      }, true)
    }
    
    if (newObjects.length === 0 && objUpdates.length === 0 && deletedIds.length === 0) {
      return null
    }
    
    return {
      debug: [],
      newObjects: newObjects,
      updates: objUpdates,
      removedObjects: deletedIds
    }
  }
  
}


/**
 * Contains all the render states
 * of all the objects in the game
 * @group State
 */
export type GameRenderState = {
  objects: Array<StatefulObjectState<any>>
}


/**
 * An object that contains all the
 * renderer needs to update state
 * @group State
 */
export type GameRenderUpdate = {
  
  debug: Array<StatefulObjectState<any>>
  
  /**
   * All the new objects added and their states
   */
  newObjects: Array<StatefulObjectState<any>>,
  
  /**
   * All the updates to previously known objects.
   * Note: Objects with no updates will not be
   * added here
   */
  updates: Array<StatefulObjectUpdate<any>>,
  
  /**
   * The id's of all the state objects removed
   */
  removedObjects: Array<string>
}
