[tsgame](../README.md) / [Exports](../modules.md) / EventManager

# Class: EventManager

Implements the observer pattern for events

```typescript
 const event = new EventManager()

 event.addEventListener("collisionStart", (event: GameEvent) => {
   console.log("Collision occured")
 })
```

## Table of contents

### Constructors

- [constructor](EventManager.md#constructor)

### Methods

- [addEventlistener](EventManager.md#addeventlistener)
- [callEvent](EventManager.md#callevent)
- [removeEventListener](EventManager.md#removeeventlistener)

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
| `callback` | (`event`: [`GameEvent`](GameEvent.md)) => `void` |

#### Returns

`void`

___

### callEvent

▸ **callEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GameEvent`](GameEvent.md) |

#### Returns

`void`

___

### removeEventListener

▸ **removeEventListener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `callback` | (`event`: [`GameEvent`](GameEvent.md)) => `void` |

#### Returns

`void`
