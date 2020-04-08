import { Injectable } from "src/core/inject";

class BaseEngine {
  async get(url: string): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(10);
      }, 2000);
    });
    // return fetch(url);
  }
}

@Injectable()
export class BaseSevice {
  constructor(private engine: BaseEngine) {}

  fetch(url?: string) {
    return this.engine.get(url);
  }
}
