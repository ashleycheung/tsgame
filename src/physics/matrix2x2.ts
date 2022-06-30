
/**
 * Represents a 2 by 2 matrix
 */
export class Matrix2x2 {
  
  readonly a11: number;
  readonly a12: number;
  readonly a21: number;
  readonly a22: number;
  
  constructor (
    a11: number, a12: number,
    a21: number, a22: number,
  ) {
    this.a11 = a11;
    this.a12 = a12;
    this.a21 = a21;
    this.a22 = a22;
  }
  
  /**
   * Returns the the determinant of the matrix
   * [Read more](https://www.chilimath.com/lessons/advanced-algebra/determinant-2x2-matrix/)
   */
  determinant (): number {
    return this.a11 * this.a22 - this.a21 * this.a12
  }
  
}