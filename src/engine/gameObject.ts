import { EventManager, GameEvent } from "./event";
import { Game } from "./game";

/**
 * A base class that represents a game object
 */
export class GameObject {
  readonly event: EventManager = new EventManager();
  
  private _parent: GameObject | null = null;
  
  private _children: Set<GameObject> = new Set();
  
  private _id: string | null = null;
  
  // Stores locally all the groups this
  // game object is a part of
  private _groups: Set<string> = new Set();
  
  /**
    The game instance that the game object is currently in.
    This is set to null if the game object is not in a game
  */
  game: Game | null = null
  
  constructor () {
    // Add children on game enter
    this.event.addEventlistener("onGameEnter", (e: GameEvent) => {
      // Set self id
      this._id = (e as OnGameEnterEvent).id;
      const game = (e as OnGameEnterEvent).game
      // Add to games global storage of groups
      for (const g of this._groups) {
        game.addGameObjectToGroup(this, g);
      }
      // Add children
      for (const c of this._children) {
        game.addGameObject(c)
      }
    })
    
    // Remove children on exit
    this.event.addEventlistener("onGameExit", (e: GameEvent) => {
      const game = (e as OnGameEnterEvent).game
      for (const c of this._children) {
        game.removeGameObject(c)
      }
      // Remove id
      this._id = null;
    })
  }
  
  /**
    Returns the unique id of the game object
    This will be null if the game object is not
    in the game
  */
  get id(): string | null {
    return this._id
  }
  
  /**
    Gets the immediate parent of this game object
  */
  get parent(): GameObject | null {
    return this._parent;
  }
  
  /**
    Returns all the children of this game object
  */
  get children(): Array<GameObject> {
    return Array.from(this._children);
  }
  
  /**
   * Adds this game object to a group
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
   */
  addToGroup (group: string): void {
    this._groups.add(group);
    if (this.game !== null) {
      this.game.addGameObjectToGroup(this, group);
    }
  }
  
  /**
   * Removes this game object from a group
   * @param group 
   */
  removeFromGroup (group: string): void {
    this._groups.delete(group);
    if (this.game !== null) {
      this.game.removeGameObjectFromGroup(this, group);
    }
  }
  
  /**
   * Returns whether the game object is
   * a part of the given group
   * @param group 
   * @returns 
   */
  isInGroup (group: string): boolean {
    return this._groups.has(group);
  }
  
  /**
    Returns all the groups this game object is in.
  */
  get groups(): Array<string> {
    return Array.from(this._groups);
  }
  
  /**
   * Recusively searches parents until
   * a root parent is found
   *
   * ```typescript
   * const root = new GameObject();
   * const parent = new GameObject();
   * const child = new GameObject();
   * root.addChild(parent);
   * parent.addChild(child);
   *
   * // Returns root
   * console.log(child.root());
   * ```
   *
   */
  root(): GameObject {
    // We are root so return self
    if (this.parent === null) {
      return this;
    }
    // Not root so return parents root
    return this.parent.root();
  }
  
  /**
   * Adds a game object as a child
   * children objects are removed when
   * the parent is removed
   *
   * ```typescript
   * const game = new Game();
   * const parent = new GameObject();
   * const child = new GameObject();
   * parent.addChild(child);
   *
   * // Child is also added to game
   * game.addGameObject(parent);
   *
   * // Child is also removed from game
   * game.removeGameObject(parent);
   * ```
   *
   * @param child 
   *
   */ 
  addChild(child: GameObject) {
    child._parent = this;
    this._children.add(child);
    // Add child if already in the game
    if (this.game !== null) {
      this.game.addGameObject(child)
    }
  }
  
  /**
   * Removes a game object as a child
   * children objects are removed when
   * the parent is removed
   *
   * ```typescript
   * const game = new Game();
   * const parent = new GameObject();
   * const child = new GameObject();
   * parent.addChild(child);
   *
   * // Child is also added to game
   * game.addGameObject(parent);
   *
   * // Child is also removed from game
   * game.removeGameObject(parent);
   * ```
   *
   * @param child 
   *
   */ 
  removeChild(child: GameObject) {
    child._parent = null;
    this._children.delete(child);
    // Remove child from game
    if (this.game !== null) {
      this.game.removeGameObject(child);
    }
  }
  
  /**
   * Called each game loop before the physics loop
   * to hook into this, the children class must ovewrite
   * the _step method
   * 
   * @param delta - milliseconds
   * @remarks
   * Children nodes are updated after parent nodes
   */  
  readonly step = (delta: number) => {
    this._step(delta);
    for (const c of this._children) {
      c.step(delta);
    }
  }
  
  /**
   * To be overwritten by children classes
   *
   * ```typescript
   * class MyObject extends GameObject {
   * 
   *    override _step(delta: number): void {
   *      super._step(delta);
   *      // Add subclass functionality here
   *    }
   * }
   * ```
   *
   * @param delta 
   */
  protected _step (delta: number): void {}
}

/**
 * Called when entering the game
 * @event
 *
 */
export class OnGameEnterEvent extends GameEvent {
  name = "onGameEnter"
  
  game: Game;
  
  id: string;
  
  /**
   * 
   * ```typescript
   * const obj = new GameObject()
   * obj.event.addEventListener("onGameEnter", (e: Event) => {
   *  // e.game contains the Game class
   *  console.log(e.game)
   * })
   * // Event called here
   * (new Game()).addGameObject(obj)
   * ```
   * @param game 
   */
  constructor (game: Game, id: string) {
    super();
    this.game = game;
    this.id = id;
  }
  
}

/**
 * Called when exiting the game
 * @event
 */
 export class OnGameExitEvent extends GameEvent {
  name = "onGameExit"
  
  game: Game;
  
  /**
   * 
   * ```typescript
   * const obj = new GameObject()
   * obj.event.addEventListener("onGameExit", (e: Event) => {
   *  // e.game contains the Game class
   *  console.log(e.game)
   * })
   * (new Game()).addGameObject(obj)
   * // Event called here
   * (new Game()).removeGameObject(obj)
   * ```
   * @param game 
   */
  constructor (game: Game) {
    super();
    this.game = game;
  }
  
}