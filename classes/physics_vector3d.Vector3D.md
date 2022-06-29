[tsgame](../README.md) / [Exports](../modules.md) / [physics/vector3d](../modules/physics_vector3d.md) / Vector3D

# Class: Vector3D

[physics/vector3d](../modules/physics_vector3d.md).Vector3D

Represents a 3 dimensional Vector

## Table of contents

### Constructors

- [constructor](physics_vector3d.Vector3D.md#constructor)

### Properties

- [x](physics_vector3d.Vector3D.md#x)
- [y](physics_vector3d.Vector3D.md#y)
- [z](physics_vector3d.Vector3D.md#z)

### Methods

- [add](physics_vector3d.Vector3D.md#add)
- [cross](physics_vector3d.Vector3D.md#cross)
- [distanceSquaredTo](physics_vector3d.Vector3D.md#distancesquaredto)
- [distanceTo](physics_vector3d.Vector3D.md#distanceto)
- [dot](physics_vector3d.Vector3D.md#dot)
- [equal](physics_vector3d.Vector3D.md#equal)
- [isZero](physics_vector3d.Vector3D.md#iszero)
- [magnitude](physics_vector3d.Vector3D.md#magnitude)
- [magnitudeSquared](physics_vector3d.Vector3D.md#magnitudesquared)
- [normalize](physics_vector3d.Vector3D.md#normalize)
- [rotateAround](physics_vector3d.Vector3D.md#rotatearound)
- [rotationMatrix](physics_vector3d.Vector3D.md#rotationmatrix)
- [scale](physics_vector3d.Vector3D.md#scale)
- [setX](physics_vector3d.Vector3D.md#setx)
- [setY](physics_vector3d.Vector3D.md#sety)
- [setZ](physics_vector3d.Vector3D.md#setz)
- [subtract](physics_vector3d.Vector3D.md#subtract)
- [toFixed](physics_vector3d.Vector3D.md#tofixed)
- [zero](physics_vector3d.Vector3D.md#zero)

## Constructors

### constructor

• **new Vector3D**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

physics/vector3d.ts:10

___

### y

• `Readonly` **y**: `number`

#### Defined in

physics/vector3d.ts:11

___

### z

• `Readonly` **z**: `number`

#### Defined in

physics/vector3d.ts:12

## Methods

### add

▸ **add**(`v`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### cross

▸ **cross**(`v`): [`Vector3D`](physics_vector3d.Vector3D.md)

Applies the cross product to this vector.
[Read more](https://www.mathsisfun.com/algebra/vectors-cross-product.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### distanceSquaredTo

▸ **distanceSquaredTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

`number`

___

### distanceTo

▸ **distanceTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

`number`

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

`number`

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

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

▸ **normalize**(): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### rotateAround

▸ **rotateAround**(`v`, `angle`): [`Vector3D`](physics_vector3d.Vector3D.md)

Rotates this vector around the given vector.
[Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) | the axis |
| `angle` | `number` | angle in radians |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### rotationMatrix

▸ **rotationMatrix**(`angle`): [`Matrix3x3`](physics_matrix3x3.Matrix3x3.md)

With this vector3d as the axis, return the
rotation matrix for rotation of the given angle
[Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Matrix3x3`](physics_matrix3x3.Matrix3x3.md)

___

### scale

▸ **scale**(`s`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### setX

▸ **setX**(`x`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### setY

▸ **setY**(`y`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### setZ

▸ **setZ**(`z`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### subtract

▸ **subtract**(`v`): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](physics_vector3d.Vector3D.md) |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### toFixed

▸ **toFixed**(`digits`): [`Vector3D`](physics_vector3d.Vector3D.md)

Returns the vector to a set amount of digits
after the decimal place

#### Parameters

| Name | Type |
| :------ | :------ |
| `digits` | `number` |

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)

___

### zero

▸ `Static` **zero**(): [`Vector3D`](physics_vector3d.Vector3D.md)

#### Returns

[`Vector3D`](physics_vector3d.Vector3D.md)
