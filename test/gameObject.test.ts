import { GameObject } from "../src/engine/gameObject";

describe("Game Object", () => {
  it("Searches ancestor", () => {
    const o1 = new GameObject();
    const o2 = new GameObject();
    const o3 = new GameObject();
    const o4 = new GameObject();
    o1.addChild(o2)
    o2.addChild(o3)
    o2.addChild(o4);
    const answer = o4.findAncestor((target) => target === o1);
    expect(answer).toEqual(o1);
  })
})