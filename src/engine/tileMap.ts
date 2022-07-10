import { PhysicsBody } from "../physics/physicsBody";
import { PhysicsRectangle } from "../physics/physicsShape";
import { Vector2D } from "../physics/vector2d";
import { StatefulObject, StatefulObjectUpdate } from "../state/statefulObject";
import { rotate2DArray } from "../utils/utils";
import { GameEvent } from "./event";
import { OnGameEnterEvent, OnGameExitEvent } from "./gameObject";


/**
 * Represents the state of the tilemap
 */
export interface TileMapState {
  // 2d array representing the cells
  // inside the tilemap
  // the first dimension is the x axis
  // the second dimension is the y axis
  // ie: _cells[x][y]
  cells: Array<Array<number>>,
  
  // The size of each cell relative to the world
  cellSize: Vector2D,
  
  // The position of (0,0) in the tile map relative
  // to the world
  origin: Vector2D,
  
  code: TilemapCode
}

/**
 * Represents a tilemap
 * @group Engine
 */
export class TileMap extends StatefulObject<TileMapState> {
  
  // 2d array representing the cells
  // inside the tilemap
  // the first dimension is the x axis
  // the second dimension is the y axis
  // ie: _cells[x][y]
  private _cells: Array<Array<number>>
  
  private _bodies: Array<PhysicsBody> = [];
  
  private _cellSize: Vector2D;
  
  private _origin: Vector2D;
  
  private _code: TilemapCode;
  
  readonly type: string = "TileMap";
  
  /**
   * Creates an empty tilemap of the given size
   * @param cells - x represents the width, y represents the height
   * @param cellSize - the size of a cell in the tilemap
   * @param origin - the position of the top left corner of
   * the tilemap
   * @param code 
   *
   * ```typescript
   * // Creates a 5x5 tilemap with walls around
   * const tilemap = new Tilemap(
   *   [
   *     [1,1,1,1,1],
   *     [1,0,0,0,1],
   *     [1,0,0,0,1],
   *     [1,0,0,0,1],
   *     [1,1,1,1,1],
   *   ],
   *   new Vector2D(100, 100),
   *   Vector2D.zero()
   * )
   * game.addGameObject(tilemap);
   * ```
   *
   */
  constructor (
    cells: Array<Array<number>>,
    cellSize: Vector2D,
    origin: Vector2D,
    code: TilemapCode
  ) {
    super();
    if (cells.length === 0 || cells[0].length === 0) {
      throw new Error("Cells 2d array cant be of length 0")
    }
    this._cells = rotate2DArray(cells);
    this._cellSize = cellSize;
    this._origin = origin;
    this._code = code;
    
    // Add listeners
    this.event.addEventlistener("onGameEnter", this._onGameEnter);
    this.event.addEventlistener("onGameExit", this._onGameExit);
    
    // Create the bodies
    this._createBodies();
    
    this.storeLastState();
  }
  
  /**
   * Returns the size of the tilemap
   * ```typescript
   * // Creates a 5x5 tilemap with walls around
   * const tilemap = new Tilemap(
   *   [
   *     [1,1,1,1,1],
   *     [1,0,0,0,1],
   *     [1,0,0,0,1],
   *     [1,0,0,0,1],
   *     [1,1,1,1,1],
   *   ],
   *   new Vector2D(100, 100),
   *   Vector2D.zero()
   * )
   * game.addGameObject(tilemap);
   * // Returns Vector2D(5, 5);
   * tilemap.size();
   * ```
   * @returns 
   */
  size (): Vector2D {
    return new Vector2D(this._cells.length, this._cells[0].length);
  }
  
  
  override getUpdate(): StatefulObjectUpdate<TileMapState> | null {
    return null
  }
  
  
  getObjectState(): TileMapState {
    return {
      cells: this._cells,
      cellSize: this._cellSize,
      origin: this._origin,
      code: this._code
    }
  }
  
  
  private _onGameEnter = (e: GameEvent) => {
    const game = (e as OnGameEnterEvent).game
      
    for (const b of this._bodies) {
      game.addGameObject(b)
    }
  }
  
  
  private _onGameExit = (e: GameEvent) => {
    const game = (e as OnGameExitEvent).game
    
    for (const b of this._bodies) {
      game.removeGameObject(b)
    }
  }
  
  
  private _createBodies (): void {
    // Loop through the cells
    for (let x = 0; x < this._cells.length; x++) {
      for (let y = 0; y < this._cells[x].length; y++) {
        const cell = this._cells[x][y];
        // Do nothing since empty
        if (cell === this._code.empty.code) {
          continue;
        } else if (cell === this._code.wall.code) {
          // Create a rectangle body
          const cellWall = new TilemapWallCell(this._cellSize, this._code);
          // Position is relative to origin
          cellWall.position = this._origin.add(new Vector2D(
            (x + 0.5) * this._cellSize.x,
            (y + 0.5) * this._cellSize.y
          ))
          this._bodies.push(cellWall);
          if (this.game !== null) {
            this.game.addGameObject(cellWall);
          }
        }
      }
    }
  }
  
}


/**
 * A specific cell in the tilemap
 * @group Engine
 */
export class TilemapWallCell extends PhysicsBody {
  constructor (size: Vector2D, code: TilemapCode) {
    super(new PhysicsRectangle(size));
    this.static = true;
    this.collisionCategory = new Set(code.wall.collision);
    this.collisionMask = new Set(code.wall.collision);
  }
}


/**
 * Maps the tilemap cells to its
 * code id
 */
export interface TilemapCode {
  empty: TileMapCellCode,
  wall: TileMapCellCode,
}

export interface TileMapCellCode {
  code: number,
  // The collision layers to collide with
  collision: Array<number>,
  textureName: string | null,
}
