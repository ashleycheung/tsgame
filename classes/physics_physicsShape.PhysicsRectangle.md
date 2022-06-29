[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsShape](../modules/physics_physicsShape.md) / PhysicsRectangle

# Class: PhysicsRectangle

[physics/physicsShape](../modules/physics_physicsShape.md).PhysicsRectangle

Creates a rectangle physics shape

## Hierarchy

- [`PhysicsShape`](physics_physicsShape.PhysicsShape.md)

  ↳ **`PhysicsRectangle`**

## Table of contents

### Constructors

- [constructor](physics_physicsShape.PhysicsRectangle.md#constructor)

### Properties

- [body](physics_physicsShape.PhysicsRectangle.md#body)

### Accessors

- [size](physics_physicsShape.PhysicsRectangle.md#size)

## Constructors

### constructor

• **new PhysicsRectangle**(`size`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`Vector2D`](physics_vector2d.Vector2D.md) | the size of the rectangle where x is width and y is height |

#### Overrides

PhysicsShape.constructor

## Properties

### body

• **body**: ``null`` \| [`PhysicsBody`](physics_physicsBody.PhysicsBody.md) = `null`

#### Inherited from

[PhysicsShape](physics_physicsShape.PhysicsShape.md).[body](physics_physicsShape.PhysicsShape.md#body)

#### Defined in

[physics/physicsShape.ts:6](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsShape.ts#L6)

## Accessors

### size

• `get` **size**(): [`Vector2D`](physics_vector2d.Vector2D.md)

Returns the size of the rectangle

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)
