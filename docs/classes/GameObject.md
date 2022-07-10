[tsgame](../README.md) / [Exports](../modules.md) / GameObject

# Class: GameObject

A base class that represents a game object

## Hierarchy

- **`GameObject`**

  ↳ [`Timer`](Timer.md)

  ↳ [`StatefulObject`](StatefulObject.md)

## Table of contents

### Properties

- [event](GameObject.md#event)
- [game](GameObject.md#game)

### Constructors

- [constructor](GameObject.md#constructor)

### Methods

- [cleanup](GameObject.md#cleanup)
- [addToGroup](GameObject.md#addtogroup)
- [removeFromGroup](GameObject.md#removefromgroup)
- [isInGroup](GameObject.md#isingroup)
- [root](GameObject.md#root)
- [addChild](GameObject.md#addchild)
- [removeChild](GameObject.md#removechild)
- [step](GameObject.md#step)
- [\_step](GameObject.md#_step)

### Accessors

- [id](GameObject.md#id)
- [parent](GameObject.md#parent)
- [children](GameObject.md#children)
- [groups](GameObject.md#groups)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L25)

## Constructors

### constructor

• **new GameObject**()

## Methods

### cleanup

▸ **cleanup**(): `void`

Fully cleans up the object.
Nothing should be run after this

#### Returns

`void`

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

## Accessors

### id

• `get` **id**(): ``null`` \| `string`

Returns the unique id of the game object
This will be null if the game object is not
in the game

#### Returns

``null`` \| `string`

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](GameObject.md)

___

### children

• `get` **children**(): [`GameObject`](GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](GameObject.md)[]

___

### groups

• `get` **groups**(): `string`[]

Returns all the groups this game object is in.

#### Returns

`string`[]
