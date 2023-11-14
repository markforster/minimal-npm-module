import { HelloWorldClass, HelloNamespace, helloWorld } from "..";

const c: HelloWorldClass = new HelloWorldClass();

console.log(`HelloNamespace.world`, HelloNamespace.world());
console.log(`HelloWorldClass`, c.message());
console.log(`Method`, helloWorld());
