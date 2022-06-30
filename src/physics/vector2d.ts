import Matter from "matter-js";

/**
 * Represents a 2d vector
 * @group Physics
 */
export class Vector2D {

  // Readonly to make a Vector2D immutable
  readonly x: number
  readonly y: number
  
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  static toVector2D(matterVector: Matter.Vector): Vector2D {
    return new Vector2D(matterVector.x, matterVector.y)
  }
  
  // Creates a Vector2D at a specific angle and magnitude
  static create(angle: number, magnitude: number): Vector2D {
    return new Vector2D(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
  }
  
  static zero(): Vector2D {
    return new Vector2D(0,0)
  }
  
  add (v: Vector2D): Vector2D {
    return new Vector2D(this.x + v.x, this.y + v.y)
  }
  
  subtract (v: Vector2D): Vector2D {
    return new Vector2D(this.x - v.x, this.y - v.y)
  }
  
  scale (s: number): Vector2D {
    return new Vector2D(this.x * s, this.y * s)
  }
  
  distanceTo (v: Vector2D): number {
    return Math.sqrt(this.distanceSquaredTo(v))
  }
  
  distanceSquaredTo (v: Vector2D): number {
    return Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2)
  }
  
  angle (): number {
    return Math.atan2(this.y, this.x);
  }
  
  /**
   * Finds the angle between this vector
   * and the given vector
   * @remarks -Uses the fact that x dot y = |x||y| cos(angle)
   * @param v 
   */
  angleTo (v: Vector2D): number {
    return Math.acos(this.dot(v) / (this.magnitude() * v.magnitude()))
  }
  
  /**
   * Rotates the vector by a given angle.
   * [Read more](https://matthew-brett.github.io/teaching/rotation_2d.html)
   * @param angle - in radians
   */
  rotate (angle: number): Vector2D {
    return new Vector2D(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle),
    )
  }
  
  dot (v: Vector2D): number {
    return this.x * v.x + this.y * v.y
  }
  
  magnitude (): number {
    return Math.sqrt(this.magnitudeSquared())
  }
  
  magnitudeSquared (): number {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2)
  }
  
  normalize (): Vector2D {
    const magnitude = this.magnitude();
    if (magnitude === 0) {
      throw new Error("Attempted to normalize a zero Vector2D")
    }
    return this.scale(1 / magnitude);
  }
  
  equal (v: Vector2D): boolean {
    return this.x === v.x && this.y === v.y
  }
  
  setX (x:  number): Vector2D {
    return new Vector2D(x, this.y)
  }
  
  setY (y: number): Vector2D {
    return new Vector2D(this.x, y)
  }
  
  isZero (): boolean {
    return this.x === 0 && this.y === 0
  }
  
  toMatterVector (): Matter.Vector {
    return Matter.Vector.create(this.x, this.y)
  }
}