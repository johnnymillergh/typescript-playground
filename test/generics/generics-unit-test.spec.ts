import 'mocha'
import { assert } from 'chai'
import * as Generics from '../../src/generics'

describe('Unit Test - Generics in TypeScript', () => {
  it('1. Generic Types', () => {
    const result = Generics.identity('Hello, generic!')
    assert(typeof result === 'string', 'Result should be a string value')
  })

  it('2. Generic Types in interface', () => {
    const result = Generics.myIdentity('Hello, generic!')
    assert(typeof result === 'string', 'Result should be a string value')
  })

  it('3. Generic Classes', () => {
    const myGenericNumber = new Generics.GenericNumber<number>()
    myGenericNumber.value = 2019
    myGenericNumber.add = function (x, y) {
      return x + y + this.value
    }
    assert(myGenericNumber.add(0, 0) >= 2019, 'Added result is not right')
  })

  it('4. Using type parameters in generic constraints', () => {
    const x = {a: 1, b: 2, c: 3, d: 4}
    assert(Number.isInteger(Generics.getProperty(x, 'a')), 'Property of x must be integer')
  })

  it('5. Using class types in generics', function () {
    const lion = Generics.createInstance(Generics.Lion)
    assert(lion !== null, 'Creating instance failed')
  })
})
