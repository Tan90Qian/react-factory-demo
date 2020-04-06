import { Injectable } from "src/core/inject";

class BaseEngine {
  get(url: string) {
    return fetch(url);
  }
}

@Injectable()
export class BaseSevice {
  constructor(private engine: BaseEngine) {}

  fetch(url: string) {
    this.engine.get(url);
  }
}
