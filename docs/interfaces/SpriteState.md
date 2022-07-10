[tsgame](../README.md) / [Exports](../modules.md) / SpriteState

# Interface: SpriteState

The state of a sprite
a sprite should be able to be created
from just the sprite state

## Table of contents

### Properties

- [textureName](SpriteState.md#texturename)
- [position](SpriteState.md#position)
- [anchor](SpriteState.md#anchor)
- [scale](SpriteState.md#scale)
- [angle](SpriteState.md#angle)

## Properties

### textureName

• **textureName**: `string`

The alias name for the texture.
The path for this texture is managed by the client

#### Defined in

[state/sprite.ts:18](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/sprite.ts#L18)

___

### position

• **position**: [`Vector2D`](../classes/Vector2D.md)

#### Defined in

[state/sprite.ts:20](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/sprite.ts#L20)

___

### anchor

• **anchor**: [`Vector2D`](../classes/Vector2D.md)

The default is (0,0), this means the sprite's origin is the top left.
Setting the anchor to (0.5,0.5) means the sprite's origin is centered.
Setting the anchor to (1,1) would mean the sprite's origin point will be the bottom right corner.

#### Defined in

[state/sprite.ts:27](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/sprite.ts#L27)

___

### scale

• **scale**: [`Vector2D`](../classes/Vector2D.md)

#### Defined in

[state/sprite.ts:29](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/sprite.ts#L29)

___

### angle

• **angle**: `number`

#### Defined in

[state/sprite.ts:31](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/sprite.ts#L31)
