[tsgame](../README.md) / [Exports](../modules.md) / [engine/gameObject](../modules/engine_gameObject.md) / OnGameEnterEvent

# Class: OnGameEnterEvent

[engine/gameObject](../modules/engine_gameObject.md).OnGameEnterEvent

Called when entering the game

## Hierarchy

- [`GameEvent`](engine_event.GameEvent.md)

  ↳ **`OnGameEnterEvent`**

## Table of contents

### Constructors

- [constructor](engine_gameObject.OnGameEnterEvent.md#constructor)

### Properties

- [game](engine_gameObject.OnGameEnterEvent.md#game)
- [name](engine_gameObject.OnGameEnterEvent.md#name)

## Constructors

### constructor

• **new OnGameEnterEvent**(`game`)

```typescript
const obj = new GameObject()
obj.event.addEventListener("onGameEnter", (e: Event) => {
 // e.game contains the Game class
 console.log(e.game)
})
// Event called here
(new Game()).addGameObject(obj)
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

[engine/gameObject.ts:183](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L183)

___

### name

• **name**: `string` = `"onGameEnter"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:181](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L181)
