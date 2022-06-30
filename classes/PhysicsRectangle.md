[tsgame](../README.md) / [Exports](../modules.md) / PhysicsRectangle

# Class: PhysicsRectangle

Creates a rectangle physics shape

## Hierarchy

- [`PhysicsShape`](PhysicsShape.md)

  ↳ **`PhysicsRectangle`**

## Table of contents

### Properties

- [body](PhysicsRectangle.md#body)

### Constructors

- [constructor](PhysicsRectangle.md#constructor)

### Accessors

- [size](PhysicsRectangle.md#size)

## Properties

### body

• **body**: ``null`` \| [`PhysicsBody`](PhysicsBody.md) = `null`

#### Inherited from

[PhysicsShape](PhysicsShape.md).[body](PhysicsShape.md#body)

#### Defined in

[physics/physicsShape.ts:11](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsShape.ts#L11)

## Constructors

### constructor

• **new PhysicsRectangle**(`size`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`Vector2D`](Vector2D.md) | the size of the rectangle where x is width and y is height |

#### Overrides

PhysicsShape.constructor

## Accessors

### size

• `get` **size**(): [`Vector2D`](Vector2D.md)

Returns the size of the rectangle

#### Returns

[`Vector2D`](Vector2D.md)
