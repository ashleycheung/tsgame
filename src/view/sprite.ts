import { GameObject } from "../engine/gameObject";
import * as PIXI from 'pixi.js';
import { Vector2D } from "../physics/vector2d";
import { PhysicsBody } from "../physics/physicsBody";


/**
 * The state of a sprite
 * a sprite should be able to be created
 * from just the sprite state
 */
export type SpriteState = {
  
  texturePath: string,
  
  position: Vector2D
}


/**
 * Updates the sprites state
 */
export type SpriteUpdate = {
  
  texturePath?: string,
  
  position?: Vector2D
}

/**
 * Represents a 2d sprite
 */
export class Sprite extends GameObject {
  
  // Only exists when added to the game
  private _pixiSprite: PIXI.Sprite | null = null;
  
  private _texturePath: string;
  
  // Stores all the values updated since the last get update
  private _update: SpriteUpdate = {};
  
  /**
    The position of the sprite relative to the origin
    If the sprite is a root node, this is the position
    If the sprite is a child of a physics body
    the position is relative to the physics body
  */
  private _localPosition: Vector2D = Vector2D.zero();
  
  constructor (texturePath: string) {
    super();
    this._texturePath = texturePath;
    
    // On game enter, create a sprite
  }
  
  get position (): Vector2D {
    if (this.parent !== null && this.parent instanceof PhysicsBody) {
      return this.parent.position.add(this._localPosition);
    }
    return this._localPosition;
  }
  
  get localPosition (): Vector2D {
    return this._localPosition;
  }
  
  set localPosition (v: Vector2D) {
    this._localPosition = v;
    // Update global position
    this._update.position = this.position;
  }
  
  getState(): SpriteState {
    return {
      texturePath: this._texturePath,
      position: this.position
    }
  }
  
  getUpdate(): SpriteUpdate {
    const lastUpdate = this._update;
    this._update = {};
    return lastUpdate;
  }
  
}