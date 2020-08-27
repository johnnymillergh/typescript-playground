import { describe, test, expect } from '@jest/globals'
import * as Generics from '../../src/generics'

describe('Unit Test - Generics in TypeScript', () => {
  test('1. Generic Types', () => {
    const result = Generics.identity('Hello, generic!')
    expect(typeof result === 'string').toBeTruthy()
  })

  test('2. Generic Types in interface', () => {
    const result = Generics.myIdentity('Hello, generic!')
    expect(typeof result === 'string').toBeTruthy()
  })

  // test('3. Generic Classes', () => {
  //   const myGenericNumber = new Generics.GenericNumber<number>(
  //     2019,
  //     (x, y) => {
  //       return x + y + this.value
  //     })
  //   expect(myGenericNumber.add(0, 0) >= 2019).toBeTruthy()
  // })

  test('4. Using type parameters in generic constraints', () => {
    const x = { a: 1, b: 2, c: 3, d: 4 }
    expect(Number.isInteger(Generics.getProperty(x, 'a'))).toBeTruthy()
  })

  // test('5. Using class types in generics', function () {
  //   const lion = Generics.createInstance(Generics.Lion)
  //   expect(lion !== null).toBeTruthy()
  // })
})
