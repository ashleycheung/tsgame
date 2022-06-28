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

[engine/gameObject.ts:162](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L162)

___

### name

• **name**: `string` = `"onGameExit"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:160](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L160)
