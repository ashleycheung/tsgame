[tsgame](../README.md) / [Exports](../modules.md) / [physics/vector](../modules/physics_vector.md) / Vector2D

# Class: Vector2D

[physics/vector](../modules/physics_vector.md).Vector2D

## Table of contents

### Constructors

- [constructor](physics_vector.Vector2D.md#constructor)

### Accessors

- [x](physics_vector.Vector2D.md#x)
- [y](physics_vector.Vector2D.md#y)

### Methods

- [add](physics_vector.Vector2D.md#add)
- [angle](physics_vector.Vector2D.md#angle)
- [distanceSquaredTo](physics_vector.Vector2D.md#distancesquaredto)
- [distanceTo](physics_vector.Vector2D.md#distanceto)
- [dot](physics_vector.Vector2D.md#dot)
- [equal](physics_vector.Vector2D.md#equal)
- [isZero](physics_vector.Vector2D.md#iszero)
- [magnitude](physics_vector.Vector2D.md#magnitude)
- [magnitudeSquared](physics_vector.Vector2D.md#magnitudesquared)
- [normalize](physics_vector.Vector2D.md#normalize)
- [scale](physics_vector.Vector2D.md#scale)
- [setX](physics_vector.Vector2D.md#setx)
- [setY](physics_vector.Vector2D.md#sety)
- [subtract](physics_vector.Vector2D.md#subtract)
- [toMatterVector](physics_vector.Vector2D.md#tomattervector)
- [create](physics_vector.Vector2D.md#create)
- [toVector2D](physics_vector.Vector2D.md#tovector2d)
- [zero](physics_vector.Vector2D.md#zero)

## Constructors

### constructor

• **new Vector2D**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

___

### y

• `get` **y**(): `number`

#### Returns

`number`

## Methods

### add

▸ **add**(`v`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### angle

▸ **angle**(): `number`

#### Returns

`number`

___

### distanceSquaredTo

▸ **distanceSquaredTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`number`

___

### distanceTo

▸ **distanceTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`number`

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`number`

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

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

▸ **normalize**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### scale

▸ **scale**(`s`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### setX

▸ **setX**(`x`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### setY

▸ **setY**(`y`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### subtract

▸ **subtract**(`v`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### toMatterVector

▸ **toMatterVector**(): `Vector`

#### Returns

`Vector`

___

### create

▸ `Static` **create**(`angle`, `magnitude`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `magnitude` | `number` |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### toVector2D

▸ `Static` **toVector2D**(`matterVector`): [`Vector2D`](physics_vector.Vector2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matterVector` | `Vector` |

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### zero

▸ `Static` **zero**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)
