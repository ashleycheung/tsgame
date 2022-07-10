[tsgame](../README.md) / [Exports](../modules.md) / OnGameEnterEvent

# Class: OnGameEnterEvent

Called when entering the game

## Hierarchy

- [`GameEvent`](GameEvent.md)

  ↳ **`OnGameEnterEvent`**

## Table of contents

### Properties

- [name](OnGameEnterEvent.md#name)
- [game](OnGameEnterEvent.md#game)
- [id](OnGameEnterEvent.md#id)

### Constructors

- [constructor](OnGameEnterEvent.md#constructor)

## Properties

### name

• **name**: `string` = `"onGameEnter"`

Event name

#### Overrides

[GameEvent](GameEvent.md).[name](GameEvent.md#name)

#### Defined in

[engine/gameObject.ts:260](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L260)

___

### game

• **game**: [`Game`](Game.md)

#### Defined in

[engine/gameObject.ts:262](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L262)

___

### id

• **id**: `string`

#### Defined in

[engine/gameObject.ts:264](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/gameObject.ts#L264)

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
| `game` | [`Game`](Game.md) |
| `id` | `string` |

#### Overrides

[GameEvent](GameEvent.md).[constructor](GameEvent.md#constructor)
