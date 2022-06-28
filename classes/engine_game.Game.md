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

[engine/game.ts:23](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/game.ts#L23)

___

### physics

• **physics**: [`Physics`](physics_physics.Physics.md)

#### Defined in

[engine/game.ts:25](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/game.ts#L25)

## Methods

### addGameObject

▸ **addGameObject**(`o`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`GameObject`](engine_gameObject.GameObject.md) |

#### Returns

`void`

___

### getAllGameObjects

▸ **getAllGameObjects**(): [`GameObject`](engine_gameObject.GameObject.md)[]

#### Returns

[`GameObject`](engine_gameObject.GameObject.md)[]

___

### queueRemoveGameObject

▸ **queueRemoveGameObject**(`o`): `void`

Queues a game object to be removed at the end
of the step

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`GameObject`](engine_gameObject.GameObject.md) |

#### Returns

`void`

___

### step

▸ **step**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`
