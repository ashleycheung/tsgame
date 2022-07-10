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

### Methods

- [getState](PhysicsRectangle.md#getstate)

## Properties

### body

• **body**: ``null`` \| [`PhysicsBody`](PhysicsBody.md) = `null`

#### Inherited from

[PhysicsShape](PhysicsShape.md).[body](PhysicsShape.md#body)

#### Defined in

[physics/physicsShape.ts:11](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/physics/physicsShape.ts#L11)

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

## Methods

### getState

▸ **getState**(): [`ShapeState`](../interfaces/ShapeState.md)<{ `size`: [`Vector2D`](Vector2D.md)  }\>

Gets the shape state for the renderer debug

#### Returns

[`ShapeState`](../interfaces/ShapeState.md)<{ `size`: [`Vector2D`](Vector2D.md)  }\>

#### Overrides

[PhysicsShape](PhysicsShape.md).[getState](PhysicsShape.md#getstate)
