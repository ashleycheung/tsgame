import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { SpriteState } from "../state/sprite";
import { GameRenderObject } from "./gameRenderObject";
import * as PIXI from 'pixi.js';
import { GameRenderer } from "./renderer";


/**
 * Class responsible for rendering a sprite state
 */
export class SpriteRenderObject extends GameRenderObject<SpriteState> {
  
  /**
    @internal
  */
  protected _pixiContainer: PIXI.Sprite;
  
  constructor(
    state: StatefulObjectState<SpriteState>,
    renderer: GameRenderer)
  {
    super(state, renderer);
    
    // Make pixi sprite
    this._pixiContainer = new PIXI.Sprite(
      this._renderer._loader.resources[state.state.textureName].texture
    )
    // Set state
    this.setState(state);
  }
  
  
  _setState(state: StatefulObjectState<SpriteState>): void {
    this._pixiContainer.x = state.state.position.x;
    this._pixiContainer.y = state.state.position.y;
  }
  
  _update(update: StatefulObjectUpdate<SpriteState>): void {
    const objUpdate = update.update;
    // Update position
    if (objUpdate.position !== undefined) {
      this.updatePosition(objUpdate.position);
    }
  }
  
}