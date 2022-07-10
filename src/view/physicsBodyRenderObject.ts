import { PhysicsBodyState } from "../physics/physicsBody";
import { GameRenderObject } from "./gameRenderObject";
import * as PIXI from 'pixi.js';
import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { GameRenderer } from "./renderer";
import { ShapeState } from "../physics/physicsShape";
import { applyObjectUpdates } from "../utils/utils";


export class PhysicsBodyRenderObject extends GameRenderObject<PhysicsBodyState> {
  
  private _color: number;
  
  
  protected constructor(
    state: StatefulObjectState<PhysicsBodyState>,
    renderer: GameRenderer,
    color: number
  ) 
  {
    super(state, renderer, new PIXI.Graphics());
    
    this._color = color;
    
    // Set to top
    this.getPixiContainer().zIndex = 999;
    
    /**
      Need to manually destroy due to memory leak issue
      @remarks https://pixijs.io/guides/basics/graphics.html
    */
    this.event.addEventlistener("onRendererExit", e => {
      this.getPixiContainer().destroy();
    })
  }
  
  
  /**
   * Creates a Physics render object
   * @param state 
   * @param renderer 
   * @param color 
   * @returns 
   */
  static create (
    state: StatefulObjectState<PhysicsBodyState>,
    renderer: GameRenderer,
    color: number = 0x0000ff
  ): PhysicsBodyRenderObject {
    const obj = new PhysicsBodyRenderObject(state, renderer, color);
    obj.setState(state);
    return obj;
  }
  
  
  /**
   * Returns a graphics object
   * @returns 
   */
  override getPixiContainer(): PIXI.Graphics {
    return super.getPixiContainer() as PIXI.Graphics;
  }
  
  
  /**
   * Sets state
   * @param state 
   */
  _setState(state: StatefulObjectState<PhysicsBodyState>): void {
    
    const graphics = this.getPixiContainer();
    
    // Clear the graphics
    graphics.clear();
        
    const centerPos = state.state.position;
    
    // Color
    const alpha = 0.6;
    graphics.beginFill(this._color, alpha);
    
    // Create the shape
    this._drawShape(state.state.shape);
    
    // Set position
    graphics.x = centerPos.x;
    graphics.y = centerPos.y;
    
    // Set angle
    // Use "rotation" for PIXI.Container
    // as "angle" is in degrees whilst "rotation"
    // is in radians
    // https://pixijs.download/dev/docs/PIXI.Graphics.html#rotation
    // 
    // Must add pi / 2 to convert to pixijs coordinates
    graphics.rotation = state.state.angle + Math.PI / 2;
  }
  
  
  /**
   * Draws the shape onto the graphics container
   * @param shape 
   */
  private _drawShape (shape: ShapeState<any>): void {
  
    const graphics = this.getPixiContainer();
    
    switch (shape.shape) {
      case "Circle": {
        const radius = shape.properties.radius;
        graphics.drawCircle(0,0,radius);
        break;
      }
      case "Rectangle": {
        const size = shape.properties.size;
        // Draw rectangle
        graphics.drawRect(
          - size.x * 0.5,
          - size.y * 0.5,
          size.x,
          size.y
        )
        break;
      }
      default: {
        throw new Error(`Invalid shape: ${shape.shape}`);
      }
    }
  }
  
  
  /**
   * Updates
   * @param update 
   */
  _update(update: StatefulObjectUpdate<PhysicsBodyState>): void {    
    // Graphics object must be redrawn each time so set state again
    const newState = applyObjectUpdates(this._state, update.update);
    // Set state
    this.setState({
      id: this.id,
      type: this.type,
      state: newState
    });
  }
  
}