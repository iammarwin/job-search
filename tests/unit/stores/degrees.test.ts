import { createPinia, setActivePinia } from 'pinia'

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
