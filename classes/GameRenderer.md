[tsgame](../README.md) / [Exports](../modules.md) / GameRenderer

# Class: GameRenderer

## Table of contents

### Constructors

- [constructor](GameRenderer.md#constructor)

### Methods

- [load](GameRenderer.md#load)
- [setState](GameRenderer.md#setstate)
- [update](GameRenderer.md#update)
- [render](GameRenderer.md#render)

## Constructors

### constructor

• **new GameRenderer**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

## Methods

### load

▸ **load**(`assets`): `Promise`<`void`\>

Loads an array of assets

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [name: string, path: string][] |

#### Returns

`Promise`<`void`\>

___

### setState

▸ **setState**(`gameState`): `void`

Sets the game state of the renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameState` | [`GameRenderState`](../modules.md#gamerenderstate) |

#### Returns

`void`

___

### update

▸ **update**(`gameUpdate`): `void`

Updates the game state of the renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameUpdate` | [`GameRenderUpdate`](../modules.md#gamerenderupdate) |

#### Returns

`void`

___

### render

▸ **render**(): `void`

Renders the stage

#### Returns

`void`
