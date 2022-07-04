[tsgame](README.md) / Exports

# tsgame

## Table of contents

### Engine

- [EventManager](classes/EventManager.md)
- [Game](classes/Game.md)
- [PostPhysicsStepEvent](classes/PostPhysicsStepEvent.md)
- [GameStepStartEvent](classes/GameStepStartEvent.md)
- [GameStepEndEvent](classes/GameStepEndEvent.md)
- [GameObject](classes/GameObject.md)
- [OnGameEnterEvent](classes/OnGameEnterEvent.md)
- [OnGameExitEvent](classes/OnGameExitEvent.md)
- [Tilemap](classes/Tilemap.md)
- [TilemapWallCell](classes/TilemapWallCell.md)
- [Timer](classes/Timer.md)

### Events

- [GameEvent](classes/GameEvent.md)
- [PostPhysicsStepEvent](classes/PostPhysicsStepEvent.md)
- [GameStepStartEvent](classes/GameStepStartEvent.md)
- [GameStepEndEvent](classes/GameStepEndEvent.md)
- [OnGameEnterEvent](classes/OnGameEnterEvent.md)
- [OnGameExitEvent](classes/OnGameExitEvent.md)
- [TimerEndEvent](classes/TimerEndEvent.md)
- [CollisionStartEvent](classes/CollisionStartEvent.md)
- [CollisionEndEvent](classes/CollisionEndEvent.md)
- [OnRendererExitEvent](classes/OnRendererExitEvent.md)

### Type Aliases

