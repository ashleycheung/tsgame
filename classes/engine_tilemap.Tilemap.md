[tsgame](../README.md) / [Exports](../modules.md) / [engine/tilemap](../modules/engine_tilemap.md) / Tilemap

# Class: Tilemap

[engine/tilemap](../modules/engine_tilemap.md).Tilemap

A base class that represents a game object

## Hierarchy

- [`GameObject`](engine_gameObject.GameObject.md)

  ↳ **`Tilemap`**

## Table of contents

### Constructors

- [constructor](engine_tilemap.Tilemap.md#constructor)

### Properties

- [event](engine_tilemap.Tilemap.md#event)
- [game](engine_tilemap.Tilemap.md#game)

### Accessors

- [children](engine_tilemap.Tilemap.md#children)
- [parent](engine_tilemap.Tilemap.md#parent)

### Methods

- [\_step](engine_tilemap.Tilemap.md#_step)
- [addChild](engine_tilemap.Tilemap.md#addchild)
- [removeChild](engine_tilemap.Tilemap.md#removechild)
- [root](engine_tilemap.Tilemap.md#root)
- [size](engine_tilemap.Tilemap.md#size)
- [step](engine_tilemap.Tilemap.md#step)

## Constructors

### constructor

• **new Tilemap**(`cells`, `cellSize`, `origin`, `code?`)

Creates an empty tilemap of the given size

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cells` | `number`[][] | `undefined` | x represents the width, y represents the height |
| `cellSize` | [`Vector2D`](physics_vector.Vector2D.md) | `undefined` | the size of a cell in the tilemap |
| `origin` | [`Vector2D`](physics_vector.Vector2D.md) | `undefined` | the position of the top left corner of the tilemap |
| `code` | `TilemapCode` | `defaultCode` | ```typescript // Creates a 5x5 tilemap with walls around const tilemap = new Tilemap(   [     [1,1,1,1,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,1,1,1,1],   ],   new Vector2D(100, 100),   Vector2D.zero() ) game.addGameObject(tilemap); ``` |

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[constructor](engine_gameObject.GameObject.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[event](engine_gameObject.GameObject.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[game](engine_gameObject.GameObject.md#game)

#### Defined in

[engine/gameObject.ts:18](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L18)

## Accessors

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

Returns all the children of this game object

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Inherited from

GameObject.children

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

GameObject.parent

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

#### Inherited from

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

### size

▸ **size**(): [`Vector2D`](physics_vector.Vector2D.md)

Returns the size of the tilemap
```typescript
// Creates a 5x5 tilemap with walls around
const tilemap = new Tilemap(
  [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
  ],
  new Vector2D(100, 100),
  Vector2D.zero()
)
game.addGameObject(tilemap);
// Returns Vector2D(5, 5);
tilemap.size();
```

#### Returns

[`Vector2D`](physics_vector.Vector2D.md)

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
