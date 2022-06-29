[tsgame](../README.md) / [Exports](../modules.md) / [physics/matrix2x2](../modules/physics_matrix2x2.md) / Matrix2x2

# Class: Matrix2x2

[physics/matrix2x2](../modules/physics_matrix2x2.md).Matrix2x2

Represents a 2 by 2 matrix

## Table of contents

### Constructors

- [constructor](physics_matrix2x2.Matrix2x2.md#constructor)

### Properties

- [a11](physics_matrix2x2.Matrix2x2.md#a11)
- [a12](physics_matrix2x2.Matrix2x2.md#a12)
- [a21](physics_matrix2x2.Matrix2x2.md#a21)
- [a22](physics_matrix2x2.Matrix2x2.md#a22)

### Methods

- [determinant](physics_matrix2x2.Matrix2x2.md#determinant)

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

## Properties

### a11

• `Readonly` **a11**: `number`

#### Defined in

physics/matrix2x2.ts:7

___

### a12

• `Readonly` **a12**: `number`

#### Defined in

physics/matrix2x2.ts:8

___

### a21

• `Readonly` **a21**: `number`

#### Defined in

physics/matrix2x2.ts:9

___

### a22

• `Readonly` **a22**: `number`

#### Defined in

physics/matrix2x2.ts:10

## Methods

### determinant

▸ **determinant**(): `number`

Returns the the determinant of the matrix
[Read more](https://www.chilimath.com/lessons/advanced-algebra/determinant-2x2-matrix/)

#### Returns

`number`
