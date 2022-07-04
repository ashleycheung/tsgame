import { PhysicsBodyState } from "../physics/physicsBody";
import { GameRenderObject } from "./gameRenderObject";
import * as PIXI from 'pixi.js';
import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { GameRenderer } from "./renderer";
import { ShapeState } from "../physics/physicsShape";
import { applyObjectUpdates } from "../utils/utils";


export class PhysicsBodyRenderObject extends GameRenderObject<PhysicsBodyState> {
  
  protected constructor(
    state: StatefulObjectState<PhysicsBodyState>,
    renderer: GameRenderer) 
  {
    super(state, renderer, new PIXI.Graphics());

    this.setState(state);
    
    /**
      Need to manually destroy due to memory leak issue
      @remarks https://pixijs.io/guides/basics/graphics.html
    */
    this.event.addEventlistener("onRendererExit", e => {
      this.getPixiContainer().destroy();
    })
  }
  
  static create (
    state: StatefulObjectState<PhysicsBodyState>,
    renderer: GameRenderer
  ): PhysicsBodyRenderObject {
    const obj = new PhysicsBodyRenderObject(state, renderer);
    obj.setState(state);
    return obj;
  }
  
  override getPixiContainer(): PIXI.Graphics {
    return super.getPixiContainer() as PIXI.Graphics;
  }
  
  _setState(state: StatefulObjectState<PhysicsBodyState>): void {
    
    const graphics = this.getPixiContainer();
    
    // Clear the graphics
    graphics.clear();
        
    const centerPos = state.state.position;
    
    // Color
    const alpha = 0.6;
    graphics.beginFill(0x0000ff, alpha);
    
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