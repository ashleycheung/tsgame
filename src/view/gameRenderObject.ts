import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { GameRenderer } from "./renderer";
import * as PIXI from 'pixi.js';

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
  
  constructor(state: StatefulObjectState<T>, renderer: GameRenderer) {
    this.id = state.id;
    this.type = state.type;
    this._renderer = renderer;
  }
  
  /**
   * Adds object to stage
   * @internal
   * @param stage 
   */
  abstract addToStage(stage: PIXI.Container): void;
  
  /**
   * Removes the pixi object from the stage
   * @internal
   * @param stage 
   */
  abstract removeFromStage(stage: PIXI.Container): void;
  
  /**
   * Fully sets the state of this render object
   * @param state 
   */
  abstract setState(state: StatefulObjectState<T>): void;
  
  /**
   * Updates the state of this render object
   * @param update 
   */
  abstract update(update: StatefulObjectUpdate<T>): void;
  
}