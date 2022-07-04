[tsgame](../README.md) / [Exports](../modules.md) / Timer

# Class: Timer

A class that acts as a timer

## Hierarchy

- [`GameObject`](GameObject.md)

  ↳ **`Timer`**

## Table of contents

### Properties

- [event](Timer.md#event)
- [game](Timer.md#game)

### Methods

- [cleanup](Timer.md#cleanup)
- [addToGroup](Timer.md#addtogroup)
- [removeFromGroup](Timer.md#removefromgroup)
- [isInGroup](Timer.md#isingroup)
- [root](Timer.md#root)
- [addChild](Timer.md#addchild)
- [removeChild](Timer.md#removechild)
- [step](Timer.md#step)
- [start](Timer.md#start)
- [\_step](Timer.md#_step)

### Accessors

- [id](Timer.md#id)
- [parent](Timer.md#parent)
- [children](Timer.md#children)
- [groups](Timer.md#groups)
- [active](Timer.md#active)

### Constructors

- [constructor](Timer.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[GameObject](GameObject.md).[event](GameObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](GameObject.md).[game](GameObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/engine/gameObject.ts#L25)

## Methods

### cleanup

▸ **cleanup**(): `void`

Fully cleans up the object.
Nothing should be run after this

#### Returns

`void`

#### Inherited from

[GameObject](GameObject.md).[cleanup](GameObject.md#cleanup)

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

### start

▸ **start**(): `void`

Starts a timer
```typescript
const timer = new Timer(1000);
timer.start();
```

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

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

## Constructors

### constructor

• **new Timer**(`duration`)

Creates a timer object of the given
duration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | duration in milliseconds ```typescript const timer = new Timer(1000); timer.start(); ``` |

#### Overrides

[GameObject](GameObject.md).[constructor](GameObject.md#constructor)
