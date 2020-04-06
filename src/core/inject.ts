import "reflect-metadata";

type Constructor<T = any> = new (...args: any[]) => T;

export const Injectable = (): ClassDecorator => target => {};

export const Factory = <T extends object, K extends keyof T>(
  target: Constructor<T>
): T => {
  // 获取所有注入的服务
  const providers = Reflect.getMetadata("design:paramtypes", target) || []; // [OtherService]
  const args = providers.map((provider: Constructor) => {
    // return new provider(new)
    return Factory(provider);
  });
  return new target(...args);
};
