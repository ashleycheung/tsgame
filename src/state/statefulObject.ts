import { GameEvent } from "../engine/event";
import { GameObject, OnGameEnterEvent, OnGameExitEvent } from "../engine/gameObject";
import { getObjectUpdates } from "../utils/utils";


/**
 * An object that has a state needed by the renderer to render
 * @group State
 */
export abstract class StatefulObject<T> extends GameObject {
  
  // Last state since update
  private _lastState: T | null = null;
  
  readonly abstract type: string;
  
  constructor () {
    super();
    // Add self on enter
    this.event.addEventlistener("onGameEnter", (e: GameEvent) => {
      const game = (e as OnGameEnterEvent).game;
      game.gameStateManager.addRenderState(this);
    })
    
    // Remove self on leave
    this.event.addEventlistener("onGameExit", (e: GameEvent) => {
      const game = (e as OnGameExitEvent).game;
      game.gameStateManager.removeRenderState(this);
    })
    
  }
  
  /**
   * Stores the current state
   */
  protected storeLastState(): void {
    this._lastState = this.getObjectState();
  }
  
  /**
   * Returns the state object of the given state
   */
  abstract getObjectState(): T;
  
  /**
   * Gets the whole state the object
   * Returns null when the object isn't
   * in the game
   */
  getState(): StatefulObjectState<T> | null {
    if (this.id === null) {
      return null;
    }
    return {
      id: this.id,
      type: this.type,
      state: this.getObjectState()
    }
  }
  
  /**
   * Gets all the updates to the state
   * since the last getUpdate call AND
   * the last game step.
   * Returns null if the object isn't in the game
   * or if there is no update
   */
  getUpdate(): StatefulObjectUpdate<T> | null {
    // Check there is an id
    if (this.id === null) {
      return null
    } else if (this._lastState === null) {
      throw new Error(`Last state has not been stored. Have you called storeLastState() yet?`)
    }
    // Find all the updates in the state
    const updates = getObjectUpdates<T>(this._lastState, this.getObjectState());
    
    if (Object.keys(updates).length === 0) {
      return null;
    }
    
    // Update last state at the start of the next game loop
    if (this.game !== null) {
      this.game.event.addEventlistener("gameStepStartEvent", e => {
        this._lastState = this.getObjectState()
      }, true)
    }
    
    return {
      id: this.id,
      update: updates
    }
  }
}


/**
 * Represents the whole state of the object
 * needed for the renderer to render from scratch
 * @group State
 */
export type StatefulObjectState<T> = {
  /**
   * The game object id
   */
  id: string,
  /**
  * The type of the game object
  */
  type: string,
  /**
  * The actual state
  */
  state: T
}


/**
 * Represents an update to a object
 * needed for the renderer to update
 * an already existing object with known
 * render state
 * @group State
 */
export type StatefulObjectUpdate<T> = {
  /**
   * The game object id
   */
  id: string,
  /**
  * The updates to the game object
  */
  update: Partial<T>
} 