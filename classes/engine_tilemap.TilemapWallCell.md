[tsgame](../README.md) / [Exports](../modules.md) / [engine/tilemap](../modules/engine_tilemap.md) / TilemapWallCell

# Class: TilemapWallCell

[engine/tilemap](../modules/engine_tilemap.md).TilemapWallCell

A physics body
the physics engine is abstracted away

## Hierarchy

- [`RectangleBody`](physics_physicsBody.RectangleBody.md)

  ↳ **`TilemapWallCell`**

## Table of contents

### Constructors

- [constructor](engine_tilemap.TilemapWallCell.md#constructor)

### Properties

- [event](engine_tilemap.TilemapWallCell.md#event)
- [game](engine_tilemap.TilemapWallCell.md#game)
- [offset](engine_tilemap.TilemapWallCell.md#offset)

### Accessors

- [airResistance](engine_tilemap.TilemapWallCell.md#airresistance)
- [angle](engine_tilemap.TilemapWallCell.md#angle)
- [children](engine_tilemap.TilemapWallCell.md#children)
- [collisionCategory](engine_tilemap.TilemapWallCell.md#collisioncategory)
- [collisionMask](engine_tilemap.TilemapWallCell.md#collisionmask)
- [friction](engine_tilemap.TilemapWallCell.md#friction)
- [isSensor](engine_tilemap.TilemapWallCell.md#issensor)
- [parent](engine_tilemap.TilemapWallCell.md#parent)
- [position](engine_tilemap.TilemapWallCell.md#position)
- [size](engine_tilemap.TilemapWallCell.md#size)
- [static](engine_tilemap.TilemapWallCell.md#static)
- [velocity](engine_tilemap.TilemapWallCell.md#velocity)

### Methods

- [\_step](engine_tilemap.TilemapWallCell.md#_step)
- [addChild](engine_tilemap.TilemapWallCell.md#addchild)
- [removeChild](engine_tilemap.TilemapWallCell.md#removechild)
- [step](engine_tilemap.TilemapWallCell.md#step)
- [translate](engine_tilemap.TilemapWallCell.md#translate)

## Constructors

### constructor

• **new TilemapWallCell**(`size`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`Vector2D`](physics_vector.Vector2D.md) |
| `code` | `TilemapCode` |

#### Overrides

[RectangleBody](physics_physicsBody.RectangleBody.md).[constructor](physics_physicsBody.RectangleBody.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[event](physics_physicsBody.RectangleBody.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[game](physics_physicsBody.RectangleBody.md#game)

#### Defined in

[engine/gameObject.ts:14](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L14)

___

### offset

• **offset**: [`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[offset](physics_physicsBody.RectangleBody.md#offset)

#### Defined in

[physics/physicsBody.ts:20](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L20)

## Accessors

### airResistance

• `get` **airResistance**(): `number`

#### Returns

`number`

#### Inherited from

RectangleBody.airResistance

• `set` **airResistance**(`ar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ar` | `number` |

#### Returns

`void`

#### Inherited from

RectangleBody.airResistance

___

### angle

• `get` **angle**(): `number`

#### Returns

`number`

#### Inherited from

RectangleBody.angle

• `set` **angle**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`void`

#### Inherited from

RectangleBody.angle

___

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Inherited from

RectangleBody.children

___

### collisionCategory

• `get` **collisionCategory**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

#### Inherited from

RectangleBody.collisionCategory

• `set` **collisionCategory**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

#### Inherited from

RectangleBody.collisionCategory

___

### collisionMask

• `get` **collisionMask**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

#### Inherited from

RectangleBody.collisionMask

• `set` **collisionMask**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

#### Inherited from

RectangleBody.collisionMask

___

### friction

• `get` **friction**(): `number`

#### Returns

`number`

#### Inherited from

RectangleBody.friction

• `set` **friction**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `number` |

#### Returns

`void`

#### Inherited from

RectangleBody.friction

___

### isSensor

• `get` **isSensor**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RectangleBody.isSensor

• `set` **isSensor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

RectangleBody.isSensor

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

RectangleBody.parent

___

### position

• `get` **position**(): [`Vector2D`](physics_vector.Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

RectangleBody.position

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

#### Inherited from

RectangleBody.position

___

### size

• `get` **size**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

RectangleBody.size

___

### static

• `get` **static**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RectangleBody.static

• `set` **static**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

RectangleBody.static

___

### velocity

• `get` **velocity**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

RectangleBody.velocity

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

#### Inherited from

RectangleBody.velocity

## Methods

### \_step

▸ **_step**(`delta`): `void`

To be overwritten by children classes

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[_step](physics_physicsBody.RectangleBody.md#_step)

___

### addChild

▸ **addChild**(`child`): `void`

Adds a game object as a child
children objects are removed when
the parent is removed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) | ```typescript const game = new Game(); const parent = new GameObject(); const child = new GameObject(); parent.addChild(child);  // Child is also added to game game.addGameObject(parent);  // Child is also removed from game game.removeGameObject(parent); ``` |

#### Returns

`void`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[addChild](physics_physicsBody.RectangleBody.md#addchild)

___

### removeChild

▸ **removeChild**(`child`): `void`

Removes a game object as a child
children objects are removed when
the parent is removed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) | ```typescript const game = new Game(); const parent = new GameObject(); const child = new GameObject(); parent.addChild(child);  // Child is also added to game game.addGameObject(parent);  // Child is also removed from game game.removeGameObject(parent); ``` |

#### Returns

`void`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[removeChild](physics_physicsBody.RectangleBody.md#removechild)

___

### step

▸ `Readonly` **step**(`delta`): `void`

Called each game loop before the physics loop
to hook into this, the children class must ovewrite
the _step method

**`remarks`** Children nodes are updated after parent nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | milliseconds |

#### Returns

`void`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[step](physics_physicsBody.RectangleBody.md#step)

___

### translate

▸ `Protected` **translate**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

#### Inherited from

[RectangleBody](physics_physicsBody.RectangleBody.md).[translate](physics_physicsBody.RectangleBody.md#translate)
