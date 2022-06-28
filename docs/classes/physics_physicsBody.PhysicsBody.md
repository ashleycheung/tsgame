[tsgame](../README.md) / [Exports](../modules.md) / [physics/physicsBody](../modules/physics_physicsBody.md) / PhysicsBody

# Class: PhysicsBody

[physics/physicsBody](../modules/physics_physicsBody.md).PhysicsBody

A physics body
the physics engine is abstracted away

## Hierarchy

- [`GameObject`](engine_gameObject.GameObject.md)

  ↳ **`PhysicsBody`**

  ↳↳ [`RectangleBody`](physics_physicsBody.RectangleBody.md)

  ↳↳ [`CircleBody`](physics_physicsBody.CircleBody.md)

## Table of contents

### Constructors

- [constructor](physics_physicsBody.PhysicsBody.md#constructor)

### Properties

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
- [isSensor](physics_physicsBody.PhysicsBody.md#issensor)
- [parent](physics_physicsBody.PhysicsBody.md#parent)
- [position](physics_physicsBody.PhysicsBody.md#position)
- [static](physics_physicsBody.PhysicsBody.md#static)
- [velocity](physics_physicsBody.PhysicsBody.md#velocity)

### Methods

- [\_step](physics_physicsBody.PhysicsBody.md#_step)
- [addChild](physics_physicsBody.PhysicsBody.md#addchild)
- [removeChild](physics_physicsBody.PhysicsBody.md#removechild)
- [step](physics_physicsBody.PhysicsBody.md#step)
- [translate](physics_physicsBody.PhysicsBody.md#translate)

## Constructors

### constructor

• **new PhysicsBody**(`body`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[constructor](engine_gameObject.GameObject.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[event](engine_gameObject.GameObject.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[game](engine_gameObject.GameObject.md#game)

#### Defined in

[engine/gameObject.ts:14](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L14)

___

### offset

• **offset**: [`Vector2D`](physics_vector.Vector2D.md)

#### Defined in

[physics/physicsBody.ts:20](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/physics/physicsBody.ts#L20)

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

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

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

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

GameObject.parent

___

### position

• `get` **position**(): [`Vector2D`](physics_vector.Vector2D.md)

Position is 0 by default

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

• `set` **position**(`p`): `void`

Position is 0 by default

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

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

• `get` **velocity**(): [`Vector2D`](physics_vector.Vector2D.md)

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

• `set` **velocity**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`

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

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[_step](engine_gameObject.GameObject.md#_step)

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

[GameObject](engine_gameObject.GameObject.md).[addChild](engine_gameObject.GameObject.md#addchild)

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

[GameObject](engine_gameObject.GameObject.md).[removeChild](engine_gameObject.GameObject.md#removechild)

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
| `v` | [`Vector2D`](physics_vector.Vector2D.md) |

#### Returns

`void`
