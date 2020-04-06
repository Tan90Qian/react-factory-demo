import { Factory } from "./core/inject";

import { LoginStore, loadingStore } from "./models";
import { BaseSevice } from "./services";

export const globalStores = { loginStore: new LoginStore(), loadingStore };
export const services = { baseSevice: Factory(BaseSevice) };

export type GlobalStores = typeof globalStores;
export type Services = typeof services;
