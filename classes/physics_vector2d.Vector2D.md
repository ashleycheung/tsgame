[tsgame](../README.md) / [Exports](../modules.md) / [physics/vector2d](../modules/physics_vector2d.md) / Vector2D

# Class: Vector2D

[physics/vector2d](../modules/physics_vector2d.md).Vector2D

## Table of contents

### Constructors

- [constructor](physics_vector2d.Vector2D.md#constructor)

### Properties

- [x](physics_vector2d.Vector2D.md#x)
- [y](physics_vector2d.Vector2D.md#y)

### Methods

- [add](physics_vector2d.Vector2D.md#add)
- [angle](physics_vector2d.Vector2D.md#angle)
- [angleTo](physics_vector2d.Vector2D.md#angleto)
- [distanceSquaredTo](physics_vector2d.Vector2D.md#distancesquaredto)
- [distanceTo](physics_vector2d.Vector2D.md#distanceto)
- [dot](physics_vector2d.Vector2D.md#dot)
- [equal](physics_vector2d.Vector2D.md#equal)
- [isZero](physics_vector2d.Vector2D.md#iszero)
- [magnitude](physics_vector2d.Vector2D.md#magnitude)
- [magnitudeSquared](physics_vector2d.Vector2D.md#magnitudesquared)
- [normalize](physics_vector2d.Vector2D.md#normalize)
- [rotate](physics_vector2d.Vector2D.md#rotate)
- [scale](physics_vector2d.Vector2D.md#scale)
- [setX](physics_vector2d.Vector2D.md#setx)
- [setY](physics_vector2d.Vector2D.md#sety)
- [subtract](physics_vector2d.Vector2D.md#subtract)
- [toMatterVector](physics_vector2d.Vector2D.md#tomattervector)
- [create](physics_vector2d.Vector2D.md#create)
- [toVector2D](physics_vector2d.Vector2D.md#tovector2d)
- [zero](physics_vector2d.Vector2D.md#zero)

## Constructors

### constructor

• **new Vector2D**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

physics/vector2d.ts:6

___

### y

• `Readonly` **y**: `number`

#### Defined in

physics/vector2d.ts:7

## Methods

### add

▸ **add**(`v`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### angle

▸ **angle**(): `number`

#### Returns

`number`

___

### angleTo

▸ **angleTo**(`v`): `number`

Finds the angle between this vector
and the given vector

**`remarks`** -Uses the fact that x dot y = |x||y| cos(angle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`number`

___

### distanceSquaredTo

▸ **distanceSquaredTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`number`

___

### distanceTo

▸ **distanceTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`number`

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`number`

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`boolean`

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

___

### magnitude

▸ **magnitude**(): `number`

#### Returns

`number`

___

### magnitudeSquared

▸ **magnitudeSquared**(): `number`

#### Returns

`number`

___

### normalize

▸ **normalize**(): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### rotate

▸ **rotate**(`angle`): [`Vector2D`](physics_vector2d.Vector2D.md)

Rotates the vector by a given angle.
[Read more](https://matthew-brett.github.io/teaching/rotation_2d.html)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | in radians |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### scale

▸ **scale**(`s`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### setX

▸ **setX**(`x`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### setY

▸ **setY**(`y`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### subtract

▸ **subtract**(`v`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### toMatterVector

▸ **toMatterVector**(): `Vector`

#### Returns

`Vector`

___

### create

▸ `Static` **create**(`angle`, `magnitude`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `magnitude` | `number` |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### toVector2D

▸ `Static` **toVector2D**(`matterVector`): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matterVector` | `Vector` |

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

___

### zero

▸ `Static` **zero**(): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)
