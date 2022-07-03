import Matter from "matter-js";
import { GameObject, OnGameEnterEvent, OnGameExitEvent } from "../engine/gameObject";
import { bit32ToSet, setToBit32 } from "../utils/utils";
import { GameEvent } from "../engine/event";
import { Vector2D } from "./vector2d";
import { PhysicsShape, ShapeState } from "./physicsShape";
import { StatefulObject } from "../state/statefulObject";

/**
 * A physics body
 * the physics engine is abstracted away
 * @group Physics
 */
export class PhysicsBody extends StatefulObject<PhysicsBodyState> {
  
  readonly _shape: PhysicsShape;
  
  readonly type: string = "PhysicsBody";
  
  // Stores the desired relative position to
  // the parent
  offset: Vector2D = Vector2D.zero();
  
  constructor (shape: PhysicsShape) {
    super();
    this._shape = shape;
    // Bodies should collide based off mask
    // and category by default
    Matter.Body.set(this._shape._matterBody, { 
      colisionFilter: {
        group: 0, // setting group to 0 ensure it reads the mask
      }
    })
    
    this.collisionCategory = new Set([0])
    this.collisionMask = new Set([0])
    
    // When entering a game it should add itself to the physics
    // manager
    this.event.addEventlistener("onGameEnter", this._onGameEnter)
    
    // Remove on exit
    this.event.addEventlistener("onGameExit", this._onGameExit)
    
    this.storeLastState();
  }
  
  // Syncs this child body with the parent
  // should be called during step
  // and after physics step 
  private _syncWithParentPosition = () => {
    if (this.parent !== null && this.parent instanceof PhysicsBody) {
      this.position = (this.parent as PhysicsBody).position.add(this.offset)
    }
  }
  
  private _onGameEnter = (e: GameEvent) => {
    const game = (e as OnGameEnterEvent).game
    game.physics.addBody(this)
    game.event.addEventlistener('postPhysicsStep', this._syncWithParentPosition)
  }
  
  private _onGameExit = (e: GameEvent) => {
    const game = (e as OnGameExitEvent).game;
    game.physics.removeBody(this)
    game.event.removeEventListener('postPhysicsStep',this._syncWithParentPosition)
  }
  
  /**
    Position is 0 by default
  */
  get position (): Vector2D {
    return Vector2D.toVector2D(this._shape._matterBody.position)
  }
  
  set position (p: Vector2D) {
    Matter.Body.setPosition(this._shape._matterBody, p.toMatterVector())
  }
  
  get angle (): number {
    // Must convert from matterjs angle to our angle
    // In matterjs, the angle is measured relative
    // to the positive y axis
    // but for us it is relative to the positive x axis
    return this._shape._matterBody.angle - Math.PI / 2;
  }
  
  set angle (a: number) {
    // Must convert from matterjs angle to our angle
    // In matterjs, the angle is measured relative
    // to the positive y axis
    // but for us it is relative to the positive x axis
    Matter.Body.setAngle(this._shape._matterBody, a + Math.PI / 2);
  }
  
  get friction (): number {
    return this._shape._matterBody.friction;
  }
  
  set friction (f: number) {
    Matter.Body.set(this._shape._matterBody, { friction: f });
  }
  
  get airResistance (): number {
    return this._shape._matterBody.frictionAir;
  }
  
  set airResistance (ar: number) {
    Matter.Body.set(this._shape._matterBody, { frictionAir: ar });
  }
  
  get velocity (): Vector2D {
    return Vector2D.toVector2D(this._shape._matterBody.velocity)
  }
  
  set velocity (p: Vector2D) {
    if (this.parent !== null && this.parent instanceof PhysicsBody) {
      throw new Error("Cannot set velocity of a child body")
    }
    Matter.Body.setVelocity(this._shape._matterBody, p.toMatterVector())
  }
  
  // The body doesnt move if it is static
  get static (): boolean {
    return this._shape._matterBody.isStatic
  }
  
  set static (v: boolean) {
    Matter.Body.setStatic(this._shape._matterBody, v)
  }
  
  // A set of all the categories this
  // body is a part of
  get collisionCategory (): Set<number> {
    const currBitCategory = this._shape._matterBody.collisionFilter.category!;
    return bit32ToSet(currBitCategory);
  }
  
  /**
    https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category
  */
  set collisionCategory (v: Set<number>) {
    this._shape._matterBody.collisionFilter.category = setToBit32(v)
  }
  
  // A set of all the categories this
  // body collides with
  // Groups go from 0 - 31
  get collisionMask (): Set<number> {
    const currBitMask = this._shape._matterBody.collisionFilter.mask!;
    return bit32ToSet(currBitMask);
  }
  
  /**
    https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category
  */
  set collisionMask (v: Set<number>) {
    // Matter.Body.set doesnt seem to work so we have
    // to set it manually ourselves
    this._shape._matterBody.collisionFilter.mask = setToBit32(v)
  }
  
  // If set to true, it doesnt collide and passes through
  // but still detects collisions
  get isSensor (): boolean {
    return this._shape._matterBody.isSensor;
  }
  
  set isSensor (v: boolean) {
    if (this.parent !== null && this.parent instanceof PhysicsBody) {
      throw new Error("A child physics body must be a sensor")
    }
    Matter.Body.set(this._shape._matterBody, { isSensor: v })
  }
  
  getObjectState(): PhysicsBodyState {
    return {
      position: this.position,
      shape: this._shape.getState()
    }
  }
  
  // Translates the body in a given direction
  protected translate (v: Vector2D): void {
    Matter.Body.translate(this._shape._matterBody, v.toMatterVector())
  }
  
  override _step(delta: number): void {
    super._step(delta);
    this._syncWithParentPosition();
  }
}


export type PhysicsBodyState = {
  position: Vector2D,
  shape: ShapeState<any>
}


/**
 * This is called when a body starts a collision with another
 * body
 * @event
 */
export class CollisionStartEvent extends GameEvent {
  
  name = "collisionStart"
  
  targetBody: PhysicsBody
  
  /**
   * ```typescript
   * const obj = new RectangleBody(new Vector(3,3))
   * obj.event.addEventListener("collisionStart", (e: Event) => {
   *  // Logs whatever the body collides with
   *  console.log(e.targetBody)
   * })
   * ```
   * @param targetBody
   */
  constructor (targetBody: PhysicsBody) {
    super();
    this.targetBody = targetBody
  }
}


/**
 * This is called when a body ends a collision with another
 * body
 * @event
 */
export class CollisionEndEvent extends GameEvent {
  
  name = "collisionEnd"
  
  targetBody: PhysicsBody
  /**
   * ```typescript
   * const obj = new RectangleBody(new Vector(3,3))
   * obj.event.addEventListener("collisionEnd", (e: Event) => {
   *  // Logs whatever the body collides with
   *  console.log(e.targetBody)
   * })
   * ```
   * @param targetBody
   */
  constructor (targetBody: PhysicsBody) {
    super();
    this.targetBody = targetBody
  }
}

