import * as BasicTypes from '../../src/basic-types'
import 'mocha'
import { assert } from 'chai'

describe('Unit Test - Basic Types in TypeScript', () => {
  console.error('BasicTypes:', BasicTypes)

  it('1. Boolean', () => {
    assert(BasicTypes.deleted === false, 'Boolean constant is not false')
  })

  it('2. Number', () => {
    assert(Number.isInteger(BasicTypes.decimal), 'Number constant is not a integer')
  })

  it('3. String', () => {
    assert(BasicTypes.sentence.length !== 0, 'String constant must not be empty')
  })

  it('4. Array', () => {
    assert(BasicTypes.numberList.length !== 0, 'Number list must not be empty')
  })

  it('5. Tuple', () => {
    assert(Number.isInteger(BasicTypes.tuple[1]), 'Tuple[1] should be an integer number')
  })

  it('6. Enum', () => {
    assert(BasicTypes.Color.Red === 0, 'Color.Red should be zero')
  })

  it('7. Any', () => {
    assert(Number.isInteger(BasicTypes.notSure), 'notSure should be integer')
  })

  it('8. Void', () => {
    BasicTypes.warnUser()
  })

  it('9. Null and Undefined', () => {
    assert(BasicTypes.n === null, 'BasicTypes.n should be null')
    assert(BasicTypes.u === undefined, 'BasicTypes.u should be undefined')
  })
})
