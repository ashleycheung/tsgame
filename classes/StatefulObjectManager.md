[tsgame](../README.md) / [Exports](../modules.md) / StatefulObjectManager

# Class: StatefulObjectManager

Responsible for managing all the 
render states in a game

## Table of contents

### Constructors

- [constructor](StatefulObjectManager.md#constructor)

### Methods

- [getState](StatefulObjectManager.md#getstate)
- [getUpdate](StatefulObjectManager.md#getupdate)

## Constructors

### constructor

• **new StatefulObjectManager**(`game`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`Game`](Game.md) |

## Methods

### getState

▸ **getState**(): [`GameRenderState`](../modules.md#gamerenderstate)

Gets the whole render state of the game

#### Returns

[`GameRenderState`](../modules.md#gamerenderstate)

___

### getUpdate

▸ **getUpdate**(): ``null`` \| [`GameRenderUpdate`](../modules.md#gamerenderupdate)

Gets a game update needed for the renderer
to render the game. Returns null if there are
no updates

#### Returns

``null`` \| [`GameRenderUpdate`](../modules.md#gamerenderupdate)
