[tsgame](../README.md) / [Exports](../modules.md) / PhysicsShape

# Class: PhysicsShape

Abstract class representing a physics
body shape

## Hierarchy

- **`PhysicsShape`**

  ↳ [`PhysicsRectangle`](PhysicsRectangle.md)

  ↳ [`PhysicsCircle`](PhysicsCircle.md)

## Table of contents

### Properties

- [body](PhysicsShape.md#body)

### Methods

- [getState](PhysicsShape.md#getstate)

## Properties

### body

• **body**: ``null`` \| [`PhysicsBody`](PhysicsBody.md) = `null`

#### Defined in

[physics/physicsShape.ts:11](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsShape.ts#L11)

## Methods

### getState

▸ `Abstract` **getState**(): [`ShapeState`](../modules.md#shapestate)<`any`\>

Returns the state of the physics object

#### Returns

[`ShapeState`](../modules.md#shapestate)<`any`\>
