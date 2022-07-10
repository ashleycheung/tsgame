

export class FPSTracker {
  
  // Number of time _steps have been called
  private _steps: number = 0;
  
  private _timePassed: number = 0;
  
  private _updatePeriod: number;
  
  private _currFps: number = 0;
  
  private _lastStep: number = performance.now();
  
  private _canvas: HTMLCanvasElement;
  
  private _ctx: CanvasRenderingContext2D;
  
  /**
   * How often to update the fps
   * @param updatePeriod 
   */
  constructor (updatePeriod: number = 1000) {
    this._updatePeriod = updatePeriod;
    this._canvas = document.createElement("canvas");
    this._canvas.style.backgroundColor = "white";
    this._canvas.style.opacity = "0.6";
    this._canvas.style.position = "fixed";
    this._canvas.style.top = "5%";
    this._canvas.style.right = "5%";
    this._ctx = this._canvas.getContext('2d')!;
    this._ctx.textAlign = "center";
    this._ctx.font = "36px Arial";
    this._ctx.fillStyle = "black";
  }
  
  // Steps the tracker
  step (): void {
    const currTime = performance.now();
    this._timePassed += currTime - this._lastStep;
    this._lastStep = currTime;
    this._steps += 1;
    // Recalculate fps
    if (this._timePassed >= this._updatePeriod) {
      this._currFps = 1000 * this._steps / this._timePassed;
      this._timePassed = 0;
      this._steps = 0;
      // Update canvas
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      this._ctx.fillText(`FPS: ${Math.floor(this._currFps)}`,
        this._canvas.width / 2, this._canvas.height / 2)
    }
  }
  
  get fps(): number {
    return this._currFps
  }
  
  view (): HTMLCanvasElement {
    return this._canvas;
  }
  
}