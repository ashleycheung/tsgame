import { Vector2D } from "../physics/vector2d"
import * as PIXI from 'pixi.js';
import { generateSpriteSheetData } from "./spriteSheet";

export interface Asset {
  name: string,
  path: string,
  type: "Sprite" | "SpriteSheet",
}


export interface SpriteSheetAsset extends Asset {
  data: {
    frames: Vector2D
  },
  animations: {
    // Array of frame indexes
    // that make up the animation
    [animName: string]: Array<number>
  },
}

export class AssetLoader {
  
  private _pixiLoader: PIXI.Loader;
  
  // Maps the sprite sheet name to the sprite sheet
  private _spriteSheets: Map<string, PIXI.Spritesheet> = new Map();
  
  constructor (loader: PIXI.Loader = PIXI.Loader.shared) {
    this._pixiLoader = loader;
  }
  
  /**
   * Loads all the given assets
   * @param assets 
   */
  async load (assets: Array<Asset>): Promise<void> {
    
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    
    const spriteSheetAssets: Array<SpriteSheetAsset> = [];
    
    // Enqueue all the resources
    assets.forEach(a => {
      this._pixiLoader.add(a.name, a.path);
      // Add to sprite sheets array if a sprite sheet
      if (a.type === "SpriteSheet") {
        spriteSheetAssets.push(a as SpriteSheetAsset);
      }
    })
    
    // Wait for all the textures to be loaded
    await new Promise<void>((resolve, _) => {
      // On load resolve
      const binding = this._pixiLoader.onComplete.add(() => {
        this._pixiLoader.onComplete.detach(binding);
        resolve();
      });
      // Load
      this._pixiLoader.load();
    })
    
    // For each of the sprite sheets create a sprite sheet
    // object and wait for them to all load
    await Promise.all(spriteSheetAssets.map(async a => {
      // Get the loaded texture
      const texture = this._pixiLoader.resources[a.name].texture!;
      // Create a sprite sheet
      const sheet = new PIXI.Spritesheet(
        texture,
        generateSpriteSheetData(
          a.name,
          a.data.frames,
          new Vector2D(texture.width, texture.height),
          1,
          a.animations
        )
      )
      this._spriteSheets.set(a.name, sheet);
      
      return new Promise<void>((resolve, _) => {
        sheet.parse(() => resolve());
      })
    }))
  }
  
  /**
   * Returns the PIXI Texture given the name
   * @param name 
   * @returns 
   */
  getSpriteTexture(name: string): PIXI.Texture | undefined {
    return this._pixiLoader.resources[name].texture;
  }
  
  /**
   * Gets a given sprite sheet
   * @param name 
   * @returns 
   */
  getSpriteSheet(name: string): PIXI.Spritesheet | undefined {
    return this._spriteSheets.get(name);
  }
  
}