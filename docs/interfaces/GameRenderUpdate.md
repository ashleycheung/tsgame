[tsgame](../README.md) / [Exports](../modules.md) / GameRenderUpdate

# Interface: GameRenderUpdate

An object that contains all the
renderer needs to update state

## Table of contents

### Properties

- [debug](GameRenderUpdate.md#debug)
- [newObjects](GameRenderUpdate.md#newobjects)
- [updates](GameRenderUpdate.md#updates)
- [removedObjects](GameRenderUpdate.md#removedobjects)

## Properties

### debug

• **debug**: [`StatefulObjectState`](StatefulObjectState.md)<`any`\>[]

#### Defined in

[state/statefulObjectManager.ts:167](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObjectManager.ts#L167)

___

### newObjects

• **newObjects**: [`StatefulObjectState`](StatefulObjectState.md)<`any`\>[]

All the new objects added and their states

#### Defined in

[state/statefulObjectManager.ts:172](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObjectManager.ts#L172)

___

### updates

• **updates**: [`StatefulObjectUpdate`](StatefulObjectUpdate.md)<`any`\>[]

All the updates to previously known objects.
Note: Objects with no updates will not be
added here

#### Defined in

[state/statefulObjectManager.ts:179](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObjectManager.ts#L179)

___

### removedObjects

• **removedObjects**: `string`[]

The id's of all the state objects removed

#### Defined in

[state/statefulObjectManager.ts:184](https://github.com/ashleycheung/tsgame/blob/dbeac6a/src/state/statefulObjectManager.ts#L184)
