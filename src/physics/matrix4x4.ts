/**
 * Represents a 4 by 4 rotational matrix
 */
 export class Matrix4x4 {
  
  private _values: Array<number>;
  
  /**
   * 
   * ```typescript
   * const m = new Matrix4D([
   *  1,  2,  3,  4,
   *  5,  6,  7,  8,
   *  9,  10, 11, 12,
   *  13, 14, 15, 16
   * ])
   * ```
   * @param values - A 16 length array of the values
   */
  constructor (values: [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
  ]) {
    this._values = values;
  }
  
  /**
   * Returns the value at that index
   * @param x 
   * @param y 
   */
  get(x: number, y: number): number {
    return this._values[y * 4 + x]
  }
  
  /**
   * Multiplies another 4x4 matrix
   * @param m 
   * @returns 
   */
  multiply (m: Matrix4x4): Matrix4x4 {
    const newValues = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // Multiply the row of this matrix
        // with the column of the target matrix
        let cellValue = 0;
        for (let i = 0; i < 4; i++) {
          cellValue += this.get(i, col) + m.get(col, i)
        }
        newValues.push(cellValue);
      }
    }
    return new Matrix4x4(newValues as any);
  }
  
  /**
   * Converts the matrix into a string
   * @returns 
   */
  toString(): string {
    
    let mString = '';
    
    for (let i = 0; i < 16; i++) {
      mString += `  ${this._values[i]},\n`
      if (i % 4 === 3 && i !== 15) {
        mString += '\n';
      }
    }
  
    return `Matrix4x4 [\n${mString}]`
  }
}