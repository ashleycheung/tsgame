import { GameEvent } from "../engine/event";
import { GameObject, OnAddedAsChildEvent, OnGameEnterEvent, OnGameExitEvent } from "../engine/gameObject";
import { getObjectUpdates } from "../utils/utils";


/**
 * An object that has a state needed by the renderer to render
 * @group State
 */
export abstract class StatefulObject<T> extends GameObject {
  
  // Last state since update
  private _lastState: T | null = null;
  
  private _stateParent: StatefulObject<any> | null = null;
  
  private _stateChildren: Set<StatefulObject<any>> = new Set();
  
  readonly abstract type: string;
  
  constructor () {
    super();
    // Add self on enter
    this.event.addEventlistener("onGameEnter", (e: GameEvent) => {
      const game = (e as OnGameEnterEvent).game;
      game.gameStateManager.addStatefulObject(this);
    })
    
    // Remove self on leave
    this.event.addEventlistener("onGameExit", (e: GameEvent) => {
      const game = (e as OnGameExitEvent).game;
      game.gameStateManager.removeStatefulObject(this);
    })
    
    // Find state parent and add as child
    this.event.addEventlistener("onAddedAsChild", () => {
      this._stateParent = this.findAncestor(
        (target) => target instanceof StatefulObject) as StatefulObject<any>
      this._stateParent?.addStateChild(this);
    })
    
    // Remove from state parent
    this.event.addEventlistener("onRemoveFromChild", () => {
      this._stateParent?.removeStateChild(this);
    })
  }
  
  /**
   * Called by the a child stateful object to add to parent
   * @param stateChild 
   */
  private addStateChild(stateChild: StatefulObject<any>): void {
    this._stateChildren.add(stateChild);
  }
  
  /**
   * Removes a child stateful object
   * @param stateChild 
   */
  private removeStateChild(stateChild: StatefulObject<any>): void {
    this._stateChildren.add(stateChild);
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
      throw new Error(`
        Last state has not been stored.
        Have you called storeLastState() yet?
        This needs to be called in the constructor
        of all subclasses of a StatefulObject
      `)
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
export interface StatefulObjectState<T> {
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
  state: T,
}


/**
 * Represents an update to a object
 * needed for the renderer to update
 * an already existing object with known
 * render state
 * @group State
 */
export interface StatefulObjectUpdate<T> {
  /**
   * The game object id
   */
  id: string,
  /**
  * The updates to the game object
  */
  update: Partial<T>
} 