[tsgame](../README.md) / [Exports](../modules.md) / [engine/event](../modules/engine_event.md) / GameEvent

# Class: GameEvent

[engine/event](../modules/engine_event.md).GameEvent

The base class that represents a game event

## Hierarchy

- **`GameEvent`**

  ↳ [`PostPhysicsStepEvent`](engine_game.PostPhysicsStepEvent.md)

  ↳ [`OnGameEnterEvent`](engine_gameObject.OnGameEnterEvent.md)

  ↳ [`OnGameExitEvent`](engine_gameObject.OnGameExitEvent.md)

  ↳ [`TimerEndEvent`](engine_timer.TimerEndEvent.md)

  ↳ [`CollisionStartEvent`](physics_physicsBody.CollisionStartEvent.md)

  ↳ [`CollisionEndEvent`](physics_physicsBody.CollisionEndEvent.md)

## Table of contents

### Constructors

- [constructor](engine_event.GameEvent.md#constructor)

### Properties

- [name](engine_event.GameEvent.md#name)

## Constructors

### constructor

• **new GameEvent**()

## Properties

### name

• `Abstract` **name**: `string`

Event name

#### Defined in

[engine/event.ts:60](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/event.ts#L60)
