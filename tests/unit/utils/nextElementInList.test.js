import nextElementInList from '@/utils/nextElementInList'
import { describe } from 'vitest'

describe('nextElementInList', () => {
  it('lacates element in list abd returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'
    const result = nextElementInList(list, value)
    expect(result).toBe('D')
  })

  describe('when element is at the end of the list', () => {
    it('locates next element at the star of list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
