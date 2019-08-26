import * as Functions from '../../src/functions'
import 'mocha'
import { assert } from 'chai'

describe('Unit Test - Basic Types in TypeScript', () => {
  it('1. Named function', () => {
    const result = Functions.add(1, 2)
    assert(Number.isInteger(result), 'Wrong result, expected number!')
  })

  it('2. Anonymous function', () => {
    const result = Functions.myAdd(1, 2)
    assert(Number.isInteger(result), 'Wrong result, expected number!')
  })

  it('3. Rest Parameters', () => {
    const result = Functions.buildName2('Johnny', 'Miller', 'Other')
    console.log(typeof result === 'string')
    assert(typeof result === 'string', 'Wrong result, expected string!')
  })

  it('3. Rest Parameters', () => {
    const result = Functions.pickCard('Johnny')
    assert(result !== null, 'Wrong result, expected any!')
  })
})
