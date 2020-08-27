// 1. Generic Types
export function identity<T> (arg: T): T {
  return arg
}

// 2. Generic Types in interface
export interface GenericIdentityFn {
  <T> (arg: T): T
}

export const myIdentity: GenericIdentityFn = identity

// 3. Generic Classes
export class GenericNumber<T> {
  value: T
  add: (x: T, y: T) => T

  constructor (value: T, add: (x: T, y: T) => T) {
    this.value = value
    this.add = add
  }
}

// 4. Using type parameters in generic constraints
export function getProperty<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

// 5. Using class types in generics
export class BeeKeeper {
  hasMask: boolean

  constructor (hasMask: boolean) {
    this.hasMask = hasMask
  }
}

export class ZooKeeper {
  nameTag: string

  constructor (nameTag: string) {
    this.nameTag = nameTag
  }
}

export class Animal {
  numLegs: number

  constructor (numLegs: number) {
    this.numLegs = numLegs
  }
}

export class Bee extends Animal {
  keeper: BeeKeeper

  constructor (numLegs: number, keeper: BeeKeeper) {
    super(numLegs)
    this.keeper = keeper
  }
}

export class Lion extends Animal {
  keeper: ZooKeeper

  constructor (numLegs: number, keeper: ZooKeeper) {
    super(numLegs)
    this.keeper = keeper
  }
}

export function createInstance<A extends Animal> (c: new () => A): A {
  return new c()
}

