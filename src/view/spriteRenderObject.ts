import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { SpriteState } from "../state/sprite";
import { GameRenderObject } from "./gameRenderObject";
import * as PIXI from 'pixi.js';
import { GameRenderer } from "./renderer";


/**
 * Class responsible for rendering a sprite state
 */
export class SpriteRenderObject extends GameRenderObject<SpriteState> {
  
  protected constructor(
    state: StatefulObjectState<SpriteState>,
    // Renderer
    renderer: GameRenderer,
  )
  {
    super(state, renderer, new PIXI.Sprite(
      renderer.loader.getSpriteTexture(state.state.textureName)
    ));
  }
  
  
  /**
    Factory method to create the sprite render object
  */
  static create(
    state: StatefulObjectState<SpriteState>,
    // Renderer
    renderer: GameRenderer,
    // PIXI Sprite
    sprite: PIXI.Sprite = new PIXI.Sprite(
      renderer.loader.getSpriteTexture(state.state.textureName)
    )
  ):SpriteRenderObject {
    const obj = new SpriteRenderObject(state, renderer);
    obj.setState(state);
    return obj
  }
  
  override getPixiContainer(): PIXI.Sprite {
    return super.getPixiContainer() as PIXI.Sprite
  }
  
  _setState(state: StatefulObjectState<SpriteState>): void {
    this._update({
      id: this.id,
      update: state.state
    })
  }
  
  _update(update: StatefulObjectUpdate<SpriteState>): void {
    const objUpdate = update.update;
    
    const sprite = this.getPixiContainer();
    
    // Update position
    if (objUpdate.position !== undefined) {
      this.updatePosition(objUpdate.position);
    }
    
    if (objUpdate.scale !== undefined) {
      if (objUpdate.scale.x !== undefined) {
        sprite.scale.x = objUpdate.scale.x;
      }
      if (objUpdate.scale.y !== undefined) {
        sprite.scale.y = objUpdate.scale.y;
      }
    }
  }
  
}