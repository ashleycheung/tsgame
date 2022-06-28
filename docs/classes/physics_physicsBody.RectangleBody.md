[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsBody](../modules/physics_physicsBody.md) / RectangleBody

# Class: RectangleBody

[physics/physicsBody](../modules/physics_physicsBody.md).RectangleBody

A physics body
the physics engine is abstracted away

## Hierarchy

- [`PhysicsBody`](physics_physicsBody.PhysicsBody.md)

  ↳ **`RectangleBody`**

  ↳↳ [`TilemapWallCell`](engine_tilemap.TilemapWallCell.md)

## Table of contents

### Constructors

- [constructor](physics_physicsBody.RectangleBody.md#constructor)

### Properties

- [event](physics_physicsBody.RectangleBody.md#event)
- [game](physics_physicsBody.RectangleBody.md#game)
- [offset](physics_physicsBody.RectangleBody.md#offset)

### Accessors

- [airResistance](physics_physicsBody.RectangleBody.md#airresistance)
- [angle](physics_physicsBody.RectangleBody.md#angle)
- [children](physics_physicsBody.RectangleBody.md#children)
- [collisionCategory](physics_physicsBody.RectangleBody.md#collisioncategory)
- [collisionMask](physics_physicsBody.RectangleBody.md#collisionmask)
- [friction](physics_physicsBody.RectangleBody.md#friction)
- [isSensor](physics_physicsBody.RectangleBody.md#issensor)
- [parent](physics_physicsBody.RectangleBody.md#parent)
- [position](physics_physicsBody.RectangleBody.md#position)
- [size](physics_physicsBody.RectangleBody.md#size)
- [static](physics_physicsBody.RectangleBody.md#static)
- [velocity](physics_physicsBody.RectangleBody.md#velocity)

### Methods

- [\_step](physics_physicsBody.RectangleBody.md#_step)
- [addChild](physics_physicsBody.RectangleBody.md#addchild)
- [removeChild](physics_physicsBody.RectangleBody.md#removechild)
- [step](physics_physicsBody.RectangleBody.md#step)
- [translate](physics_physicsBody.RectangleBody.md#translate)

## Constructors

### constructor

• **new RectangleBody**(`size`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Overrides

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[constructor](physics_physicsBody.PhysicsBody.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[event](physics_physicsBody.PhysicsBody.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[game](physics_physicsBody.PhysicsBody.md#game)

#### Defined in

[engine/gameObject.ts:14](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L14)

___

### offset

• **offset**: [`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[offset](physics_physicsBody.PhysicsBody.md#offset)

#### Defined in

[physics/physicsBody.ts:20](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/physics/physicsBody.ts#L20)

## Accessors

### airResistance

• `get` **airResistance**(): `number`

#### Returns

`number`

#### Inherited from

PhysicsBody.airResistance

• `set` **airResistance**(`ar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ar` | `number` |

#### Returns

`void`

#### Inherited from

PhysicsBody.airResistance

___

### angle

• `get` **angle**(): `number`

#### Returns

`number`

#### Inherited from

PhysicsBody.angle

• `set` **angle**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`void`

#### Inherited from

PhysicsBody.angle

___

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Inherited from

PhysicsBody.children

___

### collisionCategory

• `get` **collisionCategory**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

#### Inherited from

PhysicsBody.collisionCategory

• `set` **collisionCategory**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

#### Inherited from

PhysicsBody.collisionCategory

___

### collisionMask

• `get` **collisionMask**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

#### Inherited from

PhysicsBody.collisionMask

• `set` **collisionMask**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

#### Inherited from

PhysicsBody.collisionMask

___

### friction

• `get` **friction**(): `number`

#### Returns

`number`

#### Inherited from

PhysicsBody.friction

• `set` **friction**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `number` |

#### Returns

`void`

#### Inherited from

PhysicsBody.friction

___

### isSensor

• `get` **isSensor**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicsBody.isSensor

• `set` **isSensor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicsBody.isSensor

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

PhysicsBody.parent

___

### position

• `get` **position**(): [`Vector2D`](physics_vector.Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

PhysicsBody.position

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

#### Inherited from

PhysicsBody.position

___

### size

• `get` **size**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

___

### static

• `get` **static**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicsBody.static

• `set` **static**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicsBody.static

___

### velocity

• `get` **velocity**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

PhysicsBody.velocity

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

#### Inherited from

PhysicsBody.velocity

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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[_step](physics_physicsBody.PhysicsBody.md#_step)

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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[addChild](physics_physicsBody.PhysicsBody.md#addchild)

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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[removeChild](physics_physicsBody.PhysicsBody.md#removechild)

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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[step](physics_physicsBody.PhysicsBody.md#step)

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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[translate](physics_physicsBody.PhysicsBody.md#translate)
