import { nanoid } from "nanoid";
import { Physics } from "../physics/physics";
import { StatefulObjectManager } from "../state/statefulObjectManager";
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
  
  @group Engine
*/
export class Game {
  
  // Maps all id to the game object
  private _gameObjects: Map<string, GameObject> = new Map();
  
  // Maps from a group name to its member ids
  private _groupMembers: Map<string, Set<string>> = new Map();
  
  readonly event: EventManager = new EventManager();
  
  physics: Physics = new Physics();
  
  gameStateManager: StatefulObjectManager = new StatefulObjectManager(this);
  
  private _removeSet: Set<GameObject> = new Set();
  
  /**
    All the functions to run after the set up of the
    game step
  */
  private _nextStepQueue: Array<() => void> = [];
  
  private _lastStepTime: number = 0;
  
  /**
   * Adds a game object to the game
   *
   * ```typescript
   * const game = new Game();
   * const obj = new GameObject();
   *
   * // Child is also added to game
   * game.addGameObject(obj);
   * // Updates all game objects
   * game.step(1000);
   * ```
   *
   * @param o 
   */
  addGameObject = (o: GameObject): void => {
    const id = this._generateId();
    this._gameObjects.set(id, o);
    o.game = this;
    o.event.callEvent(new OnGameEnterEvent(this, id));
  }
  
  /**
   * Removes a game object
   * sometimes queueRemoveGameObject needs to be
   * called instead to prevent syncronisation bugs
   * ```typescript
   * const game = new Game();
   * const obj = new GameObject();
   *
   * // Child is also added to game
   * game.addGameObject(obj);
   * // Updates all game objects
   * game.step(1000);
   * // Removes the object
   * game.removeGameObject(obj);
   * ```
   * @param o 
   */
  removeGameObject = (o: GameObject): void => {
    if (o.id === null) {
      throw new Error(`Game Object is already removed from game`)
    }
    
    this._gameObjects.delete(o.id);
    o.event.callEvent(new OnGameExitEvent(this));
    // Object id and game will be null after this
    o.cleanup();
  }
  
  /**
   * Queues a game object to be removed at the end
   * of the step
   *
   * ```typescript
   * const game = new Game();
   * const obj = new GameObject();
   *
   * // Child is also added to game
   * game.addGameObject(obj);
   * // Queues the removeal of the object
   * game.queueRemoveGameObject(obj);
   * // Game object removed here at the end of step
   * game.step(1000);
   * ```
   * @param o 
   */
  queueRemoveGameObject = (o: GameObject): void => {
    this._removeSet.add(o);
  }
  
  /**
   * Returns all the game objects in the game that belong to
   * the given group
   *
   * ```typescript
   * const player = new GameObject();
   * const game = new Game();
   * game.addGameObject(player);
   *
   * o.addToGroup("player");
   *
   * // Returns [player]
   * console.log(game.getGameObjectsInGroup("player"));
   * ```
   *
   * @param group 
   * @returns 
   */
  getGameObjectsInGroup = (group: string): Array<GameObject> => {
    const members = this._groupMembers.get(group);
    if (members === undefined) {
      return [];
    }
    return Array.from(members).map(id => this._gameObjects.get(id)!)
  }
  
  /**
   * Adds a game object to the group
   * This is used only by the game object
   * to add itself to games map of groups
   * @internal
   */
  addGameObjectToGroup = (o: GameObject, group: string): void => {
    const idSet = this._groupMembers.get(group);
    if (o.id === null) {
      throw new Error(`Object id is null`)
    }
    if (idSet === undefined) {
      this._groupMembers.set(group, new Set([o.id]))
    } else {
      idSet.add(o.id);
    }
  }
  
  /**
   * Removes a game object from the group
   * This is used only by the game object
   * to remove itself from games map of groups
   * @internal
   */
  removeGameObjectFromGroup = (o: GameObject, group: string): void => {
    const idSet = this._groupMembers.get(group);
    if (o.id === null) {
      throw new Error(`Object id is null`)
    }
    if (idSet !== undefined) {
      idSet.delete(o.id)
      // If set is empty remove the group too
      // to prevent infinite memory leak
      if (idSet.size === 0) {
        this._groupMembers.delete(group);
      }
    }
  }
  
  /**
   * Generates a unique id
   * @returns 
   */
  private _generateId (): string {
    let id = nanoid();
    while (this._gameObjects.has(id)) {
      id = nanoid();
    }
    return id;
  }
  
  /**
   * Runs a method after the setup of the next game step
   * @param callback 
   */
  runOnNextStep(callback: () => void) {
    this._nextStepQueue.push(callback);
  }
  
  /**
   * Runs a game step for the game
   *
   * ```typescript
   * const game = new Game();
   * const obj = new GameObject();
   * // Add object
   * game.addGameObject(obj);
   * game.step(1000);
   * ```
   * @param delta 
   */
  step (delta: number): void {
    this.event.callEvent(new GameStepStartEvent());
    
    // Run next step and clear
    this._nextStepQueue.forEach(c => c());
    this._nextStepQueue = [];
    
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
    // Called at the end of the game step
    this.event.callEvent(new GameStepEndEvent());
  }
  
  /**
   * Returns an array of all the game objects in the game including children
   *
   * ```typescript
   * const game = new Game();
   * const obj1 = new GameObject();
   * const obj2 = new GameObject();
   * const obj3 = new GameObject();
   * const obj4 = new GameObject();
   * obj2.addChild(obj3);
   *
   * // Add object
   * game.addGameObject(obj1);
   * game.addGameObject(obj2);
   * game.addGameObject(obj5);
   * // Returns [obj1, obj2, obj3, obj4]
   * game.getAllGameObjects();
   * ```
   *
   * @returns 
   */
  getAllGameObjects (): Array<GameObject> {
    return Array.from(this._gameObjects.values())
  }
  
  /**
   * Starts a game to run at a given FPS
   */
  start (fps: number): void {
    this._lastStepTime = performance.now();
    
    const timePerStep = 1000 / fps;
    
    const gameLoop = () => {
      const currTime = performance.now();
      const delta = currTime - this._lastStepTime;
      this._lastStepTime = currTime;
      
      // Process the game
      this.step(delta);
      // Set timeout to time subtract the already
      // included delta
      setTimeout(gameLoop, Math.max(timePerStep - delta, 0));
    }
    gameLoop();
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

/**
 * Called at the start of each game step
 * @event
 */
export class GameStepStartEvent extends GameEvent {
  name = "gameStepStartEvent";
}

/**
 * This is called at the end of each game step
 * @event
 */
export class GameStepEndEvent extends GameEvent {
  name = "gameStepEndEvent"
}