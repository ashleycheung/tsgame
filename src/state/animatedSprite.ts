import { Sprite, SpriteState } from "./sprite";


export interface AnimatedSpriteState extends SpriteState {
  animation: string,
  loop: boolean,
  playing: boolean,
  // How long to play the animation
  duration: number,
}


export class AnimatedSprite extends Sprite {
  
  override type = "AnimatedSprite";
  
  animation: string;
  
  loop: boolean = true;
  
  // How long to play animation in miliseconds
  duration: number = 1000;
  
  private _playing: boolean = false;
  
  /**
   * 
   * @param texturePath 
   * @param initAnim - The initial animation to play
   */
  constructor (texturePath: string, initAnim: string) {
    super(texturePath);
    this.animation = initAnim;
  }
  
  
  get playing(): boolean {
    return this._playing;
  }
  
  
  set playing(v: boolean) {
    this._playing = v;
  }
  
  
  override getObjectState(): AnimatedSpriteState {
    
    const state = super.getObjectState();
    
    return {
      textureName: state.textureName,
      position: state.position,
      scale: state.scale,
      anchor: state.anchor,
      angle: state.angle,
      animation: this.animation,
      loop: this.loop,
      playing: this._playing,
      duration: this.duration
    };
  }
  
}