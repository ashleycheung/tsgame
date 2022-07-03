[tsgame](../README.md) / [Exports](../modules.md) / Tilemap

# Class: Tilemap

Represents a tilemap

## Hierarchy

- [`GameObject`](GameObject.md)

  ↳ **`Tilemap`**

## Table of contents

### Properties

- [event](Tilemap.md#event)
- [game](Tilemap.md#game)

### Accessors

- [id](Tilemap.md#id)
- [parent](Tilemap.md#parent)
- [children](Tilemap.md#children)
- [groups](Tilemap.md#groups)

### Methods

- [addToGroup](Tilemap.md#addtogroup)
- [removeFromGroup](Tilemap.md#removefromgroup)
- [isInGroup](Tilemap.md#isingroup)
- [root](Tilemap.md#root)
- [addChild](Tilemap.md#addchild)
- [removeChild](Tilemap.md#removechild)
- [step](Tilemap.md#step)
- [\_step](Tilemap.md#_step)
- [size](Tilemap.md#size)

### Constructors

- [constructor](Tilemap.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[GameObject](GameObject.md).[event](GameObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](GameObject.md).[game](GameObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L25)

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

[GameObject](GameObject.md).[_step](GameObject.md#_step)

___

### size

▸ **size**(): [`Vector2D`](Vector2D.md)

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

[`Vector2D`](Vector2D.md)

## Constructors

### constructor

• **new Tilemap**(`cells`, `cellSize`, `origin`, `code?`)

Creates an empty tilemap of the given size

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cells` | `number`[][] | `undefined` | x represents the width, y represents the height |
| `cellSize` | [`Vector2D`](Vector2D.md) | `undefined` | the size of a cell in the tilemap |
| `origin` | [`Vector2D`](Vector2D.md) | `undefined` | the position of the top left corner of the tilemap |
| `code` | [`TilemapCode`](../modules.md#tilemapcode) | `defaultCode` | ```typescript // Creates a 5x5 tilemap with walls around const tilemap = new Tilemap(   [     [1,1,1,1,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,1,1,1,1],   ],   new Vector2D(100, 100),   Vector2D.zero() ) game.addGameObject(tilemap); ``` |

#### Overrides

[GameObject](GameObject.md).[constructor](GameObject.md#constructor)