- [TilemapCode](modules.md#tilemapcode)
- [TileMapCellCode](modules.md#tilemapcellcode)
- [PhysicsBodyState](modules.md#physicsbodystate)
- [ShapeState](modules.md#shapestate)

### Classes

- [Matrix2x2](classes/Matrix2x2.md)
- [Matrix3x3](classes/Matrix3x3.md)
- [Matrix4x4](classes/Matrix4x4.md)
- [Vector3D](classes/Vector3D.md)
- [Controller](classes/Controller.md)
- [PhysicsRender](classes/PhysicsRender.md)
- [GameRenderer](classes/GameRenderer.md)

### Physics

- [Physics](classes/Physics.md)
- [PhysicsBody](classes/PhysicsBody.md)
- [PhysicsShape](classes/PhysicsShape.md)
- [PhysicsRectangle](classes/PhysicsRectangle.md)
- [PhysicsCircle](classes/PhysicsCircle.md)
- [Vector2D](classes/Vector2D.md)

### State

- [SpriteState](modules.md#spritestate)
- [Sprite](classes/Sprite.md)
- [StatefulObject](classes/StatefulObject.md)
- [StatefulObjectState](modules.md#statefulobjectstate)
- [StatefulObjectUpdate](modules.md#statefulobjectupdate)
- [StatefulObjectManager](classes/StatefulObjectManager.md)
- [GameRenderState](modules.md#gamerenderstate)
- [GameRenderUpdate](modules.md#gamerenderupdate)

### Functions

- [bit32ToSet](modules.md#bit32toset)
- [setToBit32](modules.md#settobit32)
- [rotate2DArray](modules.md#rotate2darray)
- [toFixed](modules.md#tofixed)
- [debugRenderState](modules.md#debugrenderstate)
- [getObjectUpdates](modules.md#getobjectupdates)
- [applyObjectUpdates](modules.md#applyobjectupdates)

### View

- [OnRendererExitEvent](classes/OnRendererExitEvent.md)

## Type Aliases

### TilemapCode

Ƭ **TilemapCode**: `Object`

Maps the tilemap cells to its
code id

#### Type declaration

| Name | Type |
| :------ | :------ |
| `empty` | [`TileMapCellCode`](modules.md#tilemapcellcode) |
| `wall` | [`TileMapCellCode`](modules.md#tilemapcellcode) |

#### Defined in

[engine/tilemap.ts:167](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/tilemap.ts#L167)

___

### TileMapCellCode

Ƭ **TileMapCellCode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `collision` | `number`[] |

#### Defined in

[engine/tilemap.ts:172](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/engine/tilemap.ts#L172)

___

### PhysicsBodyState

Ƭ **PhysicsBodyState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `position` | [`Vector2D`](classes/Vector2D.md) |
| `angle` | `number` |
| `shape` | [`ShapeState`](modules.md#shapestate)<`any`\> |

#### Defined in

[physics/physicsBody.ts:196](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsBody.ts#L196)

___

### ShapeState

Ƭ **ShapeState**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | `string` | Circle, Rectangle, etc |
| `properties` | `T` | - |

#### Defined in

[physics/physicsShape.ts:109](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/physics/physicsShape.ts#L109)

## State

### SpriteState

Ƭ **SpriteState**: `Object`

The state of a sprite
a sprite should be able to be created
from just the sprite state

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `textureName` | `string` | The alias name for the texture. The path for this texture is managed by the client |
| `position` | [`Vector2D`](classes/Vector2D.md) | - |

#### Defined in

[state/sprite.ts:12](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/sprite.ts#L12)

___

• **Sprite**: `Object`

Represents a 2d sprite

#### Defined in

[state/sprite.ts:29](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/sprite.ts#L29)

• `Abstract` **StatefulObject**<`T`\>: `Object`

An object that has a state needed by the renderer to render

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[state/statefulObject.ts:10](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObject.ts#L10)

### StatefulObjectState

Ƭ **StatefulObjectState**<`T`\>: `Object`

Represents the whole state of the object
needed for the renderer to render from scratch

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The game object id |
| `type` | `string` | The type of the game object |
| `state` | `T` | The actual state |

#### Defined in

[state/statefulObject.ts:102](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObject.ts#L102)

___

### StatefulObjectUpdate

Ƭ **StatefulObjectUpdate**<`T`\>: `Object`

Represents an update to a object
needed for the renderer to update
an already existing object with known
render state

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The game object id |
| `update` | `Partial`<`T`\> | The updates to the game object |

#### Defined in

[state/statefulObject.ts:125](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObject.ts#L125)

___

• **StatefulObjectManager**: `Object`

Responsible for managing all the 
render states in a game

#### Defined in

[state/statefulObjectManager.ts:12](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObjectManager.ts#L12)

### GameRenderState

Ƭ **GameRenderState**: `Object`

Contains all the render states
of all the objects in the game

#### Type declaration

| Name | Type |
| :------ | :------ |
| `objects` | [`StatefulObjectState`](modules.md#statefulobjectstate)<`any`\>[] |

#### Defined in

[state/statefulObjectManager.ts:155](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObjectManager.ts#L155)

___

### GameRenderUpdate

Ƭ **GameRenderUpdate**: `Object`

An object that contains all the
renderer needs to update state

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | [`StatefulObjectState`](modules.md#statefulobjectstate)<`any`\>[] | - |
| `newObjects` | [`StatefulObjectState`](modules.md#statefulobjectstate)<`any`\>[] | All the new objects added and their states |
| `updates` | [`StatefulObjectUpdate`](modules.md#statefulobjectupdate)<`any`\>[] | All the updates to previously known objects. Note: Objects with no updates will not be added here |
| `removedObjects` | `string`[] | The id's of all the state objects removed |

#### Defined in

[state/statefulObjectManager.ts:165](https://github.com/ashleycheung/tsgame/blob/46dfc92/src/state/statefulObjectManager.ts#L165)

## Functions

### bit32ToSet

▸ **bit32ToSet**(`bit`): `Set`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`Set`<`number`\>

___

### setToBit32

▸ **setToBit32**(`set`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | `Set`<`number`\> |

#### Returns

`number`

___

### rotate2DArray

▸ **rotate2DArray**(`array`): `any`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[][] |

#### Returns

`any`[][]

___

### toFixed

▸ **toFixed**(`n`, `digits`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `digits` | `number` |

#### Returns

`number`

___

### debugRenderState

▸ **debugRenderState**(`state`, `elem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`GameRenderState`](modules.md#gamerenderstate) |
| `elem` | `HTMLElement` |

#### Returns

`void`

___

### getObjectUpdates

▸ **getObjectUpdates**<`T`\>(`obj1`, `obj2`): `Partial`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj1` | `T` |
| `obj2` | `T` |

#### Returns

`Partial`<`T`\>

___

### applyObjectUpdates

▸ **applyObjectUpdates**<`T`\>(`obj`, `updates`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `updates` | `Partial`<`T`\> |

#### Returns

`T`
