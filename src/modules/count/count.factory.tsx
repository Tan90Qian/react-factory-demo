import React from "react";
import { observer } from "mobx-react";

import { Injectable } from "src/core/inject";
import { loading } from "src/models/loading";
import { BaseFactory } from "src/core/baseFactory";

import { CountStore, CountPresenter } from "./count.model";
import { CountView } from "./views/count.view";
import { GlobalStores, Services } from "src/global";

@Injectable()
export class CountFactory extends BaseFactory<GlobalStores, Services> {
  constructor(
    private countStore: CountStore,
    private countPresenter: CountPresenter
  ) {
    super();
    this.didMount = this.didMount.bind(this);
  }

  onClick = () => {
    this.countPresenter.setCount(this.countStore, this.countStore.count + 1);
  };

  @loading()
  async didMount() {
    // const newCount = await CountPresenter.fetchCount(this.services.baseSevice);
    const newCount = await this.countPresenter.fetchCount();
    this.countPresenter.setCount(this.countStore, newCount);
  }

  create = () => {
    return observer(() => (
      <CountView
        loading={
          this.globalStores.loadingStore.actions["CountFactory/didMount"]
        }
        count={this.countStore.count}
        onClick={this.onClick}
        didMount={this.didMount}
      />
    ));
  };
}
