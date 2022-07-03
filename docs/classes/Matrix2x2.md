[tsgame](../README.md) / [Exports](../modules.md) / Matrix2x2

# Class: Matrix2x2

Represents a 2 by 2 matrix

## Table of contents

### Properties

- [a11](Matrix2x2.md#a11)
- [a12](Matrix2x2.md#a12)
- [a21](Matrix2x2.md#a21)
- [a22](Matrix2x2.md#a22)

### Constructors

- [constructor](Matrix2x2.md#constructor)

### Methods

- [determinant](Matrix2x2.md#determinant)

## Properties

### a11

• `Readonly` **a11**: `number`

#### Defined in

[physics/matrix2x2.ts:7](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/matrix2x2.ts#L7)

___

### a12

• `Readonly` **a12**: `number`

#### Defined in

[physics/matrix2x2.ts:8](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/matrix2x2.ts#L8)

___

### a21

• `Readonly` **a21**: `number`

#### Defined in

[physics/matrix2x2.ts:9](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/matrix2x2.ts#L9)

___

### a22

• `Readonly` **a22**: `number`

#### Defined in

[physics/matrix2x2.ts:10](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/physics/matrix2x2.ts#L10)

## Constructors

### constructor

• **new Matrix2x2**(`a11`, `a12`, `a21`, `a22`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a11` | `number` |
| `a12` | `number` |
| `a21` | `number` |
| `a22` | `number` |

## Methods

### determinant

▸ **determinant**(): `number`

Returns the the determinant of the matrix
[Read more](https://www.chilimath.com/lessons/advanced-algebra/determinant-2x2-matrix/)

#### Returns

`number`
