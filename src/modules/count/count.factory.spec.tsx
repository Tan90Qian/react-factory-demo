import { Factory } from "src/core/inject";
import { globalStores, services } from "src/global";

import { CountStore, CountPresenter } from "./count.model";
import { CountFactory } from "./count.factory";

jest.mock("./count.model");

describe("test CountFactory", () => {
  let countFactory: CountFactory;
  let countStore: CountStore;

  beforeEach(() => {
    countStore = new CountStore();

    countFactory = new CountFactory(countStore);
    // countFactory = Factory(CountFactory);
    countFactory.receive({ globalStores, services });
  });

  test("init test", () => {
    expect(Reflect.get(countFactory, "countStore")).toBe(countStore);
  });

  test("init test with factory", () => {
    countFactory = Factory(CountFactory);
    expect(Reflect.get(countFactory, "countStore")).toEqual(new CountStore());
  });

  test("test onClick api", () => {
    countStore.count = 10;
    countFactory.onClick();
    expect(CountPresenter.setCount).toHaveBeenCalledWith(countStore, 11);
  });
});
