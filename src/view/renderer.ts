import * as PIXI from 'pixi.js';
import { GameEvent } from '../engine/event';
import { Vector2D } from '../physics/vector2d';
import { StatefulObjectState } from '../state/statefulObject';
import { GameRenderState, GameRenderUpdate } from '../state/statefulObjectManager';
import { AnimatedSpriteRenderObject } from './animatedSpriteRenderObject';
import { AssetLoader } from './assets';
import { FPSTracker } from './fpsTracker';
import { GameRenderObject } from './gameRenderObject';
import { PhysicsBodyRenderObject } from './physicsBodyRenderObject';
import { SpriteRenderObject } from './spriteRenderObject';
import { TileMapRenderObject } from './tileMapRenderObject';


export class GameRenderer {
  
  /**
    @internal
  */
  readonly _pixiApp: PIXI.Application;
  
  readonly loader: AssetLoader;
  
  readonly fps: FPSTracker = new FPSTracker();
  
  /**
    Stores game render objects
  */
  private _gameRenderObjects: Map<string, GameRenderObject<any>> = new Map();
  
  constructor (canvas: HTMLCanvasElement) {
    this._pixiApp = new PIXI.Application({
      view: canvas,
      width: canvas.width,
      height: canvas.height
    });
    this._pixiApp.stage.sortableChildren = true;
    this.loader = new AssetLoader(PIXI.Loader.shared);
  }
  
  /**
   * Sets the game state of the renderer 
   * @param gameState 
   */
  setState(gameState: GameRenderState): void {
    // Remove all children from the stage
    this._pixiApp.stage.removeChildren();
    // Clear all objects
    this._gameRenderObjects.clear();
    // Add all objects
    gameState.objects.forEach(this._createGameObject);
  }
  
  get position(): Vector2D {
    const pos = this._pixiApp.stage.position;
    return new Vector2D(pos.x, pos.y);
  }
  
  set position(p : Vector2D) {
    this._pixiApp.stage.position.x = p.x;
    this._pixiApp.stage.position.y = p.y;
  }
  
  get width(): number {
    return this._pixiApp.renderer.width;
  }
  
  get height(): number {
    return this._pixiApp.renderer.height;
  }
  
  /**
   * Adds a game render object to the renderer and stage
   * @param o 
   */
  private _addGameRenderObject (o: GameRenderObject<any>): void {
    // If object already exists remove it
    if (this._gameRenderObjects.has(o.id)) {
      this._removeGameRenderObject(o.id)
    }
    // Add to render object map
    this._gameRenderObjects.set(o.id, o);
    // Add to pixi stage
    o.addToStage(this._pixiApp.stage);
    o.event.callEvent(new OnRendererEnterEvent());
  }
  
  /**
   * Removes object from from renderer and pixi stage
   * @param id 
   */
  private _removeGameRenderObject = (id: string): void => {
    const obj = this._gameRenderObjects.get(id);
    if (obj !== undefined) {
      obj.event.callEvent(new OnRendererExitEvent());
      // Remove object
      this._gameRenderObjects.delete(id);
      // Remove from stage
      obj.removeFromStage(this._pixiApp.stage);
    }
  }
  
  /**
   * Creates game object and add it into the pixi stage
   * @param state 
   */
  private _createGameObject = (state: StatefulObjectState<any>): void => {
    switch (state.type) {
      case "Sprite": {
        const obj = SpriteRenderObject.create(state, this);
        this._addGameRenderObject(obj);
        break;
      }
      case "PhysicsBody": {
        // const obj = PhysicsBodyRenderObject.create(state, this);
        // this._addGameRenderObject(obj);
        break;
      }
      case "AnimatedSprite": {
        const obj = AnimatedSpriteRenderObject.create(state, this);
        this._addGameRenderObject(obj);
        break;
      }
      case "TileMap": {
        const obj = TileMapRenderObject.create(state, this);
        this._addGameRenderObject(obj);
        break;
      }
      // Do nothing
      default :{
        console.error(`Invalid type ${state.type}`);
      }
    }
  }
  
  
  /**
   * Updates the game state of the renderer
   * @param gameUpdate 
   */
  update(gameUpdate: GameRenderUpdate): void {
    // Add all the new game objects
    gameUpdate.newObjects.forEach(this._createGameObject);
    
    // Update all updated objects
    gameUpdate.updates.forEach(u => {
      // Get the game render object
      const gameRenderObj = this._gameRenderObjects.get(u.id);
      // Update if not null
      gameRenderObj?.update(u);
    })
    
    // Remove all removed objects
    gameUpdate.removedObjects.forEach(id => this._removeGameRenderObject(id))
  }
  
  /**
   * Renders the stage
   * @param delta - time passed since last render
   */
  render (delta: number): void {
    this._gameRenderObjects.forEach(o => o.render(delta));
    // Sort the children by y
    this._pixiApp.stage.children.sort((a, b) => {
      if (a.position.y > b.position.y) {
        return 1;
      }
      return -1;
    })
    this._pixiApp.render();
    // Update tracker
    this.fps.step();
  }
  
}


/**
 * Called when a new renderer object is added to the renderer
 * @group View
 * @event
 */
export class OnRendererEnterEvent extends GameEvent {
  name = "onRendererEnter";
}

/**
 * Called when a new renderer object is removed from the renderer
 * @group View
 * @event
 */
export class OnRendererExitEvent extends GameEvent {
  name = "onRendererExit";
}

