import { loadingStore } from "./loading-store";

export function loading(): MethodDecorator {
  return function(target, key, descriptor) {
    const model = target.constructor.name;
    const action = `${model}/${String(key)}`;
    return {
      value: funcWithLoading([model, action], descriptor.value),
      enumerable: false,
      configurable: true,
      writable: true
    };
  };
}

function funcWithLoading(names: [string, string], func: any, scope?: object) {
  return function(...args: any[]) {
    const [model, action] = names;
    loadingStore.change(model, action, true);
    const promise = func.apply(scope || this, args);
    if (typeof promise === "object" && typeof promise.finally === "function") {
      promise.finally(() => {
        loadingStore.change(model, action, false);
      });
    } else {
      loadingStore.change(model, action, false);
    }

    return promise;
  } as any;
}
