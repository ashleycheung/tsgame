[tsgame](../README.md) / [Exports](../modules.md) / CollisionStartEvent

# Class: CollisionStartEvent

This is called when a body starts a collision with another
body

## Hierarchy

- [`GameEvent`](GameEvent.md)

  ↳ **`CollisionStartEvent`**

## Table of contents

### Properties

- [name](CollisionStartEvent.md#name)
- [targetBody](CollisionStartEvent.md#targetbody)

### Constructors

- [constructor](CollisionStartEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"collisionStart"`

Event name

#### Overrides

[GameEvent](GameEvent.md).[name](GameEvent.md#name)

#### Defined in

[physics/physicsBody.ts:210](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L210)

___

### targetBody

• **targetBody**: [`PhysicsBody`](PhysicsBody.md)

#### Defined in

[physics/physicsBody.ts:212](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L212)

## Constructors

### constructor

• **new CollisionStartEvent**(`targetBody`)

```typescript
const obj = new RectangleBody(new Vector(3,3))
obj.event.addEventListener("collisionStart", (e: Event) => {
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
