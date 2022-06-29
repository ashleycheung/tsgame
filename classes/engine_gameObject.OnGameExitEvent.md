[tsgame](../README.md) / [Exports](../modules.md) / [engine/gameObject](../modules/engine_gameObject.md) / OnGameExitEvent

# Class: OnGameExitEvent

[engine/gameObject](../modules/engine_gameObject.md).OnGameExitEvent

Called when exiting the game

## Hierarchy

- [`GameEvent`](engine_event.GameEvent.md)

  ↳ **`OnGameExitEvent`**

## Table of contents

### Constructors

- [constructor](engine_gameObject.OnGameExitEvent.md#constructor)

### Properties

- [game](engine_gameObject.OnGameExitEvent.md#game)
- [name](engine_gameObject.OnGameExitEvent.md#name)

## Constructors

### constructor

• **new OnGameExitEvent**(`game`)

```typescript
const obj = new GameObject()
obj.event.addEventListener("onGameExit", (e: Event) => {
 // e.game contains the Game class
 console.log(e.game)
})
(new Game()).addGameObject(obj)
// Event called here
(new Game()).removeGameObject(obj)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`Game`](engine_game.Game.md) |

#### Overrides

[GameEvent](engine_event.GameEvent.md).[constructor](engine_event.GameEvent.md#constructor)

## Properties

### game

• **game**: [`Game`](engine_game.Game.md)

#### Defined in

[engine/gameObject.ts:286](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L286)

___

### name

• **name**: `string` = `"onGameExit"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:284](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L284)
