import Matter from "matter-js";
import { PhysicsBody } from "./physicsBody";
import { Vector2D } from "./vector2d";

/**
 * Abstract class representing a physics
 * body shape
 * @group Physics
 */
export abstract class PhysicsShape {
  body: PhysicsBody | null = null;
  
  /**
    Stores the matter body to be created
    @ignore
  */
  readonly _matterBody: Matter.Body
  
  /**
   * 
   * @ignore
   */
  constructor(body: Matter.Body) {
    this._matterBody = body;
  }
}


/**
 * Creates a rectangle physics shape
 * @group Physics
 */
export class PhysicsRectangle extends PhysicsShape {
  
  private _size: Vector2D
  
  /**
   * 
   * @param size - the size of the rectangle where x is width and y is height
   */
  constructor (size: Vector2D) {
    super(Matter.Bodies.rectangle(0,0, size.x, size.y));
    this._size = size;
  }
  
  /**
    Returns the size of the rectangle
  */
  get size (): Vector2D {
    return this._size
  }
}


/**
 * Creates a circle physics shape
 * @group Physics
 */
export class PhysicsCircle extends PhysicsShape {
  
  private _radius: number
  
  /**
   * 
   * @param radius - The radius of the circle
   */
  constructor (radius: number) {
    super(Matter.Bodies.circle(0, 0, radius))
    this._radius = radius;
  }
  
  get radius(): number {
    return this._radius
  }
  
}