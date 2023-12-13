import { describe, it, expect } from 'vitest'
import { evenOrOdd, multiply } from '../../src/playground.js'
describe('basic math', () => {
  it('Adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })
  describe('eventOrOdd', () => {
    describe('when number is Even', () => {
      it('indicates the number is even', () => {
        expect(evenOrOdd(6)).toBe('Even')
      })
    })
    describe('when number is Odd', () => {
      it('indicates the number is odd', () => {
        expect(evenOrOdd(7)).toBe('Odd')
      })
    })
  })
  describe('mulitply', () => {
    it('multiply two numbers together', () => {
      expect(multiply(2, 5)).toBe(10)
    })
  })
})
