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
- [id](engine_gameObject.OnGameEnterEvent.md#id)
- [name](engine_gameObject.OnGameEnterEvent.md#name)

## Constructors

### constructor

• **new OnGameEnterEvent**(`game`, `id`)

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
| `id` | `string` |

#### Overrides

[GameEvent](engine_event.GameEvent.md).[constructor](engine_event.GameEvent.md#constructor)

## Properties

### game

• **game**: [`Game`](engine_game.Game.md)

#### Defined in

[engine/gameObject.ts:254](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L254)

___

### id

• **id**: `string`

#### Defined in

[engine/gameObject.ts:256](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L256)

___

### name

• **name**: `string` = `"onGameEnter"`

Event name

#### Overrides

[GameEvent](engine_event.GameEvent.md).[name](engine_event.GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:252](https://github.com/ashleycheung/tsgame/blob/f970211/src/engine/gameObject.ts#L252)
