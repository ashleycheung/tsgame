import { GameEvent } from "./event";
import { GameObject } from "./gameObject";

/**
 * A class that acts as a timer
 * @group Engine
 */
export class Timer extends GameObject {
  
  private _timePassed: number = 0;
  
  private _duration: number;
  
  private _active: boolean = false;
  
  /**
   * Creates a timer object of the given
   * duration
   * @param duration - duration in milliseconds
   * ```typescript
   * const timer = new Timer(1000);
   * timer.start();
   * ```
   */
  constructor (duration: number) {
    super();
    this._duration = duration;
  }
  
  /**
   * Starts a timer
   * ```typescript
   * const timer = new Timer(1000);
   * timer.start();
   * ```
   */
  start(): void {
    this._active = true;
    this._timePassed = 0;
  }
  
  get active (): boolean {
    return this._active;
  }
  
  override _step(delta: number): void {
    super._step(delta);
    if (this._active) {
      this._timePassed += delta;
      if (this._timePassed >= this._duration) {
        this._active = false;
        this.event.callEvent(new TimerEndEvent());
      }
    }
  }
  
}


/**
 * This is called when the timer ends
 * @event
 */
export class TimerEndEvent extends GameEvent {
  name = "timerEnd"
}