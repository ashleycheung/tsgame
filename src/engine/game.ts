import { Physics } from "../physics/physics";
import { EventManager, GameEvent } from "./event";
import { GameObject, OnGameEnterEvent, OnGameExitEvent } from "./gameObject";

/**
  Represents a game instance
  
  ```typescript
    const game = new Game()
    
    const obj = new GameObject()
    game.addGameObject(obj)
    
    // Runs the game forward by 1 sec
    game.step(1000)
  ```
*/
export class Game {
  
  // Stores all the game objects in the game
  private _gameObjects: Set<GameObject> = new Set();
  
  readonly event: EventManager = new EventManager();
  
  physics: Physics = new Physics();
  
  private _removeSet: Set<GameObject> = new Set();
  
  addGameObject (o: GameObject): void {
    this._gameObjects.add(o);
    o.game = this;
    o.event.callEvent(new OnGameEnterEvent(this));
  }
  
  /**
   * Removes a game object
   * sometimes queueRemoveGameObject needs to be
   * called instead to prevent syncronisation bugs
   * @param o 
   */
  removeGameObject (o: GameObject): void {
    this._gameObjects.delete(o);
    o.event.callEvent(new OnGameExitEvent(this));
    o.game = null;
  }
  
  /**
   * Queues a game object to be removed at the end
   * of the step
   * @param o 
   */
  queueRemoveGameObject (o: GameObject): void {
    this._removeSet.add(o);
  }
  
  step (delta: number): void {
    // Call step for all the game objects
    // which are root objects
    this._gameObjects.forEach(o => {
      // Only step if the parent
      if (o.parent === null) {
        o.step(delta)
      }
    });
    // Call physics step
    this.physics.step(delta);
    // Emit post physics step event
    this.event.callEvent(new PostPhysicsStepEvent());
    // Remove queued game objects
    this._removeSet.forEach(o => this.removeGameObject(o));
    this._removeSet.clear();
  }
  
  getAllGameObjects (): Array<GameObject> {
    return Array.from(this._gameObjects)
  }
  
}


/**
 * This is called after the physics step
 * in the game loop
 * @event
 */
export class PostPhysicsStepEvent extends GameEvent {
  name = "postPhysicsStep"
}