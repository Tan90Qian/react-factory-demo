import { Factory } from "src/core/inject";
import { globalStores, services } from "src/global";

import { CountStore, CountPresenter } from "./count.model";
import { CountFactory } from "./count.factory";
import { BaseSevice, BaseEngine } from "src/services/index";

jest.mock("./count.model");

describe("test CountFactory", () => {
  let countFactory: CountFactory;
  let countStore: CountStore, countPresenter: CountPresenter;

  beforeEach(() => {
    countStore = new CountStore();
    countPresenter = new CountPresenter(new BaseSevice(new BaseEngine()));

    countFactory = new CountFactory(countStore, countPresenter);
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
    expect(countPresenter.setCount).toHaveBeenCalledWith(countStore, 11);
  });
});
