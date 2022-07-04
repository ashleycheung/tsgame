[tsgame](../README.md) / [Exports](../modules.md) / Sprite

# Class: Sprite

Represents a 2d sprite

## Hierarchy

- [`StatefulObject`](StatefulObject.md)<[`SpriteState`](../modules.md#spritestate)\>

  ↳ **`Sprite`**

## Table of contents

### Properties

- [event](Sprite.md#event)
- [game](Sprite.md#game)
- [type](Sprite.md#type)

### Methods

- [cleanup](Sprite.md#cleanup)
- [addToGroup](Sprite.md#addtogroup)
- [removeFromGroup](Sprite.md#removefromgroup)
- [isInGroup](Sprite.md#isingroup)
- [root](Sprite.md#root)
- [addChild](Sprite.md#addchild)
- [removeChild](Sprite.md#removechild)
- [step](Sprite.md#step)
- [\_step](Sprite.md#_step)
- [getObjectState](Sprite.md#getobjectstate)
- [storeLastState](Sprite.md#storelaststate)
- [getState](Sprite.md#getstate)
- [getUpdate](Sprite.md#getupdate)

### Accessors

- [id](Sprite.md#id)
- [parent](Sprite.md#parent)
- [children](Sprite.md#children)
- [groups](Sprite.md#groups)
- [position](Sprite.md#position)
- [offset](Sprite.md#offset)

### Constructors

- [constructor](Sprite.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[StatefulObject](StatefulObject.md).[event](StatefulObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[StatefulObject](StatefulObject.md).[game](StatefulObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/gameObject.ts#L25)

___

### type

• **type**: `string` = `"Sprite"`

#### Overrides

[StatefulObject](StatefulObject.md).[type](StatefulObject.md#type)

#### Defined in

[state/sprite.ts:33](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/sprite.ts#L33)

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

### getObjectState

▸ **getObjectState**(): [`SpriteState`](../modules.md#spritestate)

Returns the state object of the given state

#### Returns

[`SpriteState`](../modules.md#spritestate)

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

▸ **getState**(): ``null`` \| [`StatefulObjectState`](../modules.md#statefulobjectstate)<[`SpriteState`](../modules.md#spritestate)\>

Gets the whole state the object
Returns null when the object isn't
in the game

#### Returns

``null`` \| [`StatefulObjectState`](../modules.md#statefulobjectstate)<[`SpriteState`](../modules.md#spritestate)\>

#### Inherited from

[StatefulObject](StatefulObject.md).[getState](StatefulObject.md#getstate)

___

### getUpdate

▸ **getUpdate**(): ``null`` \| [`StatefulObjectUpdate`](../modules.md#statefulobjectupdate)<[`SpriteState`](../modules.md#spritestate)\>

Gets all the updates to the state
since the last getUpdate call AND
the last game step.
Returns null if the object isn't in the game
or if there is no update

#### Returns

``null`` \| [`StatefulObjectUpdate`](../modules.md#statefulobjectupdate)<[`SpriteState`](../modules.md#spritestate)\>

#### Inherited from

[StatefulObject](StatefulObject.md).[getUpdate](StatefulObject.md#getupdate)

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

___

### position

• `get` **position**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

___

### offset

• `get` **offset**(): [`Vector2D`](Vector2D.md)

#### Returns

[`Vector2D`](Vector2D.md)

• `set` **offset**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2D`](Vector2D.md) |

#### Returns

`void`

## Constructors

### constructor

• **new Sprite**(`texturePath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texturePath` | `string` |

#### Overrides

[StatefulObject](StatefulObject.md).[constructor](StatefulObject.md#constructor)
