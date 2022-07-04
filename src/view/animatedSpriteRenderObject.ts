import { AnimatedSpriteState } from "../state/animatedSprite";
import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { AnimationPlayer } from './animationPlayer';
import { GameRenderer } from "./renderer";
import { SpriteRenderObject } from "./spriteRenderObject";


export class AnimatedSpriteRenderObject extends SpriteRenderObject {
  
  private _animationPlayer: AnimationPlayer;
  
  protected constructor (
    state: StatefulObjectState<AnimatedSpriteState>,
    renderer: GameRenderer
  ) {
    super(state, renderer);
    
    const spriteSheet = renderer.loader.getSpriteSheet(state.state.textureName);
    
    if (spriteSheet === undefined) {
      throw new Error(`Sprite sheet is not loaded: ${state.state.textureName}`);
    }
    
    this._animationPlayer = new AnimationPlayer(
      spriteSheet.animations, state.state.animation);
    
    // Set state
    this.setState(state);
  }
  
  static create(
    state: StatefulObjectState<AnimatedSpriteState>,
    renderer: GameRenderer
  ): AnimatedSpriteRenderObject {
    const obj = new AnimatedSpriteRenderObject(state, renderer);
    obj.setState(state);
    return obj
  }
  
  override _setState(state: StatefulObjectState<AnimatedSpriteState>): void {
    super._setState(state);
    
    // Set the state can be done by just updating all properties
    this._update({
      id: this.id,
      update: state.state
    })
  }
  
  override _update(update: StatefulObjectUpdate<AnimatedSpriteState>): void {
    super._update(update);
    
    // Updating animation
    if (update.update.animation !== undefined) {
      const spriteSheet = this._renderer.loader
        .getSpriteSheet(update.update.textureName || this._state.textureName);
    
      if (spriteSheet === undefined) {
        throw new Error(`Asset ${update.update.textureName} is not loaded`)
      }
      // If animation is changed play again from start
      this._animationPlayer.play(
        // Play new duration otherwise play old one
        update.update.duration || (this._state as AnimatedSpriteState).duration,
        update.update.animation || (this._state as AnimatedSpriteState).animation,
      )
    }
    
    // Update loop
    if (update.update.loop !== undefined) {
      this._animationPlayer.loop = update.update.loop;
    }
    
    // Update playing
    if (update.update.playing !== undefined) {
      if (update.update.playing) {
        // Only play if not already playing
        if (!this._animationPlayer.playing) {
          this._animationPlayer.play(
            // Play new duration otherwise play old one
            update.update.duration || (this._state as AnimatedSpriteState).duration,
            update.update.animation || (this._state as AnimatedSpriteState).animation,
          )
        }
      } else {
        // Only stop if playing
        if (this._animationPlayer.playing) {
          this._animationPlayer.stop();
        }
      }
    }
    
  }
  
  
  override render(delta: number): void {
    // Update sprite texture
    this.getPixiContainer().texture = this._animationPlayer.render(delta);
  }
  
}