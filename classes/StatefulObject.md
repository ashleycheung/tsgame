[tsgame](../README.md) / [Exports](../modules.md) / StatefulObject

# Class: StatefulObject<T\>

An object that has a state needed by the renderer to render

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`GameObject`](GameObject.md)

  ↳ **`StatefulObject`**

  ↳↳ [`PhysicsBody`](PhysicsBody.md)

  ↳↳ [`Sprite`](Sprite.md)

## Table of contents

### Properties

- [event](StatefulObject.md#event)
- [game](StatefulObject.md#game)
- [type](StatefulObject.md#type)

### Methods

- [cleanup](StatefulObject.md#cleanup)
- [addToGroup](StatefulObject.md#addtogroup)
- [removeFromGroup](StatefulObject.md#removefromgroup)
- [isInGroup](StatefulObject.md#isingroup)
- [root](StatefulObject.md#root)
- [addChild](StatefulObject.md#addchild)
- [removeChild](StatefulObject.md#removechild)
- [step](StatefulObject.md#step)
- [\_step](StatefulObject.md#_step)
- [storeLastState](StatefulObject.md#storelaststate)
- [getObjectState](StatefulObject.md#getobjectstate)
- [getState](StatefulObject.md#getstate)
- [getUpdate](StatefulObject.md#getupdate)

### Accessors

- [id](StatefulObject.md#id)
- [parent](StatefulObject.md#parent)
- [children](StatefulObject.md#children)
- [groups](StatefulObject.md#groups)

### Constructors

- [constructor](StatefulObject.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Inherited from

[GameObject](GameObject.md).[event](GameObject.md#event)

#### Defined in

[engine/gameObject.ts:9](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L9)

___

### game

• **game**: ``null`` \| [`Game`](Game.md) = `null`

The game instance that the game object is currently in.
This is set to null if the game object is not in a game

#### Inherited from

[GameObject](GameObject.md).[game](GameObject.md#game)

#### Defined in

[engine/gameObject.ts:25](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L25)

___

### type

• `Readonly` `Abstract` **type**: `string`

#### Defined in

[state/statefulObject.ts:15](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/state/statefulObject.ts#L15)

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

### storeLastState

▸ `Protected` **storeLastState**(): `void`

Stores the current state

#### Returns

`void`

___

### getObjectState

▸ `Abstract` **getObjectState**(): `T`

Returns the state object of the given state

#### Returns

`T`

___

### getState

▸ **getState**(): ``null`` \| [`StatefulObjectState`](../interfaces/StatefulObjectState.md)<`T`\>

Gets the whole state the object
Returns null when the object isn't
in the game

#### Returns

``null`` \| [`StatefulObjectState`](../interfaces/StatefulObjectState.md)<`T`\>

___

### getUpdate

▸ **getUpdate**(): ``null`` \| [`StatefulObjectUpdate`](../interfaces/StatefulObjectUpdate.md)<`T`\>

Gets all the updates to the state
since the last getUpdate call AND
the last game step.
Returns null if the object isn't in the game
or if there is no update

#### Returns

``null`` \| [`StatefulObjectUpdate`](../interfaces/StatefulObjectUpdate.md)<`T`\>

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

## Constructors

### constructor

• **new StatefulObject**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[GameObject](GameObject.md).[constructor](GameObject.md#constructor)
