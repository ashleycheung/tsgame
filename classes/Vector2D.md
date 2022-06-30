[tsgame](../README.md) / [Exports](../modules.md) / Vector2D

# Class: Vector2D

Represents a 2d vector

## Table of contents

### Properties

- [x](Vector2D.md#x)
- [y](Vector2D.md#y)

### Constructors

- [constructor](Vector2D.md#constructor)

### Methods

- [toVector2D](Vector2D.md#tovector2d)
- [create](Vector2D.md#create)
- [zero](Vector2D.md#zero)
- [add](Vector2D.md#add)
- [subtract](Vector2D.md#subtract)
- [scale](Vector2D.md#scale)
- [distanceTo](Vector2D.md#distanceto)
- [distanceSquaredTo](Vector2D.md#distancesquaredto)
- [angle](Vector2D.md#angle)
- [angleTo](Vector2D.md#angleto)
- [rotate](Vector2D.md#rotate)
- [dot](Vector2D.md#dot)
- [magnitude](Vector2D.md#magnitude)
- [magnitudeSquared](Vector2D.md#magnitudesquared)
- [normalize](Vector2D.md#normalize)
- [equal](Vector2D.md#equal)
- [setX](Vector2D.md#setx)
- [setY](Vector2D.md#sety)
- [isZero](Vector2D.md#iszero)
- [toMatterVector](Vector2D.md#tomattervector)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

physics/vector2d.ts:10

___

### y

• `Readonly` **y**: `number`

#### Defined in

physics/vector2d.ts:11

## Constructors

### constructor

• **new Vector2D**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

## Methods

### toVector2D

▸ `Static` **toVector2D**(`matterVector`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matterVector` | `Vector` |

#### Returns

[`Vector2D`](Vector2D.md)

___

### create

▸ `Static` **create**(`angle`, `magnitude`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `magnitude` | `number` |

#### Returns

[`Vector2D`](Vector2D.md)

___

### zero

▸ `Static` **zero**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

___

### add

▸ **add**(`v`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

[`Vector2D`](Vector2D.md)

___

### subtract

▸ **subtract**(`v`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

[`Vector2D`](Vector2D.md)

___

### scale

▸ **scale**(`s`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector2D`](Vector2D.md)

___

### distanceTo

▸ **distanceTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`number`

___

### distanceSquaredTo

▸ **distanceSquaredTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`number`

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
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`number`

___

### rotate

▸ **rotate**(`angle`): [`Vector2D`](Vector2D.md)

Rotates the vector by a given angle.
[Read more](https://matthew-brett.github.io/teaching/rotation_2d.html)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | in radians |

#### Returns

[`Vector2D`](Vector2D.md)

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`number`

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

▸ **normalize**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`boolean`

___

### setX

▸ **setX**(`x`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector2D`](Vector2D.md)

___

### setY

▸ **setY**(`y`): [`Vector2D`](Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector2D`](Vector2D.md)

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

___

### toMatterVector

▸ **toMatterVector**(): `Vector`

#### Returns

`Vector`
