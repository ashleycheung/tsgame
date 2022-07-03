import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { SpriteState } from "../state/sprite";
import { GameRenderObject } from "./gameRenderObject";
import * as PIXI from 'pixi.js';
import { GameRenderer } from "./renderer";


/**
 * Class responsible for rendering a sprite state
 */
export class SpriteRenderObject extends GameRenderObject<SpriteState> {
  
  private _pixiSprite: PIXI.Sprite;
  
  constructor(state: StatefulObjectState<SpriteState>, renderer: GameRenderer) {
    super(state, renderer);
    
    // Make pixi sprite
    this._pixiSprite = new PIXI.Sprite(
      this._renderer._loader.resources[state.state.textureName].texture
    )
    // Set state
    this.setState(state);
  }
  
  /**
   * @internal
   * @param stage 
   */
  addToStage(stage: PIXI.Container): void {
    stage.addChild(this._pixiSprite);
  }
  
  /**
   * @internal
   * @param stage 
   */
  removeFromStage(stage: PIXI.Container): void {
    stage.removeChild(this._pixiSprite);
  }
  
  setState(state: StatefulObjectState<SpriteState>): void {
    this._pixiSprite.x = state.state.position.x;
    this._pixiSprite.y = state.state.position.y;
  }
  
  update(update: StatefulObjectUpdate<SpriteState>): void {
    const objUpdate = update.update;
    // Update position
    if (objUpdate.position !== undefined) {
      if (objUpdate.position.x !== undefined) {
        this._pixiSprite.x = objUpdate.position.x;
      }
      if (objUpdate.position.y !== undefined) {
        this._pixiSprite.y = objUpdate.position.y;
      }
    }
    
  }
  
}