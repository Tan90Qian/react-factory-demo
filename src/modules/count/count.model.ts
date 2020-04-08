import { observable, action, runInAction } from "mobx";

import { BaseService } from "src/services";
import { Injectable } from "src/core/inject";

export class CountStore {
  @observable count: number;

  constructor(initialCount?: number) {
    runInAction(() => {
      this.count = initialCount || 1;
    });
  }
}

@Injectable()
export class CountPresenter {
  constructor(private service: BaseService) {}

  @action
  setCount(store: CountStore, count: number) {
    store.count = count;
  }

  @action
  async fetchCount() {
    return this.service.fetch()
  }

  @action
  static async fetchCount(service: BaseService) {
    return service.fetch()
  }
}

export class LoadingStore {
  @observable loading: boolean = false;
}

export class LoadingPresenter {
  @action
  static setLoading(store: LoadingStore, loading: boolean) {
    store.loading = loading;
  }
}
