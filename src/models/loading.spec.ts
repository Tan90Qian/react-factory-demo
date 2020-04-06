import { loading } from "./loading";

test("loading", async () => {
  class Test {
    @loading()
    async something(x: number, y: number) {
      return x + y;
    }
  }

  const test = new Test();
  expect(await test.something(1, 2)).toBe(3);
});
