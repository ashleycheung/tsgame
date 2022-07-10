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
  
  /**
   * The default is (0,0), this means the sprite's origin is the top left.
   * Setting the anchor to (0.5,0.5) means the sprite's origin is centered.
   * Setting the anchor to (1,1) would mean the sprite's origin point will be the bottom right corner.
   */
  anchor: Vector2D,
  
  scale: Vector2D,
  
  angle: number,
}



/**
 * Represents a 2d sprite
 * @group State
 */
export class Sprite extends StatefulObject<SpriteState> {
  
  private _textureName: string;
  
  type = "Sprite"
  
  scale: Vector2D = new Vector2D(1, 1);
  
  anchor: Vector2D = new Vector2D(0, 0)
  
  angle: number = 0;
  
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
      scale: this.scale,
      anchor: this.anchor,
      angle: this.angle
    }
  }
  
}