import 'mocha'
import { assert } from 'chai'
import * as Enums from '../../src/enums'

describe('Unit Test - Enums', () => {
  it('1. Numeric enums', function () {
    console.log('Direction Enums: UP value:', Enums.Direction.UP)
    assert(Enums.Direction.UP !== 0, 'UP value cannot be equal to 0')
  })

  it('2. String enums', function () {
    console.log('String Enums: YES value:', Enums.Response.YES)
    assert(typeof Enums.Response.YES === 'string', 'Response.YES value should be string')
  })
})
