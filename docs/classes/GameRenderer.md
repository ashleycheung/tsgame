[tsgame](../README.md) / [Exports](../modules.md) / GameRenderer

# Class: GameRenderer

## Table of contents

### Properties

- [loader](GameRenderer.md#loader)

### Constructors

- [constructor](GameRenderer.md#constructor)

### Methods

- [setState](GameRenderer.md#setstate)
- [update](GameRenderer.md#update)
- [render](GameRenderer.md#render)

## Properties

### loader

• `Readonly` **loader**: [`AssetLoader`](AssetLoader.md)

#### Defined in

[view/renderer.ts:19](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/view/renderer.ts#L19)

## Constructors

### constructor

• **new GameRenderer**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

## Methods

### setState

▸ **setState**(`gameState`): `void`

Sets the game state of the renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameState` | [`GameRenderState`](../interfaces/GameRenderState.md) |

#### Returns

`void`

___

### update

▸ **update**(`gameUpdate`): `void`

Updates the game state of the renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameUpdate` | [`GameRenderUpdate`](../interfaces/GameRenderUpdate.md) |

#### Returns

`void`

___

### render

▸ **render**(`delta`): `void`

Renders the stage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | time passed since last render |

#### Returns

`void`
