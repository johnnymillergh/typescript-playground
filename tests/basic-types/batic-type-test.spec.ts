import { describe, test, expect } from '@jest/globals'
import * as BasicTypes from '../../src/basic-types'

describe('Unit Test - Basic Types in TypeScript', () => {
  console.info('BasicTypes:', BasicTypes)

  test('1. Boolean', () => {
    expect(BasicTypes.deleted === false).toBeTruthy()
  })

  test('2. Number', () => {
    expect(Number.isInteger(BasicTypes.decimal)).toBeTruthy()
  })

  test('3. String', () => {
    expect(BasicTypes.sentence.length !== 0).toBeTruthy()
  })

  test('4. Array', () => {
    expect(BasicTypes.numberList.length !== 0).toBeTruthy()
  })

  test('5. Tuple', () => {
    expect(Number.isInteger(BasicTypes.tuple[1])).toBeTruthy()
  })

  test('6. Enum', () => {
    expect(BasicTypes.Color.Red === 0).toBeTruthy()
  })

  test('7. Any', () => {
    expect(Number.isInteger(BasicTypes.notSure)).toBeTruthy()
  })

  test('8. Void', () => {
    BasicTypes.warnUser()
  })

  test('9. Null and Undefined', () => {
    expect(BasicTypes.n === null).toBeTruthy()
    expect(BasicTypes.u === undefined).toBeTruthy()
  })
})
