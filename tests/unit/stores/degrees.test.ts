import type { Mock } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import axios from 'axios'
vi.mock('axios')
const axiosGetMock = axios.get as Mock

import { useDegreesStore } from '@/stores/degrees'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores all degrees that may jobs require', () => {
    const store = useDegreesStore()
    expect(store.degrees).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('FETCH_DEGREES', () => {
    it('makes API request and stores recieved degrees', async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            id: 1,
            degree: "Bachelor's"
          }
        ]
      })
      const store = useDegreesStore()
      await store.FETCH_DEGREES()
      expect(store.degrees).toEqual([
        {
          id: 1,
          degree: "Bachelor's"
        }
      ])
    })
  })
})
