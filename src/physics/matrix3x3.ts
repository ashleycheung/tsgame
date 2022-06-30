import { toFixed } from "../utils/utils";
import { Matrix2x2 } from "./matrix2x2";
import { Matrix4x4 } from "./matrix4x4";
import { Vector3D } from "./vector3d";

/**
 * Represents a 3 by 3 rotational matrix
 */
export class Matrix3x3 {
  
  readonly a11: number;
  readonly a12: number;
  readonly a13: number;
  readonly a21: number;
  readonly a22: number;
  readonly a23: number;
  readonly a31: number;
  readonly a32: number;
  readonly a33: number;
  
  /**
   * 
   * ```typescript
   * const m = new Matrix3D(
   *  1, 2, 3
   *  4, 5, 6
   *  7, 8, 9
   * )
   * ```
   *
   * @param a11 
   * @param a12 
   * @param a13 
   * @param a21 
   * @param a22 
   * @param a23 
   * @param a31 
   * @param a32 
   * @param a33 
   */
  constructor (
    a11: number, a12:number, a13:number,
    a21: number, a22:number, a23:number,
    a31: number, a32:number, a33:number,
  ) {
    this.a11 = a11;
    this.a12 = a12;
    this.a13 = a13;
    this.a21 = a21;
    this.a22 = a22;
    this.a23 = a23;
    this.a31 = a31;
    this.a32 = a32;
    this.a33 = a33;
  }
  
  
  /**
   * Creates a rotation matrix given the angles relative to the axis
   * @param xAngle - rotation around x axis
   * @param yAngle - rotation around y axis
   * @param zAngle - rotation around z axis
   * @returns 
   */
   static createFromXYZ (xAngle: number, yAngle: number, zAngle: number): Matrix3x3 {
    // Rotation around x axis
    return Matrix3x3.create(new Vector3D(1, 0, 0), xAngle)
      // Rotation around y axis
      .multiply(Matrix3x3.create(new Vector3D(0, 1, 0), yAngle))
      // Rotation around z axis
      .multiply(Matrix3x3.create(new Vector3D(0, 0, 1), zAngle))
  }
  
  
  /**
   * Creates a rotation matrix given the angles relative to the axis
   * @param zAngle - rotation around z axis
   * @param yAngle - rotation around y axis
   * @param xAngle - rotation around x axis
   * @returns 
   */
  static createFromZYX (zAngle: number, yAngle: number, xAngle: number): Matrix3x3 {
    // Rotation around z axis
    return Matrix3x3.create(new Vector3D(0, 0, 1), zAngle)
      // Rotation around y axis
      .multiply(Matrix3x3.create(new Vector3D(0, 1, 0), yAngle))
      // Rotation around x axis
      .multiply(Matrix3x3.create(new Vector3D(1, 0, 0), xAngle))
  }
  
  /**
   * Given the axis and a rotation around it, return
   * the rotation matrix
   * [Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)
   * @param axis 
   * @param angle 
   */
  static create (axis: Vector3D, angle: number): Matrix3x3 {
    // Get unit vector of direction
    const u = axis.normalize();
    
    return new Matrix3x3(
      
      Math.cos(angle) + Math.pow(u.x, 2) * (1- Math.cos(angle)),
      u.x * u.y * (1 - Math.cos(angle)) - u.z * Math.sin(angle),
      u.x * u.z * (1 - Math.cos(angle)) + u.y * Math.sin(angle),
      
      u.y * u.x * (1 - Math.cos(angle)) + u.z * Math.sin(angle),
      Math.cos(angle) + Math.pow(u.y, 2) * (1 - Math.cos(angle)),
      u.y * u.z * (1 - Math.cos(angle)) - u.x * Math.sin(angle),
      
      u.z * u.x * (1 - Math.cos(angle)) - u.y * Math.sin(angle),
      u.z * u.y * (1 - Math.cos(angle)) + u.x * Math.sin(angle),
      Math.cos(angle) + Math.pow(u.z, 2) * (1 - Math.cos(angle))
      
    )
  }
  
  /**
   * Returns a 4x4 matrix representing a homogeneous transformation
   * [Read more](https://automaticaddison.com/find-homogeneous-transformation-matrices-for-a-robotic-arm/)
   * @param translation 
   */
  transformation (translation: Vector3D): Matrix4x4 {
    return new Matrix4x4([
      this.a11, this.a12, this.a13, translation.x,
      this.a21, this.a22, this.a23, translation.y,
      this.a31, this.a32, this.a33, translation.z,
      0       , 0       , 0       , 1       
    ])
  }
  
