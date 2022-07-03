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

[engine/gameObject.ts:254](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/engine/gameObject.ts#L254)

___

### game

• **game**: [`Game`](Game.md)

#### Defined in

[engine/gameObject.ts:256](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/engine/gameObject.ts#L256)

___

### id

• **id**: `string`

#### Defined in

[engine/gameObject.ts:258](https://github.com/ashleycheung/tsgame/blob/cc6eba3/src/engine/gameObject.ts#L258)

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
