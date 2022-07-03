[tsgame](../README.md) / [Exports](../modules.md) / TilemapWallCell

# Class: TilemapWallCell

A specific cell in the tilemap

## Hierarchy

- [`PhysicsBody`](PhysicsBody.md)

  ↳ **`TilemapWallCell`**

## Table of contents

### Properties

- [event](TilemapWallCell.md#event)
- [game](TilemapWallCell.md#game)
- [\_shape](TilemapWallCell.md#_shape)
- [type](TilemapWallCell.md#type)
- [offset](TilemapWallCell.md#offset)

### Accessors

- [id](TilemapWallCell.md#id)
- [parent](TilemapWallCell.md#parent)
- [children](TilemapWallCell.md#children)
- [groups](TilemapWallCell.md#groups)
- [position](TilemapWallCell.md#position)
- [angle](TilemapWallCell.md#angle)
- [friction](TilemapWallCell.md#friction)
- [airResistance](TilemapWallCell.md#airresistance)
- [velocity](TilemapWallCell.md#velocity)
- [static](TilemapWallCell.md#static)
- [collisionCategory](TilemapWallCell.md#collisioncategory)
- [collisionMask](TilemapWallCell.md#collisionmask)
- [isSensor](TilemapWallCell.md#issensor)

### Methods

- [addToGroup](TilemapWallCell.md#addtogroup)
- [removeFromGroup](TilemapWallCell.md#removefromgroup)
- [isInGroup](TilemapWallCell.md#isingroup)
- [root](TilemapWallCell.md#root)
- [addChild](TilemapWallCell.md#addchild)
- [removeChild](TilemapWallCell.md#removechild)
- [step](TilemapWallCell.md#step)
- [getObjectState](TilemapWallCell.md#getobjectstate)
- [translate](TilemapWallCell.md#translate)
- [\_step](TilemapWallCell.md#_step)
- [storeLastState](TilemapWallCell.md#storelaststate)
- [getState](TilemapWallCell.md#getstate)
- [getUpdate](TilemapWallCell.md#getupdate)

### Constructors

- [constructor](TilemapWallCell.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[PhysicsBody](PhysicsBody.md).[event](PhysicsBody.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[PhysicsBody](PhysicsBody.md).[game](PhysicsBody.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L25)

___

### \_shape

• `Readonly` **\_shape**: [`PhysicsShape`](PhysicsShape.md)

#### Inherited from

[PhysicsBody](PhysicsBody.md).[_shape](PhysicsBody.md#_shape)

#### Defined in

[physics/physicsBody.ts:16](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L16)

___

### type

• `Readonly` **type**: `string` = `"PhysicsBody"`

#### Inherited from

[PhysicsBody](PhysicsBody.md).[type](PhysicsBody.md#type)

#### Defined in

[physics/physicsBody.ts:18](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L18)

___

### offset

• **offset**: [`Vector2D`](Vector2D.md)

#### Inherited from

[PhysicsBody](PhysicsBody.md).[offset](PhysicsBody.md#offset)

#### Defined in

[physics/physicsBody.ts:22](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L22)

## Accessors

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

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](GameObject.md)

#### Inherited from

PhysicsBody.parent

___

### children

• `get` **children**(): [`GameObject`](GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](GameObject.md)[]

#### Inherited from

PhysicsBody.children

___

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]

#### Inherited from

PhysicsBody.groups

___

### position

• `get` **position**(): [`Vector2D`](Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](Vector2D.md)

#### Inherited from

PhysicsBody.position

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

#### Inherited from

PhysicsBody.position

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

### velocity

• `get` **velocity**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

#### Inherited from

PhysicsBody.velocity

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

#### Inherited from

PhysicsBody.velocity

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

## Methods

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

[PhysicsBody](PhysicsBody.md).[addToGroup](PhysicsBody.md#addtogroup)

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

[PhysicsBody](PhysicsBody.md).[removeFromGroup](PhysicsBody.md#removefromgroup)

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

[PhysicsBody](PhysicsBody.md).[isInGroup](PhysicsBody.md#isingroup)

___

### root

▸ **root**(): [`GameObject`](GameObject.md)

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

[`GameObject`](GameObject.md)

#### Inherited from

[PhysicsBody](PhysicsBody.md).[root](PhysicsBody.md#root)

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
| `child` | [`GameObject`](GameObject.md) |

#### Returns

`void`

#### Inherited from

[PhysicsBody](PhysicsBody.md).[addChild](PhysicsBody.md#addchild)

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
| `child` | [`GameObject`](GameObject.md) |

#### Returns

`void`

#### Inherited from

[PhysicsBody](PhysicsBody.md).[removeChild](PhysicsBody.md#removechild)

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

[PhysicsBody](PhysicsBody.md).[step](PhysicsBody.md#step)

___

### getObjectState

▸ **getObjectState**(): [`PhysicsBodyState`](../modules.md#physicsbodystate)

Returns the state object of the given state

#### Returns

[`PhysicsBodyState`](../modules.md#physicsbodystate)

#### Inherited from

[PhysicsBody](PhysicsBody.md).[getObjectState](PhysicsBody.md#getobjectstate)

___

### translate

▸ `Protected` **translate**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

#### Inherited from

[PhysicsBody](PhysicsBody.md).[translate](PhysicsBody.md#translate)

___

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

[PhysicsBody](PhysicsBody.md).[_step](PhysicsBody.md#_step)

___

### storeLastState

▸ `Protected` **storeLastState**(): `void`

Stores the current state

#### Returns

`void`

#### Inherited from

[PhysicsBody](PhysicsBody.md).[storeLastState](PhysicsBody.md#storelaststate)

___

### getState

▸ **getState**(): ``null`` \| [`StatefulObjectState`](../modules.md#statefulobjectstate)<[`PhysicsBodyState`](../modules.md#physicsbodystate)\>

Gets the whole state the object
Returns null when the object isn't
in the game

#### Returns

``null`` \| [`StatefulObjectState`](../modules.md#statefulobjectstate)<[`PhysicsBodyState`](../modules.md#physicsbodystate)\>

#### Inherited from

[PhysicsBody](PhysicsBody.md).[getState](PhysicsBody.md#getstate)

___

### getUpdate

▸ **getUpdate**(): ``null`` \| [`StatefulObjectUpdate`](../modules.md#statefulobjectupdate)<[`PhysicsBodyState`](../modules.md#physicsbodystate)\>

Gets all the updates to the state
since the last getUpdate call AND
the last game step.
Returns null if the object isn't in the game
or if there is no update

#### Returns

``null`` \| [`StatefulObjectUpdate`](../modules.md#statefulobjectupdate)<[`PhysicsBodyState`](../modules.md#physicsbodystate)\>

#### Inherited from

[PhysicsBody](PhysicsBody.md).[getUpdate](PhysicsBody.md#getupdate)

## Constructors

### constructor

• **new TilemapWallCell**(`size`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`Vector2D`](Vector2D.md) |
| `code` | [`TilemapCode`](../modules.md#tilemapcode) |

#### Overrides

[PhysicsBody](PhysicsBody.md).[constructor](PhysicsBody.md#constructor)
