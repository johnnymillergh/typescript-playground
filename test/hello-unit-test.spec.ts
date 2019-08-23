import 'mocha'
import { expect } from 'chai'

describe('Hello Mocha.js', () => {
  describe('Hello Unit Test', () => {
    it('Hello Unit Test 1', () => {
      let message: string
      message = 'Hello'
      console.error('Message:', message)
      expect(message).to.deep.equal('Hello')
    })
  })
})
