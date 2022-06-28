[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsBody](../modules/physics_physicsBody.md) / CollisionStartEvent

# Class: CollisionStartEvent

[physics/physicsBody](../modules/physics_physicsBody.md).CollisionStartEvent

This is called when a body starts a collision with another
body

## Hierarchy

- [`GameEvent`](engine_event.GameEvent.md)

  ↳ **`CollisionStartEvent`**

## Table of contents

### Constructors

- [constructor](physics_physicsBody.CollisionStartEvent.md#constructor)

### Properties

- [name](physics_physicsBody.CollisionStartEvent.md#name)
- [targetBody](physics_physicsBody.CollisionStartEvent.md#targetbody)

## Constructors

### constructor

• **new CollisionStartEvent**(`targetBody`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetBody` | [`PhysicsBody`](physics_physicsBody.PhysicsBody.md) | ```typescript const obj = new RectangleBody(new Vector(3,3)) obj.event.addEventListener("collisionStart", (e: Event) => {  // Logs whatever the body collides with  console.log(e.targetBody) }) ``` |

#### Overrides

[GameEvent](engine_event.GameEvent.md).[constructor](engine_event.GameEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"collisionStart"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[physics/physicsBody.ts:191](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L191)

___

### targetBody

• **targetBody**: [`PhysicsBody`](physics_physicsBody.PhysicsBody.md)

#### Defined in

[physics/physicsBody.ts:193](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L193)
