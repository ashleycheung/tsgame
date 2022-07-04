[tsgame](../README.md) / [Exports](../modules.md) / SpriteSheetAsset

# Interface: SpriteSheetAsset

## Hierarchy

- [`Asset`](Asset.md)

  ↳ **`SpriteSheetAsset`**

## Table of contents

### Properties

- [name](SpriteSheetAsset.md#name)
- [path](SpriteSheetAsset.md#path)
- [type](SpriteSheetAsset.md#type)
- [data](SpriteSheetAsset.md#data)
- [animations](SpriteSheetAsset.md#animations)

## Properties

### name

• **name**: `string`

#### Inherited from

[Asset](Asset.md).[name](Asset.md#name)

#### Defined in

[view/assets.ts:6](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L6)

___

### path

• **path**: `string`

#### Inherited from

[Asset](Asset.md).[path](Asset.md#path)

#### Defined in

[view/assets.ts:7](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L7)

___

### type

• **type**: ``"Sprite"`` \| ``"SpriteSheet"``

#### Inherited from

[Asset](Asset.md).[type](Asset.md#type)

#### Defined in

[view/assets.ts:8](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L8)

___

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frames` | [`Vector2D`](../classes/Vector2D.md) |

#### Defined in

[view/assets.ts:13](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L13)

___

### animations

• **animations**: `Object`

#### Index signature

▪ [animName: `string`]: `number`[]

#### Defined in

[view/assets.ts:16](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/view/assets.ts#L16)
