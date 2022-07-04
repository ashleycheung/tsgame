import { Vector2D } from "../physics/vector2d";
import { PhysicsBody } from "../physics/physicsBody";
import { StatefulObject } from "./statefulObject";


/**
 * The state of a sprite
 * a sprite should be able to be created
 * from just the sprite state
 * @group State
 */
export interface SpriteState {
  
  /**
   * The alias name for the texture.
   * The path for this texture is managed by the client
   */
  textureName: string,
  
  position: Vector2D,
  
  scale: Vector2D,
}



/**
 * Represents a 2d sprite
 * @group State
 */
export class Sprite extends StatefulObject<SpriteState> {
  
  private _textureName: string;
  
  type = "Sprite"
  
  scale: Vector2D = new Vector2D(1, 1);
  
  /**
    The position of the sprite relative to the origin
    If the sprite is a root node, this is the position
    If the sprite is a child of a physics body
    the position is relative to the physics body
  */
  private _offset: Vector2D = Vector2D.zero();
  
  constructor (texturePath: string) {
    super();
    this._textureName = texturePath;
    // On game enter, create a sprite
    this.storeLastState();
  }
  
  get position (): Vector2D {
    if (this.parent !== null && this.parent instanceof PhysicsBody) {
      return this.parent.position.add(this._offset);
    }
    return this._offset;
  }
  
  get offset (): Vector2D {
    return this._offset;
  }
  
  set offset (v: Vector2D) {
    this._offset = v;
  }
  
  getObjectState(): SpriteState {
    return {
      textureName: this._textureName,
      position: this.position,
      scale: this.scale
    }
  }
  
}