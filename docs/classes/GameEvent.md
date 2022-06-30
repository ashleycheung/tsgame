[tsgame](../README.md) / [Exports](../modules.md) / GameEvent

# Class: GameEvent

The base class that represents a game event

## Hierarchy

- **`GameEvent`**

  ↳ [`PostPhysicsStepEvent`](PostPhysicsStepEvent.md)

  ↳ [`OnGameEnterEvent`](OnGameEnterEvent.md)

  ↳ [`OnGameExitEvent`](OnGameExitEvent.md)

  ↳ [`TimerEndEvent`](TimerEndEvent.md)

  ↳ [`CollisionStartEvent`](CollisionStartEvent.md)

  ↳ [`CollisionEndEvent`](CollisionEndEvent.md)

## Table of contents

### Constructors

- [constructor](GameEvent.md#constructor)

### Properties

- [name](GameEvent.md#name)

## Constructors

### constructor

• **new GameEvent**()

## Properties

### name

• `Abstract` **name**: `string`

Event name

#### Defined in

[engine/event.ts:61](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/event.ts#L61)
