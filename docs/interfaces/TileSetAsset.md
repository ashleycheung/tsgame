[tsgame](../README.md) / [Exports](../modules.md) / TileSetAsset

# Interface: TileSetAsset

## Hierarchy

- [`SpriteSheetAsset`](SpriteSheetAsset.md)

  ↳ **`TileSetAsset`**

## Table of contents

### Properties

- [name](TileSetAsset.md#name)
- [path](TileSetAsset.md#path)
- [type](TileSetAsset.md#type)
- [data](TileSetAsset.md#data)
- [animations](TileSetAsset.md#animations)
- [seemlessMap](TileSetAsset.md#seemlessmap)

## Properties

### name

• **name**: `string`

#### Inherited from

[SpriteSheetAsset](SpriteSheetAsset.md).[name](SpriteSheetAsset.md#name)

#### Defined in

[view/assets.ts:7](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L7)

___

### path

• **path**: `string`

#### Inherited from

[SpriteSheetAsset](SpriteSheetAsset.md).[path](SpriteSheetAsset.md#path)

#### Defined in

[view/assets.ts:8](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L8)

___

### type

• **type**: ``"Sprite"`` \| ``"SpriteSheet"`` \| ``"TileSet"``

#### Inherited from

[SpriteSheetAsset](SpriteSheetAsset.md).[type](SpriteSheetAsset.md#type)

#### Defined in

[view/assets.ts:9](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L9)

___

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frames` | [`Vector2D`](../classes/Vector2D.md) |

#### Inherited from

[SpriteSheetAsset](SpriteSheetAsset.md).[data](SpriteSheetAsset.md#data)

#### Defined in

[view/assets.ts:14](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L14)

___

### animations

• `Optional` **animations**: `Object`

#### Index signature

▪ [animName: `string`]: `number`[]

#### Inherited from

[SpriteSheetAsset](SpriteSheetAsset.md).[animations](SpriteSheetAsset.md#animations)

#### Defined in

[view/assets.ts:17](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L17)

___

### seemlessMap

• **seemlessMap**: `Object`

The tile number of a specific 3 x 3 tile configuration is
the calculated by labelling the 8 surrounding tiles from
0 to 7. If that tile exists, add 2 ^ k to the tile code where
k is the tile label.
This should lead to a value of at most 2 ^ 8 -  1

#### Index signature

▪ [tileType: `number`]: `number`[]

#### Defined in

[view/assets.ts:33](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L33)
