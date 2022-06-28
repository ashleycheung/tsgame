[tsgame](../README.md) / [Exports](../modules.md) / [engine/event](../modules/engine_event.md) / EventManager

# Class: EventManager

[engine/event](../modules/engine_event.md).EventManager

Implements the observer pattern for events

```typescript
 const event = new EventManager()

 event.addEventListener("collisionStart", (event: GameEvent) => {
   console.log("Collision occured")
 })
```

## Table of contents

### Constructors

- [constructor](engine_event.EventManager.md#constructor)

### Methods

- [addEventlistener](engine_event.EventManager.md#addeventlistener)
- [callEvent](engine_event.EventManager.md#callevent)
- [removeEventListener](engine_event.EventManager.md#removeeventlistener)

## Constructors

### constructor

• **new EventManager**()

## Methods

### addEventlistener

▸ **addEventlistener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `callback` | (`event`: [`GameEvent`](engine_event.GameEvent.md)) => `void` |

#### Returns

`void`

___

### callEvent

▸ **callEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GameEvent`](engine_event.GameEvent.md) |

#### Returns

`void`

___

### removeEventListener

▸ **removeEventListener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `callback` | (`event`: [`GameEvent`](engine_event.GameEvent.md)) => `void` |

#### Returns

`void`
