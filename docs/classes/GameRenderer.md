[tsgame](../README.md) / [Exports](../modules.md) / GameRenderer

# Class: GameRenderer

## Table of contents

### Properties

- [loader](GameRenderer.md#loader)
- [fps](GameRenderer.md#fps)

### Constructors

- [constructor](GameRenderer.md#constructor)

### Methods

- [setState](GameRenderer.md#setstate)
- [update](GameRenderer.md#update)
- [render](GameRenderer.md#render)

### Accessors

- [position](GameRenderer.md#position)
- [width](GameRenderer.md#width)
- [height](GameRenderer.md#height)

## Properties

### loader

• `Readonly` **loader**: [`AssetLoader`](AssetLoader.md)

#### Defined in

[view/renderer.ts:22](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/renderer.ts#L22)

___

### fps

• `Readonly` **fps**: [`FPSTracker`](FPSTracker.md)

#### Defined in

[view/renderer.ts:24](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/renderer.ts#L24)

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

## Accessors

### position

• `get` **position**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

• `set` **position**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

___

### width

• `get` **width**(): `number`

#### Returns

`number`

___

### height

• `get` **height**(): `number`

#### Returns

`number`
