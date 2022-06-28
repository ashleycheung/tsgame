import Matter from "matter-js";
import { Game } from "../engine/game";
import { PhysicsBody } from "../physics/physicsBody";

export class PhysicsRender {
  
  private _render: Matter.Render
  
  private _target: PhysicsBody;
  
  private _canvas: HTMLCanvasElement;
  
  constructor (canvas: HTMLCanvasElement, game: Game, target: PhysicsBody) {
    this._render = Matter.Render.create({ 
      engine: game.physics._engine,
      canvas: canvas,
      options: {
        height: canvas.height,
        width: canvas.width,
        hasBounds: true,
      }
    })
    this._target = target;
    this._canvas = canvas;
  }
  
  step () {
    // Move to target
    Matter.Bounds.shift(this._render.bounds, {
      x: this._target.position.x - this._canvas.width / 2,
      y: this._target.position.y - this._canvas.height / 2,
    })
    
    // Update render bounds
    Matter.Render.world(this._render);
  }
}

export const bit32ToSet = (bit: number): Set<number> => {
  const outSet: Set<number> = new Set();
  // Loop through and check which categories exist
  for (let i = 0; i < 32; i++) {
    const binaryN = Math.pow(2, i)
    if (binaryN & bit) {
      outSet.add(i)
    }
  }
  return outSet
}

export const setToBit32 = (set: Set<number>): number => {
  let bitCategory = 0
  for (let n of set) {
    // There are only 32 groups so
    // ensure the categories are 
    // within this range
    if (n >= 0 && n < 32) {
      const binaryN = Math.pow(2, n)
      // Bitwise AND
      bitCategory = bitCategory | binaryN
    }
  }
  return bitCategory
}


export const rotate2DArray = (array: Array<Array<any>>): Array<Array<any>> => {
  const out = [];
  for (let i = 0; i < array[0].length; i++) {
    const row = [];
    for (let j = 0; j < array.length; j++) {
      row.push(array[j][i])
    }
    out.push(row);
  }
  return out;
}