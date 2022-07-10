import Matter from "matter-js";
import { Game } from "../engine/game";
import { PhysicsBody } from "../physics/physicsBody";
import { GameRenderState } from "../state/statefulObjectManager";

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

export const toFixed = (n: number, digits: number): number => {
  return Number.parseFloat(n.toFixed(digits))
}


/**
 * Renders the state object to a div
 * @param state 
 */
export const debugRenderState = (state: GameRenderState, elem: HTMLElement): void => {
  elem.innerText = JSON.stringify(state, null, 2);
  // Update style
  elem.style.position = "fixed";
  elem.style.left = "5%";
  elem.style.top = "5%";
  elem.style.backgroundColor = "white"
  elem.style.opacity = "0.6"
  elem.style.maxHeight = "50%";
  elem.style.overflow = "auto";
  elem.style.userSelect = "none";
}


export const arraysAreEqual = (arr1: Array<any>, arr2: Array<any>): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Return all the updates in object2 compared to obj1
 * @param obj1 
 * @param obj2 
 * @returns 
 */
export const getObjectUpdates = <T>(obj1: T, obj2: T): Partial<T> => {
  // Loop through the properties of obj1
  const diff: Partial<T> = {};
  for (const prop of Object.keys(obj1)) {
    const value1 = (obj1 as any)[prop];
    const value2 = (obj2 as any)[prop];
    // If they are arrays
    // insert the whole array if there is any difference
    if (value1 instanceof Array && value2 instanceof Array) {
      // If different length then there must
      // be an update
      // so insert whole new array
      if (value1.length !== value2.length) {
        (diff as any)[prop] = value2;
      } else {
        // Otherwise check every value
        for (let i = 0; i < value1.length; i++) {
          const item1 = value1[i];
          const item2 = value2[i];
          // Recursively check the items are different
          const diff = getObjectUpdates(
            { item: item1 },
            { item: item2 }
          )
          // Check if there is an update
          // An say the whole array has changed
          if (Object.keys(diff).length !== 0) {
            (diff as any)[prop] = value2;
          }
        }
      }
      
    } else if (typeof value1 === "object" && typeof value2 === "object") {
      // Recursively compare if object
      const updates = getObjectUpdates(value1, value2);
      if (Object.keys(updates).length !== 0) {
        (diff as any)[prop] = updates;
      }
    } else if (value1 !== value2) {
      (diff as any)[prop] = value2;
    }
  }
  return diff;
}


/**
 * Given an object and its partial updates
 * return an updated version of the object with all
 * its values updated
 * @param obj 
 * @param updates 
 * @returns 
 */
export const applyObjectUpdates = <T>(obj: T, updates: Partial<T>): T => {
  const out: any = {};
  // Loop through each of the properties
  for (const prop of Object.keys(obj)) {
    const objValue = (obj as any)[prop];
    const updateValue = (updates as any)[prop];
    // If both of them are objects
    // update them recursively
    if (Array.isArray(updateValue)) {
      // If array just replace the whole thing
      out[prop] = updateValue;
    } if (typeof objValue === "object" && typeof updateValue === "object") {
      out[prop] = applyObjectUpdates(objValue, updateValue);
    } else if (updateValue !== undefined) {
      // Use updated value
      out[prop] = updateValue;
    } else {
      // Use old value
      out[prop] = objValue;
    }
  }
  return out;
}