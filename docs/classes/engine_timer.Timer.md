[tsgame](../README.md) / [Exports](../modules.md) / [engine/timer](../modules/engine_timer.md) / Timer

# Class: Timer

[engine/timer](../modules/engine_timer.md).Timer

A class that acts as a timer

## Hierarchy

- [`GameObject`](engine_gameObject.GameObject.md)

  ↳ **`Timer`**

## Table of contents

### Constructors

- [constructor](engine_timer.Timer.md#constructor)

### Properties

- [event](engine_timer.Timer.md#event)
- [game](engine_timer.Timer.md#game)

### Accessors

- [active](engine_timer.Timer.md#active)
- [children](engine_timer.Timer.md#children)
- [parent](engine_timer.Timer.md#parent)

### Methods

- [\_step](engine_timer.Timer.md#_step)
- [addChild](engine_timer.Timer.md#addchild)
- [removeChild](engine_timer.Timer.md#removechild)
- [start](engine_timer.Timer.md#start)
- [step](engine_timer.Timer.md#step)

## Constructors

### constructor

• **new Timer**(`duration`)

Creates a timer object of the given
duration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | duration in milliseconds ```typescript const timer = new Timer(1000); timer.start(); ``` |

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[constructor](engine_gameObject.GameObject.md#constructor)

## Properties

### event

• `Readonly` **event**: [`EventManager`](engine_event.EventManager.md)

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[event](engine_gameObject.GameObject.md#event)

#### Defined in

[engine/gameObject.ts:8](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L8)

___

### game

• **game**: ``null`` \| [`Game`](engine_game.Game.md) = `null`

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[game](engine_gameObject.GameObject.md#game)

#### Defined in

[engine/gameObject.ts:14](https://github.com/ashleycheung/tsgame/blob/d3a4e72/src/engine/gameObject.ts#L14)

## Accessors

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

___

### children

• `get` **children**(): `Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Returns

`Set`<[`GameObject`](engine_gameObject.GameObject.md)\>

#### Inherited from

GameObject.children

___

### parent

• `get` **parent**(): ``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Returns

``null`` \| [`GameObject`](engine_gameObject.GameObject.md)

#### Inherited from

GameObject.parent

## Methods

### \_step

▸ **_step**(`delta`): `void`

To be overwritten by children classes

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Overrides

[GameObject](engine_gameObject.GameObject.md).[_step](engine_gameObject.GameObject.md#_step)

___

### addChild

▸ **addChild**(`child`): `void`

Adds a game object as a child
children objects are removed when
the parent is removed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) | ```typescript const game = new Game(); const parent = new GameObject(); const child = new GameObject(); parent.addChild(child);  // Child is also added to game game.addGameObject(parent);  // Child is also removed from game game.removeGameObject(parent); ``` |

#### Returns

`void`

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[addChild](engine_gameObject.GameObject.md#addchild)

___

### removeChild

▸ **removeChild**(`child`): `void`

Removes a game object as a child
children objects are removed when
the parent is removed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`GameObject`](engine_gameObject.GameObject.md) | ```typescript const game = new Game(); const parent = new GameObject(); const child = new GameObject(); parent.addChild(child);  // Child is also added to game game.addGameObject(parent);  // Child is also removed from game game.removeGameObject(parent); ``` |

#### Returns

`void`

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[removeChild](engine_gameObject.GameObject.md#removechild)

___

### start

▸ **start**(): `void`

Starts a timer
```typescript
const timer = new Timer(1000);
timer.start();
```

#### Returns

`void`

___

### step

▸ `Readonly` **step**(`delta`): `void`

Called each game loop before the physics loop
to hook into this, the children class must ovewrite
the _step method

**`remarks`** Children nodes are updated after parent nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | milliseconds |

#### Returns

`void`

#### Inherited from

[GameObject](engine_gameObject.GameObject.md).[step](engine_gameObject.GameObject.md#step)
