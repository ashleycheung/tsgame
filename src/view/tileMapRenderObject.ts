import { TilemapCode, TileMapState } from "../engine/tileMap";
import { StatefulObjectState, StatefulObjectUpdate } from "../state/statefulObject";
import { GameRenderObject } from "./gameRenderObject";
import { GameRenderer } from "./renderer";
import * as PIXI from 'pixi.js';
import { arraysAreEqual } from "../utils/utils";
import { AssetLoader, TileSetAsset } from "./assets";
import { Vector2D } from "../physics/vector2d";


export class TileMapRenderObject extends GameRenderObject<TileMapState> {
  
  private _cellSprites: Array<PIXI.Sprite> = [];
  
  protected constructor(
    state: StatefulObjectState<TileMapState>,
    // Renderer
    renderer: GameRenderer,
  )
  {
    super(state, renderer, new PIXI.Container());
  }
  
  
  static create (
    state: StatefulObjectState<TileMapState>,
    // Renderer
    renderer: GameRenderer,
  ): TileMapRenderObject {
    const obj = new TileMapRenderObject(state, renderer);
    obj.setState(state);
    return obj;
  }
  
  override addToStage(stage: PIXI.Container): void {
    this._cellSprites.forEach(s => stage.addChild(s));
  }
  
  override removeFromStage(stage: PIXI.Container): void {
    this._cellSprites.forEach(s => stage.removeChild(s));
  }
  
  protected _setState(state: StatefulObjectState<TileMapState>): void {
    
    // Update position
    const originX = state.state.origin.x;
    const originY = state.state.origin.y;
    
    // Get the map of textures
    const cellTextures = generateTileTexture(
      state.state.cells, state.state.code, this._renderer.loader);
    
    // For each of the cells add a sprite
    for (let x = 0; x < cellTextures.length; x++) {
      for (let y = 0; y < cellTextures[0].length; y++) {
        const texture = cellTextures[x][y];
        if (texture !== null) {
        
          const cellScale: Vector2D = new Vector2D(
            state.state.cellSize.x / texture.width,
            state.state.cellSize.y / texture.height,
          )
          
          const sprite = new PIXI.Sprite(
            cellTextures[x][y]!
          );
          sprite.position.x = originX + x * state.state.cellSize.x;
          sprite.position.y = originY + y * state.state.cellSize.y;
          sprite.scale.x = cellScale.x;
          sprite.scale.y = cellScale.y;
          
          this._cellSprites.push(sprite);
        }
      }
    }
    
  }
  
  
  protected _update(update: StatefulObjectUpdate<TileMapState>): void {
    
    
    
  }
  
}


/**
 * Returns a 2d array of textures
 * null is returned when it is an empty tile
 * @param cells 
 * @returns 
 */
const generateTileTexture = (
  cells: TileMapState["cells"],
  code: TilemapCode,
  assets: AssetLoader
): Array<Array<PIXI.Texture | null>> => {
  
  const outMap = [];
  
  for (let x = 0; x < cells.length; x++) {
    const column = [];
    for (let y = 0; y < cells[x].length; y++) {
      if (cells[x][y] === code.wall.code) {
        // Get the type type
        const tileType = getTileType(x, y, cells, code);
        // Get the texture for that tiletype
        const texture = assets.getTileSetTile(code.wall.textureName!, tileType)
        if (texture === undefined) {
          throw new Error(`Cannot get texture for tile ${tileType}`);
        }
        column.push(texture);
      } else {
        column.push(null);
      }
    }
    outMap.push(column);
  }
  
  return outMap;
}


const getTileType = (
  x: number, y: number, cells: TileMapState["cells"], code: TilemapCode
): number => {

  let tileType = 0;
  
  // Check cell bottom
  if (
    y + 1 < cells[0].length &&
    cells[x][ y + 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 6);
  }
  
  // Check cell top
  if (
    y - 1 >= 0 &&
    cells[x][ y - 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 1);
  }
  
  // Check cell on right
  if (
    x + 1 < cells.length &&
    cells[x + 1][ y ] === code.wall.code
  ) {
    tileType += Math.pow(2, 4);
  }
  
  // Check cell on left
  if (
    x - 1 >= 0 &&
    cells[x - 1][ y ] === code.wall.code
  ) {
    tileType += Math.pow(2, 3);
  }
  
  // Check cell on top left
  if (
    x - 1 >= 0 &&
    y - 1 >= 0 &&
    cells[x - 1][ y - 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 0);
  }
  
  // Check cell on top right
  if (
    x + 1 < cells.length &&
    y - 1 >= 0 &&
    cells[x + 1][ y - 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 2);
  }
  
  // Check cell on bottom left
  if (
    x - 1 >= 0 &&
    y + 1 < cells[0].length &&
    cells[x - 1][ y + 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 7);
  }
  
  // Check cell on bottom right
  if (
    x + 1 < cells.length &&
    y + 1 < cells[0].length &&
    cells[x + 1][ y + 1] === code.wall.code
  ) {
    tileType += Math.pow(2, 5);
  }
  
  return tileType;
}