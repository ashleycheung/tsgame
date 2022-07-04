import * as PIXI from 'pixi.js';


export class AnimationPlayer {
  
  private _currAnimationName: string;
  
  private _animations: PIXI.Spritesheet["animations"];
  
  // How long the current animation should last
  private _animationLength: number = 0;
  
  // How much time has passed
  private _timeElapsed: number = 0;
  
  loop: boolean = true;
  
  private _playing: boolean = true;
  
  constructor (
    animations: PIXI.Spritesheet["animations"],
    animName: string
  ) {
    this._animations = animations;
    this._currAnimationName = animName;
  }
  
  get playing (): boolean {
    return this._playing;
  }
  
  /**
    Returns the number of frames
    the current animation has
  */
  get frames (): number {
    return this.currAnimation.length 
  }
  
  /**
    Gets the current animation
  */
  get currAnimation (): Array<PIXI.Texture> {
    return this._animations[this._currAnimationName]
  }
  
  play(duration: number, animationName: string): void {
    this._currAnimationName = animationName;
    this._animationLength = duration;
    this._timeElapsed = 0;
    this._playing = true;
  }
  
  stop(): void {
    this._playing = false;
  }
  
  /**
   * Renders the current animation
   * and returns the texture to display
   * @param delta - in milliseconds
   */
  render (delta: number): PIXI.Texture {
  
    // Only increment if playing
    if (this._playing) {
      this._timeElapsed = Math.min(this._timeElapsed + delta, this._animationLength);
      // If reaching the end and looped then loop
      if (this._timeElapsed === this._animationLength) {
        if (this.loop) {
          this._timeElapsed = 0;
        } else {
          this._playing = false;
        }
      }
    }
    // Get time per frame
    const timePerFrame = this._animationLength / this.frames;
    // Get frame index
    // Needs to be less than frames - 1 for when
    // timeElapsed === animationLength;
    const frameIndex = Math.min(
      Math.floor(this._timeElapsed / timePerFrame),
      this.frames - 1
    );
    
    return this.currAnimation[frameIndex];
  }
  
}