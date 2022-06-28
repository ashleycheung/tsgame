[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsBody](../modules/physics_physicsBody.md) / CollisionEndEvent

# Class: CollisionEndEvent

[physics/physicsBody](../modules/physics_physicsBody.md).CollisionEndEvent

This is called when a body ends a collision with another
body

## Hierarchy

- [`GameEvent`](engine_event.GameEvent.md)

  ↳ **`CollisionEndEvent`**

## Table of contents

### Constructors

- [constructor](physics_physicsBody.CollisionEndEvent.md#constructor)

### Properties

- [name](physics_physicsBody.CollisionEndEvent.md#name)
- [targetBody](physics_physicsBody.CollisionEndEvent.md#targetbody)

## Constructors

### constructor

• **new CollisionEndEvent**(`targetBody`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetBody` | [`PhysicsBody`](physics_physicsBody.PhysicsBody.md) | ```typescript const obj = new RectangleBody(new Vector(3,3)) obj.event.addEventListener("collisionEnd", (e: Event) => {  // Logs whatever the body collides with  console.log(e.targetBody) }) ``` |

#### Overrides

[GameEvent](engine_event.GameEvent.md).[constructor](engine_event.GameEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"collisionEnd"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[physics/physicsBody.ts:218](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L218)

___

### targetBody

• **targetBody**: [`PhysicsBody`](physics_physicsBody.PhysicsBody.md)

#### Defined in

[physics/physicsBody.ts:220](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L220)
