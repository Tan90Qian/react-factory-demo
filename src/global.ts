import { Factory } from "./core/inject";

import { LoginStore, loadingStore } from "./models";
import { BaseService } from "./services";

export const globalStores = { loginStore: new LoginStore(), loadingStore };
export const services = { baseSevice: Factory(BaseService) };

export type GlobalStores = typeof globalStores;
export type Services = typeof services;
