[tsgame](../README.md) / [Exports](../modules.md) / AssetLoader

# Class: AssetLoader

## Table of contents

### Constructors

- [constructor](AssetLoader.md#constructor)

### Methods

- [load](AssetLoader.md#load)
- [getSpriteTexture](AssetLoader.md#getspritetexture)
- [getSpriteSheet](AssetLoader.md#getspritesheet)

## Constructors

### constructor

• **new AssetLoader**(`loader?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `loader` | `Loader` | `PIXI.Loader.shared` |

## Methods

### load

▸ **load**(`assets`): `Promise`<`void`\>

Loads all the given assets

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`Asset`](../interfaces/Asset.md)[] |

#### Returns

`Promise`<`void`\>

___

### getSpriteTexture

▸ **getSpriteTexture**(`name`): `undefined` \| `Texture`<`Resource`\>

Returns the PIXI Texture given the name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `Texture`<`Resource`\>

___

### getSpriteSheet

▸ **getSpriteSheet**(`name`): `undefined` \| `Spritesheet`

Gets a given sprite sheet

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `Spritesheet`
