[tsgame](../README.md) / [Exports](../modules.md) / PhysicsCircle

# Class: PhysicsCircle

Creates a circle physics shape

## Hierarchy

- [`PhysicsShape`](PhysicsShape.md)

  ↳ **`PhysicsCircle`**

## Table of contents

### Properties

- [body](PhysicsCircle.md#body)

### Constructors

- [constructor](PhysicsCircle.md#constructor)

### Accessors

- [radius](PhysicsCircle.md#radius)

### Methods

- [getState](PhysicsCircle.md#getstate)

## Properties

### body

• **body**: ``null`` \| [`PhysicsBody`](PhysicsBody.md) = `null`

#### Inherited from

[PhysicsShape](PhysicsShape.md).[body](PhysicsShape.md#body)

#### Defined in

[physics/physicsShape.ts:11](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/physics/physicsShape.ts#L11)

## Constructors

### constructor

• **new PhysicsCircle**(`radius`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the circle |

#### Overrides

PhysicsShape.constructor

## Accessors

### radius

• `get` **radius**(): `number`

#### Returns

`number`

## Methods

### getState

▸ **getState**(): [`ShapeState`](../interfaces/ShapeState.md)<{ `radius`: `number`  }\>

Gets the shape state for the renderer debug

#### Returns

[`ShapeState`](../interfaces/ShapeState.md)<{ `radius`: `number`  }\>

#### Overrides

[PhysicsShape](PhysicsShape.md).[getState](PhysicsShape.md#getstate)
