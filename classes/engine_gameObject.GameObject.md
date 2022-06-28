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
- [root](engine_gameObject.GameObject.md#root)
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

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Defined in

[engine/gameObject.ts:18](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L18)

## Accessors

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

Returns all the children of this game object

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

## Methods

### \_step

▸ `Protected` **_step**(`delta`): `void`

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
