import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { GameRenderer } from "./renderer";
import * as PIXI from 'pixi.js';
import { Vector2D } from "../physics/vector2d";
import { applyObjectUpdates } from "../utils/utils";
import { EventManager } from "../engine/event";

/**
 * An abstract class responsible for rendering a state
 */
export abstract class GameRenderObject<T> {
  
  /**
    Game object id
  */
  readonly id: string;
  
  /**
    Game object type
  */
  readonly type: string;
  
  protected _renderer: GameRenderer;
  
  // Local copy of the state
  protected _state: T;
  
  /**
    @internal
  */
  protected abstract _pixiContainer: PIXI.Container;
  
  readonly event: EventManager = new EventManager();
  
  constructor(state: StatefulObjectState<T>, renderer: GameRenderer) {
    this.id = state.id;
    this.type = state.type;
    this._renderer = renderer;
    this._state = state.state;
  }
  
  /**
   * Adds object to stage
   * @internal
   * @param stage 
   */
  addToStage(stage: PIXI.Container): void {
    stage.addChild(this._pixiContainer);
  }
  
  /**
   * Removes the pixi object from the stage
   * @internal
   * @param stage 
   */
  removeFromStage(stage: PIXI.Container): void {
    stage.removeChild(this._pixiContainer);
  }
  
  /**
   * Fully sets the state of this render object
   * @param state 
   */
  setState(state: StatefulObjectState<T>): void {
    this._state = state.state;
    this._setState(state);
  }
  
  /**
   * Updates the state of this render object
   * @param update 
   */
  update(update: StatefulObjectUpdate<T>): void {
    // Update
    this._update(update);
    // Update local state
    this._state = applyObjectUpdates(this._state, update.update);
  }
  
  /**
   * Template method of set state
   * @param state 
   */
  protected abstract _setState(state: StatefulObjectState<T>): void;
  
  /**
   * Template method of update
   * @param update 
   */
  protected abstract _update(update: StatefulObjectUpdate<T>): void;
  
  /**
   * Updates the sprite position
   * @param positionUpdate
   */
  protected updatePosition(positionUpdate: Partial<Vector2D>): void {
    if (positionUpdate.x !== undefined) {
      this._pixiContainer.x = positionUpdate.x;
    }
    if (positionUpdate.y !== undefined) {
      this._pixiContainer.y = positionUpdate.y;
    }
  }
  
}