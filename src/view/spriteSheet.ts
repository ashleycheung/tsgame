import { Vector2D } from "../physics/vector2d"
import * as PIXI from 'pixi.js';
import { SpriteSheetAsset } from "./assets";



/**
 * Creates the required sprite sheet data to load for pixijs
 * @param name - name of the sprite sheet
 * @param frames - a 2d vector representing the horizontal and vertical frames
 * @param imgSize - size of the image
 * @param scale - scale of sprite sheet
 * @param animations - a map of animations
 * 
 * @remarks The frames will be named: "name_1", "name_2" ...
 * @remarks https://github.com/pixijs/examples/blob/main/examples/assets/spritesheet/0123456789.json
 */
export const generateSpriteSheetData = (
  name: string,
  frames: Vector2D,
  imgSize: Vector2D,
  scale: number,
  animations: SpriteSheetAsset["animations"]
): PIXI.ISpritesheetData => {
  const data: PIXI.ISpritesheetData = {
    frames: {},
    animations: {},
    meta: {
      scale: scale.toString(),
    }
  }
  
  // Size of one frame
  const frameSize: Vector2D = new Vector2D(
    imgSize.x / frames.x,
    imgSize.y / frames.y
  )
  
  
  // Returns the frame name
  const getFrameName = (frameNum: number): string => {
    return `${name}_${frameNum}`
  }
  
  // For each row create the frames
  for (let y = 0; y < frames.y; y++) {
    // For each cell in each row
    for (let x = 0; x < frames.x; x++) {
      const frameNum = y * frames.x + x;
      
      data.frames[getFrameName(frameNum)] = {
        frame: {
          x: x * frameSize.x,
          y: y * frameSize.y,
          w: frameSize.x,
          h: frameSize.y
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 0,
          y: 0
        },
        sourceSize: {
          w: imgSize.x,
          h: imgSize.y
        }
      }
    }
  }
  
  // Load the animations
  for (const animName of Object.keys(animations)) {
    data.animations![animName] = (animations[animName])
                                  .map(i => getFrameName(i))
  }
  
  return data;
}