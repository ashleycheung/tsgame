[tsgame](../README.md) / [Exports](../modules.md) / [engine/tilemap](../modules/engine_tilemap.md) / TilemapWallCell

# Class: TilemapWallCell

[engine/tilemap](../modules/engine_tilemap.md).TilemapWallCell

A physics body
the physics engine is abstracted away

## Hierarchy

- [`PhysicsBody`](physics_physicsBody.PhysicsBody.md)

  ↳ **`TilemapWallCell`**

## Table of contents

### Constructors

- [constructor](engine_tilemap.TilemapWallCell.md#constructor)

### Properties

- [\_shape](engine_tilemap.TilemapWallCell.md#_shape)
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
- [groups](engine_tilemap.TilemapWallCell.md#groups)
- [id](engine_tilemap.TilemapWallCell.md#id)
- [isSensor](engine_tilemap.TilemapWallCell.md#issensor)
- [parent](engine_tilemap.TilemapWallCell.md#parent)
- [position](engine_tilemap.TilemapWallCell.md#position)
- [static](engine_tilemap.TilemapWallCell.md#static)
- [velocity](engine_tilemap.TilemapWallCell.md#velocity)

### Methods

- [\_step](engine_tilemap.TilemapWallCell.md#_step)
- [addChild](engine_tilemap.TilemapWallCell.md#addchild)
- [addToGroup](engine_tilemap.TilemapWallCell.md#addtogroup)
- [isInGroup](engine_tilemap.TilemapWallCell.md#isingroup)
- [removeChild](engine_tilemap.TilemapWallCell.md#removechild)
- [removeFromGroup](engine_tilemap.TilemapWallCell.md#removefromgroup)
- [root](engine_tilemap.TilemapWallCell.md#root)
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

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[constructor](physics_physicsBody.PhysicsBody.md#constructor)

## Properties

### \_shape

• `Readonly` **\_shape**: [`PhysicsShape`](physics_physicsShape.PhysicsShape.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[_shape](physics_physicsBody.PhysicsBody.md#_shape)

#### Defined in

[physics/physicsBody.ts:14](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L14)

___

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[event](physics_physicsBody.PhysicsBody.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[game](physics_physicsBody.PhysicsBody.md#game)

#### Defined in

[engine/gameObject.ts:24](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L24)

___

### offset

• **offset**: [`Vector2D`](physics_vector.Vector2D.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[offset](physics_physicsBody.PhysicsBody.md#offset)

#### Defined in

[physics/physicsBody.ts:18](https://github.com/ashleycheung/tsgame/blob/f970211/src/physics/physicsBody.ts#L18)

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

• `get` **children**(): [`GameObject`](engine_gameObject.GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](engine_gameObject.GameObject.md)[]

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

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]

#### Inherited from

PhysicsBody.groups

___

### id

• `get` **id**(): ``null`` \| `string`

Returns the unique id of the game object
This will be null if the game object is not
in the game

#### Returns

``null`` \| `string`

#### Inherited from

PhysicsBody.id

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

Gets the immediate parent of this game object

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

```typescript
class MyObject extends GameObject {

   override _step(delta: number): void {
     super._step(delta);
     // Add subclass functionality here
   }
}
```

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

```typescript
const game = new Game();
const parent = new GameObject();
const child = new GameObject();
parent.addChild(child);

// Child is also added to game
game.addGameObject(parent);

// Child is also removed from game
game.removeGameObject(parent);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) |

#### Returns

`void`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[addChild](physics_physicsBody.PhysicsBody.md#addchild)

___

### addToGroup

▸ **addToGroup**(`group`): `void`

Adds this game object to a group

```typescript
const player = new GameObject();
const game = new Game();
game.addGameObject(player);

o.addToGroup("player");

// Returns [player]
console.log(game.getGameObjectsInGroup("player"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `string` |

#### Returns

`void`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[addToGroup](physics_physicsBody.PhysicsBody.md#addtogroup)

___

### isInGroup

▸ **isInGroup**(`group`): `boolean`

Returns whether the game object is
a part of the given group

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `string` |

#### Returns

`boolean`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[isInGroup](physics_physicsBody.PhysicsBody.md#isingroup)

___

### removeChild

▸ **removeChild**(`child`): `void`

Removes a game object as a child
children objects are removed when
the parent is removed

```typescript
const game = new Game();
const parent = new GameObject();
const child = new GameObject();
parent.addChild(child);

// Child is also added to game
game.addGameObject(parent);

// Child is also removed from game
game.removeGameObject(parent);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) |

#### Returns

`void`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[removeChild](physics_physicsBody.PhysicsBody.md#removechild)

___

### removeFromGroup

▸ **removeFromGroup**(`group`): `void`

Removes this game object from a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | `string` |

#### Returns

`void`

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[removeFromGroup](physics_physicsBody.PhysicsBody.md#removefromgroup)

___

### root

▸ **root**(): [`GameObject`](engine_gameObject.GameObject.md)

Recusively searches parents until
a root parent is found

```typescript
const root = new GameObject();
const parent = new GameObject();
const child = new GameObject();
root.addChild(parent);
parent.addChild(child);

// Returns root
console.log(child.root());
```

#### Returns

[`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

[PhysicsBody](physics_physicsBody.PhysicsBody.md).[root](physics_physicsBody.PhysicsBody.md#root)

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
