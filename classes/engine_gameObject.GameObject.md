[tsgame](../README.md) / [Exports](../modules.md) / [engine/gameObject](../modules/engine_gameObject.md) / GameObject

# Class: GameObject

[engine/gameObject](../modules/engine_gameObject.md).GameObject

A base class that represents a game object

## Hierarchy

- **`GameObject`**

  ↳ [`Tilemap`](engine_tilemap.Tilemap.md)

  ↳ [`Timer`](engine_timer.Timer.md)

  ↳ [`PhysicsBody`](physics_physicsBody.PhysicsBody.md)

## Table of contents

### Constructors

- [constructor](engine_gameObject.GameObject.md#constructor)

### Properties

- [event](engine_gameObject.GameObject.md#event)
- [game](engine_gameObject.GameObject.md#game)

### Accessors

- [children](engine_gameObject.GameObject.md#children)
- [parent](engine_gameObject.GameObject.md#parent)

### Methods

- [\_step](engine_gameObject.GameObject.md#_step)
- [addChild](engine_gameObject.GameObject.md#addchild)
- [removeChild](engine_gameObject.GameObject.md#removechild)
- [step](engine_gameObject.GameObject.md#step)

## Constructors

### constructor

• **new GameObject**()

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

#### Defined in

[engine/gameObject.ts:14](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L14)

## Accessors

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

## Methods

### \_step

▸ `Protected` **_step**(`delta`): `void`

To be overwritten by children classes

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

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
