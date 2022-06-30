import { Vector2D } from "../physics/vector2d";

export class Controller {
  
  private _keypresses: Set<string> = new Set()
  
  private _mouseDown: boolean = false;
  
  private _mouseX: number = 0;
  private _mouseY: number = 0;
  
  // Listens for key events
  listen (): void {
    window.addEventListener('keydown', e => {
      this._keypresses.add(e.key.toLowerCase());
    })
    window.addEventListener('keyup', e => {
      this._keypresses.delete(e.key.toLowerCase());
    })
    // When changing to a new tab remove all keys
    window.addEventListener('blur', e => {
      this._keypresses = new Set();
      this._mouseDown = false;
    })
    window.addEventListener('mousedown', () => {
      this._mouseDown = true;
    })
    window.addEventListener('mouseup', () => {
      this._mouseDown = false;
    })
    window.addEventListener('mousemove', (e: MouseEvent) => {
      this._mouseX = e.clientX
      this._mouseY = e.clientY
    })
  }
  
  // Returns a normalised movement direction
  getMovementDirection (): Vector2D {
    let vectorX = 0
    let vectorY = 0
    
    if (this._keypresses.has('a')) {
      vectorX -= 1
    }
    if (this._keypresses.has('d')) {
      vectorX += 1
    }
    if (this._keypresses.has('s')) {
      vectorY += 1
    }
    if (this._keypresses.has('w')) {
      vectorY -= 1
    }
    
    const inputVec = new Vector2D(vectorX, vectorY)
    
    if (inputVec.isZero()) {
      return inputVec
    }
    
    return inputVec.normalize()
  }
  
  // Returns shoot direction if clicked
  // else ignore
  getShootDirection (): Vector2D | null {
    if (this._mouseDown) {
      return new Vector2D(
        this._mouseX - document.body.clientWidth / 2,
        this._mouseY - document.body.clientHeight / 2,
      );
    }
    return null;
  }
}