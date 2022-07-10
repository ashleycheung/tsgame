[tsgame](../README.md) / [Exports](../modules.md) / TileMap

# Class: TileMap

Represents a tilemap

## Hierarchy

- [`StatefulObject`](StatefulObject.md)<[`TileMapState`](../interfaces/TileMapState.md)\>

  ↳ **`TileMap`**

## Table of contents

### Properties

- [event](TileMap.md#event)
- [game](TileMap.md#game)
- [type](TileMap.md#type)

### Methods

- [cleanup](TileMap.md#cleanup)
- [addToGroup](TileMap.md#addtogroup)
- [removeFromGroup](TileMap.md#removefromgroup)
- [isInGroup](TileMap.md#isingroup)
- [root](TileMap.md#root)
- [addChild](TileMap.md#addchild)
- [removeChild](TileMap.md#removechild)
- [step](TileMap.md#step)
- [\_step](TileMap.md#_step)
- [size](TileMap.md#size)
- [getUpdate](TileMap.md#getupdate)
- [getObjectState](TileMap.md#getobjectstate)
- [storeLastState](TileMap.md#storelaststate)
- [getState](TileMap.md#getstate)

### Accessors

- [id](TileMap.md#id)
- [parent](TileMap.md#parent)
- [children](TileMap.md#children)
- [groups](TileMap.md#groups)

### Constructors

- [constructor](TileMap.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[StatefulObject](StatefulObject.md).[event](StatefulObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[StatefulObject](StatefulObject.md).[game](StatefulObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L25)

___

### type

• `Readonly` **type**: `string` = `"TileMap"`

#### Overrides

[StatefulObject](StatefulObject.md).[type](StatefulObject.md#type)

#### Defined in

engine/tileMap.ts:52

## Methods

### cleanup

▸ **cleanup**(): `void`

Fully cleans up the object.
Nothing should be run after this

#### Returns

`void`

#### Inherited from

[StatefulObject](StatefulObject.md).[cleanup](StatefulObject.md#cleanup)

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

[StatefulObject](StatefulObject.md).[addToGroup](StatefulObject.md#addtogroup)

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

[StatefulObject](StatefulObject.md).[removeFromGroup](StatefulObject.md#removefromgroup)

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

[StatefulObject](StatefulObject.md).[isInGroup](StatefulObject.md#isingroup)

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

[StatefulObject](StatefulObject.md).[root](StatefulObject.md#root)

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

[StatefulObject](StatefulObject.md).[addChild](StatefulObject.md#addchild)

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

[StatefulObject](StatefulObject.md).[removeChild](StatefulObject.md#removechild)

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

[StatefulObject](StatefulObject.md).[step](StatefulObject.md#step)

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

[StatefulObject](StatefulObject.md).[_step](StatefulObject.md#_step)

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

___

### getUpdate

▸ **getUpdate**(): ``null`` \| [`StatefulObjectUpdate`](../interfaces/StatefulObjectUpdate.md)<[`TileMapState`](../interfaces/TileMapState.md)\>

Gets all the updates to the state
since the last getUpdate call AND
the last game step.
Returns null if the object isn't in the game
or if there is no update

#### Returns

``null`` \| [`StatefulObjectUpdate`](../interfaces/StatefulObjectUpdate.md)<[`TileMapState`](../interfaces/TileMapState.md)\>

#### Overrides

[StatefulObject](StatefulObject.md).[getUpdate](StatefulObject.md#getupdate)

___

### getObjectState

▸ **getObjectState**(): [`TileMapState`](../interfaces/TileMapState.md)

Returns the state object of the given state

#### Returns

[`TileMapState`](../interfaces/TileMapState.md)

#### Overrides

[StatefulObject](StatefulObject.md).[getObjectState](StatefulObject.md#getobjectstate)

___

### storeLastState

▸ `Protected` **storeLastState**(): `void`

Stores the current state

#### Returns

`void`

#### Inherited from

[StatefulObject](StatefulObject.md).[storeLastState](StatefulObject.md#storelaststate)

___

### getState

▸ **getState**(): ``null`` \| [`StatefulObjectState`](../interfaces/StatefulObjectState.md)<[`TileMapState`](../interfaces/TileMapState.md)\>

Gets the whole state the object
Returns null when the object isn't
in the game

#### Returns

``null`` \| [`StatefulObjectState`](../interfaces/StatefulObjectState.md)<[`TileMapState`](../interfaces/TileMapState.md)\>

#### Inherited from

[StatefulObject](StatefulObject.md).[getState](StatefulObject.md#getstate)

## Accessors

### id

• `get` **id**(): ``null`` \| `string`

Returns the unique id of the game object
This will be null if the game object is not
in the game

#### Returns

``null`` \| `string`

#### Inherited from

StatefulObject.id

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](GameObject.md)

#### Inherited from

StatefulObject.parent

___

### children

• `get` **children**(): [`GameObject`](GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](GameObject.md)[]

#### Inherited from

StatefulObject.children

___

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]

#### Inherited from

StatefulObject.groups

## Constructors

### constructor

• **new TileMap**(`cells`, `cellSize`, `origin`, `code`)

Creates an empty tilemap of the given size

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cells` | `number`[][] | x represents the width, y represents the height |
| `cellSize` | [`Vector2D`](Vector2D.md) | the size of a cell in the tilemap |
| `origin` | [`Vector2D`](Vector2D.md) | the position of the top left corner of the tilemap |
| `code` | [`TilemapCode`](../interfaces/TilemapCode.md) | ```typescript // Creates a 5x5 tilemap with walls around const tilemap = new Tilemap(   [     [1,1,1,1,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,0,0,0,1],     [1,1,1,1,1],   ],   new Vector2D(100, 100),   Vector2D.zero() ) game.addGameObject(tilemap); ``` |

#### Overrides

[StatefulObject](StatefulObject.md).[constructor](StatefulObject.md#constructor)
