[tsgame](../README.md) / [Exports](../modules.md) / Game

# Class: Game

Represents a game instance

```typescript
  const game = new Game()
  
  const obj = new GameObject()
  game.addGameObject(obj)
  
  // Runs the game forward by 1 sec
  game.step(1000)
```

## Table of contents

### Constructors

- [constructor](Game.md#constructor)

### Properties

- [event](Game.md#event)
- [physics](Game.md#physics)
- [gameStateManager](Game.md#gamestatemanager)

### Methods

- [addGameObject](Game.md#addgameobject)
- [removeGameObject](Game.md#removegameobject)
- [queueRemoveGameObject](Game.md#queueremovegameobject)
- [getGameObjectsInGroup](Game.md#getgameobjectsingroup)
- [runOnNextStep](Game.md#runonnextstep)
- [step](Game.md#step)
- [getAllGameObjects](Game.md#getallgameobjects)

## Constructors

### constructor

• **new Game**()

## Properties

### event

• `Readonly` **event**: [`EventManager`](EventManager.md)

#### Defined in

[engine/game.ts:30](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/engine/game.ts#L30)

___

### physics

• **physics**: [`Physics`](Physics.md)

#### Defined in

[engine/game.ts:32](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/engine/game.ts#L32)

___

### gameStateManager

• **gameStateManager**: [`StatefulObjectManager`](StatefulObjectManager.md)

#### Defined in

[engine/game.ts:34](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/engine/game.ts#L34)

## Methods

### addGameObject

▸ **addGameObject**(`o`): `void`

Adds a game object to the game

```typescript
const game = new Game();
const obj = new GameObject();

// Child is also added to game
game.addGameObject(obj);
// Updates all game objects
game.step(1000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`GameObject`](GameObject.md) |

#### Returns

`void`

___

### removeGameObject

▸ **removeGameObject**(`o`): `void`

Removes a game object
sometimes queueRemoveGameObject needs to be
called instead to prevent syncronisation bugs
```typescript
const game = new Game();
const obj = new GameObject();

// Child is also added to game
game.addGameObject(obj);
// Updates all game objects
game.step(1000);
// Removes the object
game.removeGameObject(obj);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`GameObject`](GameObject.md) |

#### Returns

`void`

___

### queueRemoveGameObject

▸ **queueRemoveGameObject**(`o`): `void`

Queues a game object to be removed at the end
of the step

```typescript
const game = new Game();
const obj = new GameObject();

// Child is also added to game
game.addGameObject(obj);
// Queues the removeal of the object
game.queueRemoveGameObject(obj);
// Game object removed here at the end of step
game.step(1000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`GameObject`](GameObject.md) |

#### Returns

`void`

___

### getGameObjectsInGroup

▸ **getGameObjectsInGroup**(`group`): [`GameObject`](GameObject.md)[]

Returns all the game objects in the game that belong to
the given group

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

[`GameObject`](GameObject.md)[]

___

### runOnNextStep

▸ **runOnNextStep**(`callback`): `void`

Runs a method after the setup of the next game step

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

___

### step

▸ **step**(`delta`): `void`

Runs a game step for the game

```typescript
const game = new Game();
const obj = new GameObject();
// Add object
game.addGameObject(obj);
game.step(1000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

___

### getAllGameObjects

▸ **getAllGameObjects**(): [`GameObject`](GameObject.md)[]

Returns an array of all the game objects in the game including children

```typescript
const game = new Game();
const obj1 = new GameObject();
const obj2 = new GameObject();
const obj3 = new GameObject();
const obj4 = new GameObject();
obj2.addChild(obj3);

// Add object
game.addGameObject(obj1);
game.addGameObject(obj2);
game.addGameObject(obj5);
// Returns [obj1, obj2, obj3, obj4]
game.getAllGameObjects();
```

#### Returns

[`GameObject`](GameObject.md)[]
