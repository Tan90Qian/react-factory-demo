import { ComponentType } from "react";

export abstract class BaseFactory<St, Sv> {
  protected globalStores: St;
  protected services: Sv;
  receive({ globalStores, services }: BaseFactoryParams<St, Sv>) {
    this.globalStores = globalStores;
    this.services = services;
    return this;
  }
  abstract create(): ComponentType;
}

export interface BaseFactoryParams<St, Sv> {
  globalStores?: St;
  services?: Sv;
}
