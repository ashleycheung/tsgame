import Matter from "matter-js";
import { CollisionEndEvent, CollisionStartEvent, PhysicsBody } from "./physicsBody";
import { GameEvent } from "../engine/event";

export class Physics {
  
  /**
    @ignore
  */
  readonly _engine: Matter.Engine;
  
  private _bodies: Set<PhysicsBody> = new Set();
  
  private _matterToBody: Map<Matter.Body | Matter.Composite, PhysicsBody> = new Map()
  
  constructor () {
    this._engine = Matter.Engine.create({ 
      gravity: Matter.Vector.create(0,0)
    })
    this._addCollisionEventListener("collisionStart",
      (body: PhysicsBody) => new CollisionStartEvent(body));
    this._addCollisionEventListener("collisionEnd",
    (body: PhysicsBody) => new CollisionEndEvent(body));
  }
  
  addBody (b: PhysicsBody): void {
    this._bodies.add(b);
    this._matterToBody.set(b._matterBody, b);
    Matter.Composite.add(this._engine.world, b._matterBody);
  }
  
  removeBody (b: PhysicsBody): boolean {
    Matter.Composite.remove(this._engine.world, b._matterBody);
    this._matterToBody.delete(b._matterBody)
    return this._bodies.delete(b);
  }
  
  // Steps where delta is milliseconds
  // and returns all the bodies
  step (delta: number): void {
    Matter.Engine.update(this._engine, delta)
  }
  
  private _addCollisionEventListener (
    eventName: string,
    createEvent: (body: PhysicsBody) => GameEvent
  ) {
    Matter.Events.on(this._engine, eventName, (e: any) => {
      e.pairs.forEach((pair: any) => {
        // Get the actual bodies
        const bodyA = this._matterToBody.get(pair.bodyA)
        const bodyB = this._matterToBody.get(pair.bodyB)
        
        // There is a bug where sometimes
        // a body collision is detected even after removal
        if (bodyA === undefined || bodyB === undefined) {
          return;
        }
        
        // Call event
        bodyA.event.callEvent(createEvent(bodyB))
        bodyB.event.callEvent(createEvent(bodyA))
      })
    })
  }
}