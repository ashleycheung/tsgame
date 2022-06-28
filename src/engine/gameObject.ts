import { EventManager, GameEvent } from "./event";
import { Game } from "./game";

/**
 * A base class that represents a game object
 */
export class GameObject {
  readonly event: EventManager = new EventManager();
  
  private _parent: GameObject | null = null;
  
  private _children: Set<GameObject> = new Set();
  
  game: Game | null = null
  
  constructor () {
    // Add listeners
    this.event.addEventlistener("onGameEnter", this._onGameEnterAddChildren)
    this.event.addEventlistener("onGameExit", this._onGameExitRemoveChildren)
  }
  
  // Add children also to game on enter
  private _onGameEnterAddChildren = (e: GameEvent) => {
    const game = (e as OnGameEnterEvent).game
    for (const c of this._children) {
      game.addGameObject(c)
    }
  }
  
  // Remove children also on exit
  private _onGameExitRemoveChildren = (e: GameEvent) => {
    const game = (e as OnGameEnterEvent).game
    for (const c of this._children) {
      game.removeGameObject(c)
    }
  }
  
  get parent(): GameObject | null {
    return this._parent;
  }
  
  get children(): Set<GameObject> {
    return this._children;
  }
  
  /**
   * Adds a game object as a child
   * children objects are removed when
   * the parent is removed
   * @param child 
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
   * @param child 
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
   */ 
  removeChild(child: GameObject) {
    child._parent = null;
    this._children.delete(child);
    // Add child if already in the game
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
  constructor (game: Game) {
    super();
    this.game = game;
  }
  
}

/**
 * Called when exiting the game
 * @event
 */
 export class OnGameExitEvent extends GameEvent {
  name = "onGameExit"
  
  game: Game;
  
  constructor (game: Game) {
    super();
    this.game = game;
  }
  
}