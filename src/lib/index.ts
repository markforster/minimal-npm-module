export const helloWorld = (): string =>
{
  return `Hello World`;
};
export class HelloWorldClass
{
  public message()
  {
    return helloWorld();
  }
};

export namespace HelloNamespace {
  export const world = () => helloWorld();
}
