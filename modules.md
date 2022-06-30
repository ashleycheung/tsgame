[tsgame](README.md) / Exports

# tsgame

## Table of contents

### Engine

- [EventManager](classes/EventManager.md)
- [Game](classes/Game.md)
- [PostPhysicsStepEvent](classes/PostPhysicsStepEvent.md)
- [GameObject](classes/GameObject.md)
- [OnGameEnterEvent](classes/OnGameEnterEvent.md)
- [OnGameExitEvent](classes/OnGameExitEvent.md)
- [Tilemap](classes/Tilemap.md)
- [TilemapWallCell](classes/TilemapWallCell.md)
- [Timer](classes/Timer.md)

### Events

- [GameEvent](classes/GameEvent.md)
- [PostPhysicsStepEvent](classes/PostPhysicsStepEvent.md)
- [OnGameEnterEvent](classes/OnGameEnterEvent.md)
- [OnGameExitEvent](classes/OnGameExitEvent.md)
- [TimerEndEvent](classes/TimerEndEvent.md)
- [CollisionStartEvent](classes/CollisionStartEvent.md)
- [CollisionEndEvent](classes/CollisionEndEvent.md)

### Type Aliases

- [TilemapCode](modules.md#tilemapcode)
- [TileMapCellCode](modules.md#tilemapcellcode)

### Classes

- [Matrix2x2](classes/Matrix2x2.md)
- [Matrix3x3](classes/Matrix3x3.md)
- [Matrix4x4](classes/Matrix4x4.md)
- [Vector3D](classes/Vector3D.md)
- [Controller](classes/Controller.md)
- [PhysicsRender](classes/PhysicsRender.md)

### Physics

- [Physics](classes/Physics.md)
- [PhysicsBody](classes/PhysicsBody.md)
- [PhysicsShape](classes/PhysicsShape.md)
- [PhysicsRectangle](classes/PhysicsRectangle.md)
- [PhysicsCircle](classes/PhysicsCircle.md)
- [Vector2D](classes/Vector2D.md)

### Functions

- [bit32ToSet](modules.md#bit32toset)
- [setToBit32](modules.md#settobit32)
- [rotate2DArray](modules.md#rotate2darray)
- [toFixed](modules.md#tofixed)

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

[engine/tilemap.ts:167](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/tilemap.ts#L167)

___

### TileMapCellCode

Ƭ **TileMapCellCode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `collision` | `number`[] |

#### Defined in

[engine/tilemap.ts:172](https://github.com/ashleycheung/tsgame/blob/d6f12cc/src/engine/tilemap.ts#L172)

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
