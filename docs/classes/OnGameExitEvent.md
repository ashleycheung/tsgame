[tsgame](../README.md) / [Exports](../modules.md) / OnGameExitEvent

# Class: OnGameExitEvent

Called when exiting the game

## Hierarchy

- [`GameEvent`](GameEvent.md)

  ↳ **`OnGameExitEvent`**

## Table of contents

### Properties

- [name](OnGameExitEvent.md#name)
- [game](OnGameExitEvent.md#game)

### Constructors

- [constructor](OnGameExitEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"onGameExit"`

Event name

#### Overrides

[GameEvent](GameEvent.md).[name](GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:287](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L287)

___

### game

• **game**: [`Game`](Game.md)

#### Defined in

[engine/gameObject.ts:289](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/gameObject.ts#L289)

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
| `game` | [`Game`](Game.md) |

#### Overrides

[GameEvent](GameEvent.md).[constructor](GameEvent.md#constructor)
