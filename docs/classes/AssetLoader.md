[tsgame](../README.md) / [Exports](../modules.md) / AssetLoader

# Class: AssetLoader

## Table of contents

### Constructors

- [constructor](AssetLoader.md#constructor)

### Methods

- [load](AssetLoader.md#load)
- [getSpriteTexture](AssetLoader.md#getspritetexture)
- [getSpriteSheet](AssetLoader.md#getspritesheet)
- [getTileSetTile](AssetLoader.md#gettilesettile)

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

___

### getTileSetTile

▸ **getTileSetTile**(`name`, `tileNumber`): `undefined` \| `Texture`<`Resource`\>

Given the name of a tileset
the number of neighbours the tile has
and the configuration number based off the
seemlessMap part of the tileSetAsset
return the texture of that particular tile

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `tileNumber` | `number` |

#### Returns

`undefined` \| `Texture`<`Resource`\>
