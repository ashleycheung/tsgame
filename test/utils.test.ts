import { getObjectUpdates } from "../src/utils/utils"

describe("getObjectUpdates", () => {
  it ("Base case: Empty objects", () => {
    const obj1 = {};
    const obj2 = {};
    const expectedDiff = {};
    const actualDiff = getObjectUpdates(obj1, obj2)
    expect(expectedDiff).toMatchObject(actualDiff);
  })
})