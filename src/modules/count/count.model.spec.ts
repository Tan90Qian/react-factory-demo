import {
  CountStore,
  CountPresenter,
  LoadingStore,
  LoadingPresenter
} from "./count.model";
import { Factory } from "src/core/inject";

describe("test CountStore", () => {
  test("init test", () => {
    const countStore = new CountStore();

    expect(countStore.count).toBe(1);
  });

  test("init test with param", () => {
    const countStore = new CountStore(10);

    expect(countStore.count).toBe(10);
  });
});

describe("test CountPresenter", () => {
  let countStore: CountStore;
  const countPresenter = Factory(CountPresenter);
  beforeEach(() => {
    countStore = new CountStore();
  });

  test("test setCount api", () => {
    countPresenter.setCount(countStore, 5);
    expect(countStore.count).toBe(5);
  });
});

describe("test LoadingStore", () => {
  test("init test", () => {
    const loadingStore = new LoadingStore();

    expect(loadingStore.loading).toBe(false);
  });
});

describe("test LoadingPresenter", () => {
  let loadingStore: LoadingStore;
  beforeEach(() => {
    loadingStore = new LoadingStore();
  });

  test("test setloading api", () => {
    LoadingPresenter.setLoading(loadingStore, true);
    expect(loadingStore.loading).toBe(true);
  });
});
