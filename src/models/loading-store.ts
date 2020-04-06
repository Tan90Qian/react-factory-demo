import { observable, action } from "mobx";

interface CounterModelsAndActions {
  [name: string]: number;
}

interface ModelsAndActions {
  [name: string]: boolean;
}

interface Counter {
  models: CounterModelsAndActions;
  actions: CounterModelsAndActions;
}

const counter: Counter = {
  models: {},
  actions: {}
};

function modelCount(model: string, state: boolean) {
  if (typeof counter.models[model] === "undefined") {
    counter.models[model] = 0;
  }

  if (state === true) {
    counter.models[model] += 1;
  } else if (state === false) {
    counter.models[model] = Math.max(counter.models[model] - 1, 0);
  }

  return counter.models[model] > 0;
}

function actionCount(action: string, state: boolean) {
  if (typeof counter.actions[action] === "undefined") {
    counter.actions[action] = 0;
  }

  if (state === true) {
    counter.actions[action] += 1;
  } else if (state === false) {
    counter.actions[action] = Math.max(counter.actions[action] - 1, 0);
  }

  return counter.actions[action] > 0;
}

export class LoadingStore {
  // global loading state
  @observable
  global = false;

  // load status of each model
  @observable
  models: ModelsAndActions = {};

  // load status of each action
  @observable
  actions: ModelsAndActions = {};

  // change load status
  @action
  change = (model: string, action: string, state: boolean) => {
    if (action) {
      this.actions[action] = actionCount(action, state);
    }

    if (state === true) {
      this.models[model] = modelCount(model, state);
      this.global = true;
    } else {
      this.models[model] = Object.keys(this.actions)
        .filter(key => {
          return key && key.startsWith(`${model}/`);
        })
        .some(key => {
          return this.actions[key];
        });

      this.global = Object.keys(this.models).some(key => {
        return this.models[key];
      });
    }
  };
}

export const loadingStore = new LoadingStore();
