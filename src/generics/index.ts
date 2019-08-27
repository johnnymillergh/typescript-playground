// 1. Generic Types
export function identity<T>(arg: T): T {
  return arg
}

// 2. Generic Types in interface
export interface GenericIdentityFn {
  <T>(arg: T): T
}

export const myIdentity: GenericIdentityFn = identity

// 3. Generic Classes
export class GenericNumber<T> {
  value: T
  add: (x: T, y: T) => T
}

// 4. Using type parameters in generic constraints
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// 5. Using class types in generics
export class BeeKeeper {
  hasMask: boolean
}

export class ZooKeeper {
  nameTag: string
}

export class Animal {
  numLegs: number
}

export class Bee extends Animal {
  keeper: BeeKeeper
}

export class Lion extends Animal {
  keeper: ZooKeeper
}

export function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

