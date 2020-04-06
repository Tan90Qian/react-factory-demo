import { observable } from "mobx";

export class LoginStore {
  @observable isLogin: boolean;
}

export { loadingStore } from "./loading-store";
