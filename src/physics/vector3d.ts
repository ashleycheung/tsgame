import { toFixed } from "../utils/utils";
import { Matrix3x3 } from "./matrix3x3";

/**
 * Represents a 3 dimensional Vector
 */
export class Vector3D {

  // Readonly to make a Vector3D immutable
  readonly x: number
  readonly y: number
  readonly z: number
  
  constructor (x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  static zero(): Vector3D {
    return new Vector3D(0,0,0)
  }
  
  add (v: Vector3D): Vector3D {
    return new Vector3D(
      this.x + v.x,
      this.y + v.y,
      this.z + v.z
    )
  }
  
  subtract (v: Vector3D): Vector3D {
    return new Vector3D(
      this.x - v.x,
      this.y - v.y,
      this.z + v.z
    )
  }
  
  scale (s: number): Vector3D {
    return new Vector3D(
      this.x * s,
      this.y * s,
      this.z * s
    )
  }
  
  distanceTo (v: Vector3D): number {
    return Math.sqrt(this.distanceSquaredTo(v))
  }
  
  distanceSquaredTo (v: Vector3D): number {
    return Math.pow(this.x - v.x, 2) + 
      Math.pow(this.y - v.y, 2) + 
      Math.pow(this.z - v.z, 2)
  }
  
  dot (v: Vector3D): number {
    return this.x * v.x + this.y * v.y + this.z * v.z
  }
  
  /**
   * Applies the cross product to this vector.
   * [Read more](https://www.mathsisfun.com/algebra/vectors-cross-product.html)
   * @param v 
   * @returns 
   */
  cross (v: Vector3D): Vector3D {
    return new Vector3D(
      this.y * v.z - this.z * v.y,
      this.z * v.x -this.x * v.z,
      this.x * v.y - this.y * v.x
    )
  }
  
  /**
   * With this vector3d as the axis, return the
   * rotation matrix for rotation of the given angle
   * [Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)
   * @param angle 
   * @returns 
   */
  rotationMatrix (angle: number): Matrix3x3 {
    return Matrix3x3.create(this, angle);
  }
  
  /**
   * Rotates this vector around the given vector.
   * [Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)
   * @param v - the axis
   * @param angle - angle in radians
   */
  rotateAround (v: Vector3D, angle: number): Vector3D {    
    // Round to 15 decimal places to prevent floating
    // point error
    return Matrix3x3.create(v, angle).multiply(this).toFixed(15);
  }
  
  magnitude (): number {
    return Math.sqrt(this.magnitudeSquared())
  }
  
  magnitudeSquared (): number {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
  }
  
  normalize (): Vector3D {
    const magnitude = this.magnitude();
    if (magnitude === 0) {
      throw new Error("Attempted to normalize a zero Vector3D")
    }
    return this.scale(1 / magnitude);
  }
  
  equal (v: Vector3D): boolean {
    return this.x === v.x && this.y === v.y && this.z === v.z
  }
  
  setX (x:  number): Vector3D {
    return new Vector3D(x, this.y, this.z)
  }
  
  setY (y: number): Vector3D {
    return new Vector3D(this.x, y, this.z)
  }
  
  setZ (z: number): Vector3D {
    return new Vector3D(this.x, this.y, z)
  }
  
  isZero (): boolean {
    return this.x === 0 && this.y === 0 && this.z === 0
  }
  
  /**
   * Returns the vector to a set amount of digits
   * after the decimal place
   * @param digits 
   * @returns 
   */
  toFixed (digits: number): Vector3D {
    return new Vector3D(
      toFixed(this.x, digits),
      toFixed(this.y, digits),
      toFixed(this.z, digits),
    )
  }
  
}