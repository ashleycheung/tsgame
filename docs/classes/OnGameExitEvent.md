[tsgame](../README.md) / [Exports](../modules.md) / OnGameExitEvent

# Class: OnGameExitEvent

Called when exiting the game

**`remarks`** - The game property and id property will still be valid
when this event is called. It is only set to null after this event

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

[engine/gameObject.ts:289](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/engine/gameObject.ts#L289)

___

### game

• **game**: [`Game`](Game.md)

#### Defined in

[engine/gameObject.ts:291](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/engine/gameObject.ts#L291)

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
