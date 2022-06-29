[tsgame](../README.md) / [Exports](../modules.md) / [engine/timer](../modules/engine_timer.md) / Timer

# Class: Timer

[engine/timer](../modules/engine_timer.md).Timer

A class that acts as a timer

## Hierarchy

- [`GameObject`](engine_gameObject.GameObject.md)

  ↳ **`Timer`**

## Table of contents

### Constructors

- [constructor](engine_timer.Timer.md#constructor)

### Properties

- [event](engine_timer.Timer.md#event)
- [game](engine_timer.Timer.md#game)

### Accessors

- [active](engine_timer.Timer.md#active)
- [children](engine_timer.Timer.md#children)
- [groups](engine_timer.Timer.md#groups)
- [id](engine_timer.Timer.md#id)
- [parent](engine_timer.Timer.md#parent)

### Methods

- [\_step](engine_timer.Timer.md#_step)
- [addChild](engine_timer.Timer.md#addchild)
- [addToGroup](engine_timer.Timer.md#addtogroup)
- [isInGroup](engine_timer.Timer.md#isingroup)
- [removeChild](engine_timer.Timer.md#removechild)
- [removeFromGroup](engine_timer.Timer.md#removefromgroup)
- [root](engine_timer.Timer.md#root)
- [start](engine_timer.Timer.md#start)
- [step](engine_timer.Timer.md#step)

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

[GameObject](engine_gameObject.GameObject.md).[constructor](engine_gameObject.GameObject.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[event](engine_gameObject.GameObject.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[game](engine_gameObject.GameObject.md#game)

#### Defined in

[engine/gameObject.ts:24](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L24)

## Accessors

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

___

### children

• `get` **children**(): [`GameObject`](engine_gameObject.GameObject.md)[]

Returns all the children of this game object

#### Returns

[`GameObject`](engine_gameObject.GameObject.md)[]

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

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

Gets the immediate parent of this game object

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

GameObject.parent

## Methods

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

[GameObject](engine_gameObject.GameObject.md).[addToGroup](engine_gameObject.GameObject.md#addtogroup)

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

[GameObject](engine_gameObject.GameObject.md).[isInGroup](engine_gameObject.GameObject.md#isingroup)

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

[GameObject](engine_gameObject.GameObject.md).[removeFromGroup](engine_gameObject.GameObject.md#removefromgroup)

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
