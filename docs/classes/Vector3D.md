[tsgame](../README.md) / [Exports](../modules.md) / Vector3D

# Class: Vector3D

Represents a 3 dimensional Vector

## Table of contents

### Properties

- [x](Vector3D.md#x)
- [y](Vector3D.md#y)
- [z](Vector3D.md#z)

### Constructors

- [constructor](Vector3D.md#constructor)

### Methods

- [zero](Vector3D.md#zero)
- [add](Vector3D.md#add)
- [subtract](Vector3D.md#subtract)
- [scale](Vector3D.md#scale)
- [distanceTo](Vector3D.md#distanceto)
- [distanceSquaredTo](Vector3D.md#distancesquaredto)
- [dot](Vector3D.md#dot)
- [cross](Vector3D.md#cross)
- [rotationMatrix](Vector3D.md#rotationmatrix)
- [rotateAround](Vector3D.md#rotatearound)
- [magnitude](Vector3D.md#magnitude)
- [magnitudeSquared](Vector3D.md#magnitudesquared)
- [normalize](Vector3D.md#normalize)
- [equal](Vector3D.md#equal)
- [setX](Vector3D.md#setx)
- [setY](Vector3D.md#sety)
- [setZ](Vector3D.md#setz)
- [isZero](Vector3D.md#iszero)
- [toFixed](Vector3D.md#tofixed)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

[physics/vector3d.ts:10](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/vector3d.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[physics/vector3d.ts:11](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/vector3d.ts#L11)

___

### z

• `Readonly` **z**: `number`

#### Defined in

[physics/vector3d.ts:12](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/vector3d.ts#L12)

## Constructors

### constructor

• **new Vector3D**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

## Methods

### zero

▸ `Static` **zero**(): [`Vector3D`](Vector3D.md)

#### Returns

[`Vector3D`](Vector3D.md)

___

### add

▸ **add**(`v`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

[`Vector3D`](Vector3D.md)

___

### subtract

▸ **subtract**(`v`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

[`Vector3D`](Vector3D.md)

___

### scale

▸ **scale**(`s`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector3D`](Vector3D.md)

___

### distanceTo

▸ **distanceTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

`number`

___

### distanceSquaredTo

▸ **distanceSquaredTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

`number`

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

`number`

___

### cross

▸ **cross**(`v`): [`Vector3D`](Vector3D.md)

Applies the cross product to this vector.
[Read more](https://www.mathsisfun.com/algebra/vectors-cross-product.html)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

[`Vector3D`](Vector3D.md)

___

### rotationMatrix

▸ **rotationMatrix**(`angle`): [`Matrix3x3`](Matrix3x3.md)

With this vector3d as the axis, return the
rotation matrix for rotation of the given angle
[Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### rotateAround

▸ **rotateAround**(`v`, `angle`): [`Vector3D`](Vector3D.md)

Rotates this vector around the given vector.
[Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) | the axis |
| `angle` | `number` | angle in radians |

#### Returns

[`Vector3D`](Vector3D.md)

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

▸ **normalize**(): [`Vector3D`](Vector3D.md)

#### Returns

[`Vector3D`](Vector3D.md)

___

### equal

▸ **equal**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

`boolean`

___

### setX

▸ **setX**(`x`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector3D`](Vector3D.md)

___

### setY

▸ **setY**(`y`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vector3D`](Vector3D.md)

___

### setZ

▸ **setZ**(`z`): [`Vector3D`](Vector3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vector3D`](Vector3D.md)

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

___

### toFixed

▸ **toFixed**(`digits`): [`Vector3D`](Vector3D.md)

Returns the vector to a set amount of digits
after the decimal place

#### Parameters

| Name | Type |
| :------ | :------ |
| `digits` | `number` |

#### Returns

[`Vector3D`](Vector3D.md)
