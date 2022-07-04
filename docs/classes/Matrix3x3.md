[tsgame](../README.md) / [Exports](../modules.md) / Matrix3x3

# Class: Matrix3x3

Represents a 3 by 3 rotational matrix

## Table of contents

### Properties

- [a11](Matrix3x3.md#a11)
- [a12](Matrix3x3.md#a12)
- [a13](Matrix3x3.md#a13)
- [a21](Matrix3x3.md#a21)
- [a22](Matrix3x3.md#a22)
- [a23](Matrix3x3.md#a23)
- [a31](Matrix3x3.md#a31)
- [a32](Matrix3x3.md#a32)
- [a33](Matrix3x3.md#a33)

### Constructors

- [constructor](Matrix3x3.md#constructor)

### Methods

- [createFromXYZ](Matrix3x3.md#createfromxyz)
- [createFromZYX](Matrix3x3.md#createfromzyx)
- [create](Matrix3x3.md#create)
- [transformation](Matrix3x3.md#transformation)
- [axisAngle](Matrix3x3.md#axisangle)
- [determinant](Matrix3x3.md#determinant)
- [toFixed](Matrix3x3.md#tofixed)
- [similarityTransform](Matrix3x3.md#similaritytransform)
- [multiply](Matrix3x3.md#multiply)
- [transpose](Matrix3x3.md#transpose)
- [adjugate](Matrix3x3.md#adjugate)
- [cofactor](Matrix3x3.md#cofactor)
- [inverse](Matrix3x3.md#inverse)

## Properties

### a11

• `Readonly` **a11**: `number`

#### Defined in

[physics/matrix3x3.ts:11](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L11)

___

### a12

• `Readonly` **a12**: `number`

#### Defined in

[physics/matrix3x3.ts:12](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L12)

___

### a13

• `Readonly` **a13**: `number`

#### Defined in

[physics/matrix3x3.ts:13](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L13)

___

### a21

• `Readonly` **a21**: `number`

#### Defined in

[physics/matrix3x3.ts:14](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L14)

___

### a22

• `Readonly` **a22**: `number`

#### Defined in

[physics/matrix3x3.ts:15](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L15)

___

### a23

• `Readonly` **a23**: `number`

#### Defined in

[physics/matrix3x3.ts:16](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L16)

___

### a31

• `Readonly` **a31**: `number`

#### Defined in

[physics/matrix3x3.ts:17](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L17)

___

### a32

• `Readonly` **a32**: `number`

#### Defined in

[physics/matrix3x3.ts:18](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L18)

___

### a33

• `Readonly` **a33**: `number`

#### Defined in

[physics/matrix3x3.ts:19](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/physics/matrix3x3.ts#L19)

## Constructors

### constructor

• **new Matrix3x3**(`a11`, `a12`, `a13`, `a21`, `a22`, `a23`, `a31`, `a32`, `a33`)

```typescript
const m = new Matrix3D(
 1, 2, 3
 4, 5, 6
 7, 8, 9
)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a11` | `number` |
| `a12` | `number` |
| `a13` | `number` |
| `a21` | `number` |
| `a22` | `number` |
| `a23` | `number` |
| `a31` | `number` |
| `a32` | `number` |
| `a33` | `number` |

## Methods

### createFromXYZ

▸ `Static` **createFromXYZ**(`xAngle`, `yAngle`, `zAngle`): [`Matrix3x3`](Matrix3x3.md)

Creates a rotation matrix given the angles relative to the axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xAngle` | `number` | rotation around x axis |
| `yAngle` | `number` | rotation around y axis |
| `zAngle` | `number` | rotation around z axis |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### createFromZYX

▸ `Static` **createFromZYX**(`zAngle`, `yAngle`, `xAngle`): [`Matrix3x3`](Matrix3x3.md)

Creates a rotation matrix given the angles relative to the axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zAngle` | `number` | rotation around z axis |
| `yAngle` | `number` | rotation around y axis |
| `xAngle` | `number` | rotation around x axis |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### create

▸ `Static` **create**(`axis`, `angle`): [`Matrix3x3`](Matrix3x3.md)

Given the axis and a rotation around it, return
the rotation matrix
[Read more](https://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3D`](Vector3D.md) |
| `angle` | `number` |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### transformation

▸ **transformation**(`translation`): [`Matrix4x4`](Matrix4x4.md)

Returns a 4x4 matrix representing a homogeneous transformation
[Read more](https://automaticaddison.com/find-homogeneous-transformation-matrices-for-a-robotic-arm/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `translation` | [`Vector3D`](Vector3D.md) |

#### Returns

[`Matrix4x4`](Matrix4x4.md)

___

### axisAngle

▸ **axisAngle**(): [[`Vector3D`](Vector3D.md), `number`]

Converts this transformation matrix
into Axis Angle representation
[Read more](https://www.euclideanspace.com/maths/geometry/rotations/axisAngle/index.htm)

#### Returns

[[`Vector3D`](Vector3D.md), `number`]

___

### determinant

▸ **determinant**(): `number`

Returns the the determinant of the matrix
[Read more](https://www.wikihow.com/Find-the-Determinant-of-a-3X3-Matrix)

#### Returns

`number`

___

### toFixed

▸ **toFixed**(`digits`): [`Matrix3x3`](Matrix3x3.md)

Returns the matrix with is values fixed to a given amount
of digits after the decimal place

#### Parameters

| Name | Type |
| :------ | :------ |
| `digits` | `number` |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### similarityTransform

▸ **similarityTransform**(`rotMatrixAToB`): [`Matrix3x3`](Matrix3x3.md)

Given this matrix as a rotation matrix relative to frame A,
express this same rotation relative to frame B.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotMatrixAToB` | [`Matrix3x3`](Matrix3x3.md) | The rotation matrix from frame A to B |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### multiply

▸ **multiply**(`v`): [`Matrix3x3`](Matrix3x3.md)

Multiplies this matrix by a scalar

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

▸ **multiply**(`v`): [`Vector3D`](Vector3D.md)

Multiplies this matrix by a given vector
[Read more](https://mathinsight.org/matrix_vector_multiplication)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3D`](Vector3D.md) |

#### Returns

[`Vector3D`](Vector3D.md)

▸ **multiply**(`m`): [`Matrix3x3`](Matrix3x3.md)

Multiplies this matrix by a given matrix
[Read more](https://www.google.com/search?q=multiply+two+3+by+3+matrices&oq=multiply+two+3+by+3+ma&aqs=chrome.0.0i512j69i57j0i22i30l2j0i15i22i30j0i22i30j0i390l2.4022j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_08m7Ysz8A76OseMP3rW1uA023)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix3x3`](Matrix3x3.md) |

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### transpose

▸ **transpose**(): [`Matrix3x3`](Matrix3x3.md)

Returns the transpose of this matrix

**`remark`** -This is the matrix flipped along the diagonal

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### adjugate

▸ **adjugate**(): [`Matrix3x3`](Matrix3x3.md)

Returns the adjugate of this matrix
[Read more](https://www.mathwords.com/a/adjugate.htm)

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### cofactor

▸ **cofactor**(): [`Matrix3x3`](Matrix3x3.md)

Returns the cofactor of this matrix
[Read more](https://www.mathwords.com/a/adjugate.htm)

#### Returns

[`Matrix3x3`](Matrix3x3.md)

___

### inverse

▸ **inverse**(): ``null`` \| [`Matrix3x3`](Matrix3x3.md)

Returns the inverse of this matrix.
If the inverse doesn't exist, return null
[Read more](https://www.wikihow.com/Find-the-Inverse-of-a-3x3-Matrix)

#### Returns

``null`` \| [`Matrix3x3`](Matrix3x3.md)
