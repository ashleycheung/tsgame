[tsgame](../README.md) / [Exports](../modules.md) / GameEvent

# Class: GameEvent

The base class that represents a game event

## Hierarchy

- **`GameEvent`**

  ↳ [`PostPhysicsStepEvent`](PostPhysicsStepEvent.md)

  ↳ [`GameStepStartEvent`](GameStepStartEvent.md)

  ↳ [`GameStepEndEvent`](GameStepEndEvent.md)

  ↳ [`OnGameEnterEvent`](OnGameEnterEvent.md)

  ↳ [`OnGameExitEvent`](OnGameExitEvent.md)

  ↳ [`TimerEndEvent`](TimerEndEvent.md)

  ↳ [`CollisionStartEvent`](CollisionStartEvent.md)

  ↳ [`CollisionEndEvent`](CollisionEndEvent.md)

  ↳ [`OnRendererExitEvent`](OnRendererExitEvent.md)

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

[engine/event.ts:84](https://github.com/ashleycheung/tsgame/blob/0573a5b/src/engine/event.ts#L84)