  /**
   * Converts this transformation matrix
   * into Axis Angle representation
   * [Read more](https://www.euclideanspace.com/maths/geometry/rotations/axisAngle/index.htm)
   */
  axisAngle(): [Vector3D, number] {
    
    const angle = Math.acos((this.a11 + this.a22 + this.a33 - 1) / 2);
    
    const axis = (new Vector3D(
      this.a32 - this.a23,
      this.a13 - this.a31,
      this.a21 - this.a12
    )).scale(1 / (2 * Math.sin(angle)))
    
    return [axis, angle];
  }
  
  
  /**
   * Returns the the determinant of the matrix
   * [Read more](https://www.wikihow.com/Find-the-Determinant-of-a-3X3-Matrix)
   */
  determinant (): number {
    return (
      new Matrix2x2(
        this.a22, this.a23,
        this.a32, this.a33
      )).determinant() * this.a11
      
      +
      
      (new Matrix2x2(
        this.a21, this.a23,
        this.a31, this.a33
      )).determinant() * this.a12 * -1
      
      +
      
      (new Matrix2x2(
        this.a21, this.a22,
        this.a31, this.a32
      )).determinant() * this.a13
  }
  
  
  /**
   * Returns the matrix with is values fixed to a given amount
   * of digits after the decimal place
   * @param digits 
   * @returns 
   */
  toFixed (digits: number): Matrix3x3 {
    return new Matrix3x3(
      toFixed(this.a11, digits),
      toFixed(this.a12, digits),
      toFixed(this.a13, digits),
      toFixed(this.a21, digits),
      toFixed(this.a22, digits),
      toFixed(this.a23, digits),
      toFixed(this.a31, digits),
      toFixed(this.a32, digits),
      toFixed(this.a33, digits),
    )
  }
  
  
  /**
   * Given this matrix as a rotation matrix relative to frame A,
   * express this same rotation relative to frame B.
   * @param rotMatrixAToB - The rotation matrix from frame A to B
   */
  similarityTransform (rotMatrixAToB: Matrix3x3): Matrix3x3 {
    return rotMatrixAToB.inverse()!.multiply(this).multiply(rotMatrixAToB)
  }
  
  
  /**
   * Multiplies this matrix by a scalar
   * @param v 
   */
  multiply (v: number): Matrix3x3;
  
  
  /**
   * Multiplies this matrix by a given vector
   * [Read more](https://mathinsight.org/matrix_vector_multiplication)
   * @param v 
   */
  multiply (v: Vector3D): Vector3D;
  
  
  /**
   * Multiplies this matrix by a given matrix
   * [Read more](https://www.google.com/search?q=multiply+two+3+by+3+matrices&oq=multiply+two+3+by+3+ma&aqs=chrome.0.0i512j69i57j0i22i30l2j0i15i22i30j0i22i30j0i390l2.4022j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_08m7Ysz8A76OseMP3rW1uA023)
   * @param m 
   */
  multiply (m: Matrix3x3): Matrix3x3;
  
  
  /**
   * Implementation
   * @param x 
   * @returns 
   */
  multiply (x: number | Vector3D | Matrix3x3): Vector3D | Matrix3x3 {
    
    if (typeof x === "number") {
      return new Matrix3x3(
        this.a11 * x,
        this.a12 * x,
        this.a13 * x,
        
        this.a21 * x,
        this.a22 * x,
        this.a23 * x,
        
        this.a31 * x,
        this.a32 * x,
        this.a33 * x,
      )
    } else if (x instanceof Matrix3x3) {
      return new Matrix3x3 (
        this.a11 * x.a11 + this.a12 * x.a21 + this.a13 * x.a31,
        this.a11 * x.a12 + this.a12 * x.a22 + this.a13 * x.a32,
        this.a11 * x.a13 + this.a12 * x.a23 + this.a13 * x.a33,
        
        this.a21 * x.a11 + this.a22 * x.a21 + this.a23 * x.a31,
        this.a21 * x.a12 + this.a22 * x.a22 + this.a23 * x.a32,
        this.a21 * x.a13 + this.a22 * x.a23 + this.a23 * x.a33,
        
        this.a31 * x.a11 + this.a32 * x.a21 + this.a33 * x.a31,
        this.a31 * x.a12 + this.a32 * x.a22 + this.a33 * x.a32,
        this.a31 * x.a13 + this.a32 * x.a23 + this.a33 * x.a33,
      )
    }
    
    return new Vector3D(
      this.a11 * x.x + this.a12 * x.y + this.a13 * x.z,
      this.a21 * x.x + this.a22 * x.y + this.a23 * x.z,
      this.a31 * x.x + this.a32 * x.y + this.a33 * x.z,
    )
  }
  
  
  /**
   * Returns the transpose of this matrix
   * @remark -This is the matrix flipped along the diagonal
   */
  transpose (): Matrix3x3 {
    return new Matrix3x3(
      this.a11, this.a21, this.a31,
      this.a12, this.a22, this.a32,
      this.a13, this.a23, this.a33
    )
  }
  
  
  /**
   * Returns the adjugate of this matrix
   * [Read more](https://www.mathwords.com/a/adjugate.htm)
   */
  adjugate (): Matrix3x3 {
    return this.cofactor().transpose()
  }
  
  
  /**
   * Returns the cofactor of this matrix
   * [Read more](https://www.mathwords.com/a/adjugate.htm)
   */
  cofactor (): Matrix3x3 {
    return new Matrix3x3(
      (new Matrix2x2(
        this.a22, this.a23,
        this.a32, this.a33
      )).determinant(),
      
      (new Matrix2x2(
        this.a21, this.a23,
        this.a31, this.a33
      )).determinant()* -1,
      
      (new Matrix2x2(
        this.a21, this.a22,
        this.a31, this.a32
      )).determinant(),
      
      (new Matrix2x2(
        this.a12, this.a13,
        this.a32, this.a33
      )).determinant()* -1,
      
      (new Matrix2x2(
        this.a11, this.a13,
        this.a31, this.a33
      )).determinant(),
      
      (new Matrix2x2(
        this.a11, this.a12,
        this.a31, this.a32
      )).determinant()* -1,
      
      (new Matrix2x2(
        this.a12, this.a13,
        this.a22, this.a23
      )).determinant(),
      
      (new Matrix2x2(
        this.a11, this.a13,
        this.a21, this.a23
      )).determinant()* -1,
      
      (new Matrix2x2(
        this.a11, this.a12,
        this.a21, this.a22
      )).determinant(),
    )
  }
  
  
  /**
   * Returns the inverse of this matrix.
   * If the inverse doesn't exist, return null
   * [Read more](https://www.wikihow.com/Find-the-Inverse-of-a-3x3-Matrix)
   */
  inverse (): Matrix3x3 | null {
    const d = this.determinant();
    // Matrix has no invere if its
    // determinant is 0
    if (d === 0) {
      return null
    }
    return this.adjugate().multiply(1 / d);
  }
  
}