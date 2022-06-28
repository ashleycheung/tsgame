[tsgame](../README.md) / [Exports](../modules.md) / [engine/game](../modules/engine_game.md) / Game

# Class: Game

[engine/game](../modules/engine_game.md).Game

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

- [constructor](engine_game.Game.md#constructor)

### Properties

- [event](engine_game.Game.md#event)
- [physics](engine_game.Game.md#physics)

### Methods

- [addGameObject](engine_game.Game.md#addgameobject)
- [getAllGameObjects](engine_game.Game.md#getallgameobjects)
- [getGameObjectsInGroup](engine_game.Game.md#getgameobjectsingroup)
- [queueRemoveGameObject](engine_game.Game.md#queueremovegameobject)
- [removeGameObject](engine_game.Game.md#removegameobject)
- [step](engine_game.Game.md#step)

## Constructors

### constructor

• **new Game**()

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Defined in

[engine/game.ts:27](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/game.ts#L27)

___

### physics

• **physics**: [`Physics`](physics_physics.Physics.md)

#### Defined in

[engine/game.ts:29](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/game.ts#L29)

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
| `o` | [`GameObject`](engine_gameObject.GameObject.md) |

#### Returns

`void`

___

### getAllGameObjects

▸ **getAllGameObjects**(): [`GameObject`](engine_gameObject.GameObject.md)[]

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

[`GameObject`](engine_gameObject.GameObject.md)[]

___

### getGameObjectsInGroup

▸ **getGameObjectsInGroup**(`group`): [`GameObject`](engine_gameObject.GameObject.md)[]

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

[`GameObject`](engine_gameObject.GameObject.md)[]

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
| `o` | [`GameObject`](engine_gameObject.GameObject.md) |

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
| `o` | [`GameObject`](engine_gameObject.GameObject.md) |

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
