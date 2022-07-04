import * as PIXI from 'pixi.js';
import { GameEvent } from '../engine/event';
import { StatefulObjectState } from '../state/statefulObject';
import { GameRenderState, GameRenderUpdate } from '../state/statefulObjectManager';
import { AnimatedSpriteRenderObject } from './animatedSpriteRenderObject';
import { AssetLoader } from './assets';
import { GameRenderObject } from './gameRenderObject';
import { PhysicsBodyRenderObject } from './physicsBodyRenderObject';
import { SpriteRenderObject } from './spriteRenderObject';


export class GameRenderer {
  
  /**
    @internal
  */
  readonly _pixiApp: PIXI.Application;
  
  readonly loader: AssetLoader;
  
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
        const obj = PhysicsBodyRenderObject.create(state, this);
        this._addGameRenderObject(obj);
        break;
      }
      case "AnimatedSprite": {
        const obj = AnimatedSpriteRenderObject.create(state, this);
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
    this._pixiApp.render();
  }
  
}


/**
 * Called when a new renderer object is added to the renderer
 * @group View
 * @event
 */
export class OnRendererExitEvent extends GameEvent {
  name = "onRendererExit";
}

