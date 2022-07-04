[tsgame](../README.md) / [Exports](../modules.md) / StatefulObjectUpdate

# Interface: StatefulObjectUpdate<T\>

Represents an update to a object
needed for the renderer to update
an already existing object with known
render state

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [id](StatefulObjectUpdate.md#id)
- [update](StatefulObjectUpdate.md#update)

## Properties

### id

• **id**: `string`

The game object id

#### Defined in

[state/statefulObject.ts:129](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObject.ts#L129)

___

### update

• **update**: `Partial`<`T`\>

The updates to the game object

#### Defined in

[state/statefulObject.ts:133](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObject.ts#L133)
