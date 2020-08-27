import { describe, test, expect } from '@jest/globals'
import * as Enums from '../../src/enums'

describe('Unit Test - Enums', () => {
  test('1. Numeric enums', function () {
    console.log('Direction Enums: UP value:', Enums.Direction.UP)
    expect(Enums.Direction.UP !== 0).toBeTruthy()
  })

  test('2. String enums', function () {
    console.log('String Enums: YES value:', Enums.Response.YES)
    expect(typeof Enums.Response.YES === 'string').toBeTruthy()
  })
})
