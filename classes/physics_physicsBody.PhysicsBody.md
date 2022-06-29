[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsBody](../modules/physics_physicsBody.md) / PhysicsBody

# Class: PhysicsBody

[physics/physicsBody](../modules/physics_physicsBody.md).PhysicsBody

A physics body
the physics engine is abstracted away

## Hierarchy

- [`GameObject`](engine_gameObject.GameObject.md)

  ↳ **`PhysicsBody`**

  ↳↳ [`TilemapWallCell`](engine_tilemap.TilemapWallCell.md)

## Table of contents

### Constructors

- [constructor](physics_physicsBody.PhysicsBody.md#constructor)

### Properties

- [\_shape](physics_physicsBody.PhysicsBody.md#_shape)
- [event](physics_physicsBody.PhysicsBody.md#event)
- [game](physics_physicsBody.PhysicsBody.md#game)
- [offset](physics_physicsBody.PhysicsBody.md#offset)

### Accessors

- [airResistance](physics_physicsBody.PhysicsBody.md#airresistance)
- [angle](physics_physicsBody.PhysicsBody.md#angle)
- [children](physics_physicsBody.PhysicsBody.md#children)
- [collisionCategory](physics_physicsBody.PhysicsBody.md#collisioncategory)
- [collisionMask](physics_physicsBody.PhysicsBody.md#collisionmask)
- [friction](physics_physicsBody.PhysicsBody.md#friction)
- [groups](physics_physicsBody.PhysicsBody.md#groups)
- [id](physics_physicsBody.PhysicsBody.md#id)
- [isSensor](physics_physicsBody.PhysicsBody.md#issensor)
- [parent](physics_physicsBody.PhysicsBody.md#parent)
- [position](physics_physicsBody.PhysicsBody.md#position)
- [static](physics_physicsBody.PhysicsBody.md#static)
- [velocity](physics_physicsBody.PhysicsBody.md#velocity)

### Methods

- [\_step](physics_physicsBody.PhysicsBody.md#_step)
- [addChild](physics_physicsBody.PhysicsBody.md#addchild)
- [addToGroup](physics_physicsBody.PhysicsBody.md#addtogroup)
- [isInGroup](physics_physicsBody.PhysicsBody.md#isingroup)
- [removeChild](physics_physicsBody.PhysicsBody.md#removechild)
- [removeFromGroup](physics_physicsBody.PhysicsBody.md#removefromgroup)
- [root](physics_physicsBody.PhysicsBody.md#root)
- [step](physics_physicsBody.PhysicsBody.md#step)
- [translate](physics_physicsBody.PhysicsBody.md#translate)

## Constructors

### constructor

• **new PhysicsBody**(`shape`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`PhysicsShape`](physics_physicsShape.PhysicsShape.md) |

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[constructor](engine_gameObject.GameObject.md#constructor)

## Properties

### \_shape

• `Readonly` **\_shape**: [`PhysicsShape`](physics_physicsShape.PhysicsShape.md)

#### Defined in

[physics/physicsBody.ts:14](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsBody.ts#L14)

___

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[event](engine_gameObject.GameObject.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[game](engine_gameObject.GameObject.md#game)

#### Defined in

[engine/gameObject.ts:24](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L24)

___

### offset

• **offset**: [`Vector2D`](physics_vector2d.Vector2D.md)

#### Defined in

[physics/physicsBody.ts:18](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsBody.ts#L18)

## Accessors

### airResistance

• `get` **airResistance**(): `number`

#### Returns

`number`

• `set` **airResistance**(`ar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ar` | `number` |

#### Returns

`void`

___

### angle

• `get` **angle**(): `number`

#### Returns

`number`

• `set` **angle**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`void`

___

### children

• `get` **children**(): [`GameObject`](engine_gameObject.GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](engine_gameObject.GameObject.md)[]

#### Inherited from

GameObject.children

___

### collisionCategory

• `get` **collisionCategory**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

• `set` **collisionCategory**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

___

### collisionMask

• `get` **collisionMask**(): `Set`<`number`\>

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Returns

`Set`<`number`\>

• `set` **collisionMask**(`v`): `void`

https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter.category

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Set`<`number`\> |

#### Returns

`void`

___

### friction

• `get` **friction**(): `number`

#### Returns

`number`

• `set` **friction**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `number` |

#### Returns

`void`

___

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]

#### Inherited from

GameObject.groups

___

### id

• `get` **id**(): ``null`` \| `string`

Returns the unique id of the game object
This will be null if the game object is not
in the game

#### Returns

``null`` \| `string`

#### Inherited from

GameObject.id

___

### isSensor

• `get` **isSensor**(): `boolean`

#### Returns

`boolean`

• `set` **isSensor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

GameObject.parent

___

### position

• `get` **position**(): [`Vector2D`](physics_vector2d.Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`void`

___

### static

• `get` **static**(): `boolean`

#### Returns

`boolean`

• `set` **static**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### velocity

• `get` **velocity**(): [`Vector2D`](physics_vector2d.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector2d.Vector2D.md)

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`void`

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

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[_step](engine_gameObject.GameObject.md#_step)

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

[GameObject](engine_gameObject.GameObject.md).[addChild](engine_gameObject.GameObject.md#addchild)

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

[GameObject](engine_gameObject.GameObject.md).[addToGroup](engine_gameObject.GameObject.md#addtogroup)

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

[GameObject](engine_gameObject.GameObject.md).[isInGroup](engine_gameObject.GameObject.md#isingroup)

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

[GameObject](engine_gameObject.GameObject.md).[removeChild](engine_gameObject.GameObject.md#removechild)

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

[GameObject](engine_gameObject.GameObject.md).[removeFromGroup](engine_gameObject.GameObject.md#removefromgroup)

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

[GameObject](engine_gameObject.GameObject.md).[root](engine_gameObject.GameObject.md#root)

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

[GameObject](engine_gameObject.GameObject.md).[step](engine_gameObject.GameObject.md#step)

___

### translate

▸ `Protected` **translate**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](physics_vector2d.Vector2D.md) |

#### Returns

`void`
