[tsgame](../README.md) / [Exports](../modules.md) / PhysicsBody

# Class: PhysicsBody

A physics body
the physics engine is abstracted away

## Hierarchy

- [`GameObject`](GameObject.md)

  ↳ **`PhysicsBody`**

  ↳↳ [`TilemapWallCell`](TilemapWallCell.md)

## Table of contents

### Properties

- [event](PhysicsBody.md#event)
- [game](PhysicsBody.md#game)
- [\_shape](PhysicsBody.md#_shape)
- [offset](PhysicsBody.md#offset)

### Accessors

- [id](PhysicsBody.md#id)
- [parent](PhysicsBody.md#parent)
- [children](PhysicsBody.md#children)
- [groups](PhysicsBody.md#groups)
- [position](PhysicsBody.md#position)
- [angle](PhysicsBody.md#angle)
- [friction](PhysicsBody.md#friction)
- [airResistance](PhysicsBody.md#airresistance)
- [velocity](PhysicsBody.md#velocity)
- [static](PhysicsBody.md#static)
- [collisionCategory](PhysicsBody.md#collisioncategory)
- [collisionMask](PhysicsBody.md#collisionmask)
- [isSensor](PhysicsBody.md#issensor)

### Methods

- [addToGroup](PhysicsBody.md#addtogroup)
- [removeFromGroup](PhysicsBody.md#removefromgroup)
- [isInGroup](PhysicsBody.md#isingroup)
- [root](PhysicsBody.md#root)
- [addChild](PhysicsBody.md#addchild)
- [removeChild](PhysicsBody.md#removechild)
- [step](PhysicsBody.md#step)
- [translate](PhysicsBody.md#translate)
- [\_step](PhysicsBody.md#_step)

### Constructors

- [constructor](PhysicsBody.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[GameObject](GameObject.md).[event](GameObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](GameObject.md).[game](GameObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L25)

___

### \_shape

• `Readonly` **\_shape**: [`PhysicsShape`](PhysicsShape.md)

#### Defined in

[physics/physicsBody.ts:15](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsBody.ts#L15)

___

### offset

• **offset**: [`Vector2D`](Vector2D.md)

#### Defined in

[physics/physicsBody.ts:19](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/physics/physicsBody.ts#L19)

## Accessors

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

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](GameObject.md)

#### Inherited from

GameObject.parent

___

### children

• `get` **children**(): [`GameObject`](GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](GameObject.md)[]

#### Inherited from

GameObject.children

___

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]

#### Inherited from

GameObject.groups

___

### position

• `get` **position**(): [`Vector2D`](Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](Vector2D.md)

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](Vector2D.md) |

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

### velocity

• `get` **velocity**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](Vector2D.md) |

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

[GameObject](GameObject.md).[addToGroup](GameObject.md#addtogroup)

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

[GameObject](GameObject.md).[removeFromGroup](GameObject.md#removefromgroup)

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

[GameObject](GameObject.md).[isInGroup](GameObject.md#isingroup)

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

[GameObject](GameObject.md).[root](GameObject.md#root)

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

[GameObject](GameObject.md).[addChild](GameObject.md#addchild)

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

[GameObject](GameObject.md).[removeChild](GameObject.md#removechild)

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

[GameObject](GameObject.md).[step](GameObject.md#step)

___

### translate

▸ `Protected` **translate**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

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

#### Overrides

[GameObject](GameObject.md).[_step](GameObject.md#_step)

## Constructors

### constructor

• **new PhysicsBody**(`shape`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`PhysicsShape`](PhysicsShape.md) |

#### Overrides

[GameObject](GameObject.md).[constructor](GameObject.md#constructor)
