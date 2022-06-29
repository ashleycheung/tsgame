[tsgame](../README.md) / [Exports](../modules.md) / [physics/matrix4x4](../modules/physics_matrix4x4.md) / Matrix4x4

# Class: Matrix4x4

[physics/matrix4x4](../modules/physics_matrix4x4.md).Matrix4x4

Represents a 4 by 4 rotational matrix

## Table of contents

### Constructors

- [constructor](physics_matrix4x4.Matrix4x4.md#constructor)

### Methods

- [get](physics_matrix4x4.Matrix4x4.md#get)
- [multiply](physics_matrix4x4.Matrix4x4.md#multiply)
- [toString](physics_matrix4x4.Matrix4x4.md#tostring)

## Constructors

### constructor

• **new Matrix4x4**(`values`)

```typescript
const m = new Matrix4D([
 1,  2,  3,  4,
 5,  6,  7,  8,
 9,  10, 11, 12,
 13, 14, 15, 16
])
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`] | A 16 length array of the values |

## Methods

### get

▸ **get**(`x`, `y`): `number`

Returns the value at that index

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

___

### multiply

▸ **multiply**(`m`): [`Matrix4x4`](physics_matrix4x4.Matrix4x4.md)

Multiplies another 4x4 matrix

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix4x4`](physics_matrix4x4.Matrix4x4.md) |

#### Returns

[`Matrix4x4`](physics_matrix4x4.Matrix4x4.md)

___

### toString

▸ **toString**(): `string`

Converts the matrix into a string

#### Returns

`string`
