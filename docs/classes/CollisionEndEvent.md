[tsgame](../README.md) / [Exports](../modules.md) / CollisionEndEvent

# Class: CollisionEndEvent

This is called when a body ends a collision with another
body

## Hierarchy

- [`GameEvent`](GameEvent.md)

  ↳ **`CollisionEndEvent`**

## Table of contents

### Properties

- [name](CollisionEndEvent.md#name)
- [targetBody](CollisionEndEvent.md#targetbody)

### Constructors

- [constructor](CollisionEndEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"collisionEnd"`

Event name

#### Overrides

[GameEvent](GameEvent.md).[name](GameEvent.md#name)

#### Defined in

[physics/physicsBody.ts:236](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/physicsBody.ts#L236)

___

### targetBody

• **targetBody**: [`PhysicsBody`](PhysicsBody.md)

#### Defined in

[physics/physicsBody.ts:238](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/physicsBody.ts#L238)

## Constructors

### constructor

• **new CollisionEndEvent**(`targetBody`)

```typescript
const obj = new RectangleBody(new Vector(3,3))
obj.event.addEventListener("collisionEnd", (e: Event) => {
 // Logs whatever the body collides with
 console.log(e.targetBody)
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetBody` | [`PhysicsBody`](PhysicsBody.md) |

#### Overrides

[GameEvent](GameEvent.md).[constructor](GameEvent.md#constructor)
