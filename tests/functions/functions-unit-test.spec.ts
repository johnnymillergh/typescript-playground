import * as Functions from '../../src/functions'
import { describe, test, expect } from '@jest/globals'

describe('Unit Test - Basic Types in TypeScript', () => {
  test('1. Named function', () => {
    const result = Functions.add(1, 2)
    expect(Number.isInteger(result)).toBeTruthy()
  })

  test('2. Anonymous function', () => {
    const result = Functions.myAdd(1, 2)
    expect(Number.isInteger(result)).toBeTruthy()
  })

  test('3. Rest Parameters', () => {
    const result = Functions.buildName2('Johnny', 'Miller', 'Other')
    console.log(typeof result === 'string')
    expect(typeof result === 'string').toBeTruthy()
  })

  test('3. Rest Parameters', () => {
    const result = Functions.pickCard('Johnny')
    expect(result !== null).toBeTruthy()
  })
})
