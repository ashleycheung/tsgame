[tsgame](README.md) / Exports

# tsgame

## Table of contents

### Classes

- [EventManager](classes/EventManager.md)
- [Matrix2x2](classes/Matrix2x2.md)
- [Matrix3x3](classes/Matrix3x3.md)
- [Matrix4x4](classes/Matrix4x4.md)
- [Vector3D](classes/Vector3D.md)
- [Controller](classes/Controller.md)
- [PhysicsRender](classes/PhysicsRender.md)
- [AssetLoader](classes/AssetLoader.md)
- [FPSTracker](classes/FPSTracker.md)
- [GameRenderer](classes/GameRenderer.md)

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
- [OnRendererEnterEvent](classes/OnRendererEnterEvent.md)
- [OnRendererExitEvent](classes/OnRendererExitEvent.md)

### Engine

- [Game](classes/Game.md)
- [GameObject](classes/GameObject.md)
- [TileMap](classes/TileMap.md)
- [TilemapWallCell](classes/TilemapWallCell.md)
- [Timer](classes/Timer.md)

### Interfaces

- [TileMapState](interfaces/TileMapState.md)
- [TilemapCode](interfaces/TilemapCode.md)
- [TileMapCellCode](interfaces/TileMapCellCode.md)
- [PhysicsBodyState](interfaces/PhysicsBodyState.md)
- [ShapeState](interfaces/ShapeState.md)
- [Asset](interfaces/Asset.md)
- [SpriteSheetAsset](interfaces/SpriteSheetAsset.md)
- [TileSetAsset](interfaces/TileSetAsset.md)

### Physics

- [Physics](classes/Physics.md)
- [PhysicsBody](classes/PhysicsBody.md)
- [PhysicsShape](classes/PhysicsShape.md)
- [PhysicsRectangle](classes/PhysicsRectangle.md)
- [PhysicsCircle](classes/PhysicsCircle.md)
- [Vector2D](classes/Vector2D.md)

### State

- [SpriteState](interfaces/SpriteState.md)
- [Sprite](classes/Sprite.md)
- [StatefulObject](classes/StatefulObject.md)
- [StatefulObjectState](interfaces/StatefulObjectState.md)
- [StatefulObjectUpdate](interfaces/StatefulObjectUpdate.md)
- [StatefulObjectManager](classes/StatefulObjectManager.md)
- [GameRenderState](interfaces/GameRenderState.md)
- [GameRenderUpdate](interfaces/GameRenderUpdate.md)

### Functions

- [bit32ToSet](modules.md#bit32toset)
- [setToBit32](modules.md#settobit32)
- [rotate2DArray](modules.md#rotate2darray)
- [toFixed](modules.md#tofixed)
- [debugRenderState](modules.md#debugrenderstate)
- [arraysAreEqual](modules.md#arraysareequal)
- [getObjectUpdates](modules.md#getobjectupdates)
- [applyObjectUpdates](modules.md#applyobjectupdates)

### View

- [OnRendererEnterEvent](classes/OnRendererEnterEvent.md)
- [OnRendererExitEvent](classes/OnRendererExitEvent.md)

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
| `state` | [`GameRenderState`](interfaces/GameRenderState.md) |
| `elem` | `HTMLElement` |

#### Returns

`void`

___

### arraysAreEqual

▸ **arraysAreEqual**(`arr1`, `arr2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr1` | `any`[] |
| `arr2` | `any`[] |

#### Returns

`boolean`

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
