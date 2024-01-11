import { createPinia, setActivePinia } from 'pinia'

import { useUserStore } from '@/stores/user.js'
import { describe, expect } from 'vitest'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('keeps track if user is logged in', () => {
    const userStore = useUserStore()
    expect(userStore.isLoggedIn).toBe(false)
  })

  it('stores organizations that the user would like to filter jobs by', () => {
    const userStore = useUserStore()
    expect(userStore.selectedOrganizations).toEqual([])
  })

  it('stores jobs type that the user would like to filter jobs by', () => {
    const userStore = useUserStore()
    expect(userStore.selectedJobTypes).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('loginUser', () => {
    it('logs the user in', () => {
      const userStore = useUserStore()
      userStore.loginUser()
      expect(userStore.isLoggedIn).toBe(true)
    })
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations the user has shosen to filer jobs by', () => {
      const userStore = useUserStore()
      userStore.ADD_SELECTED_ORGANIZATIONS(['Org1', 'Org2'])
      expect(userStore.selectedOrganizations).toEqual(['Org1', 'Org2'])
    })
  })

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates job types the user has chosen to filter jobs by', () => {
      const userStore = useUserStore()
      userStore.ADD_SELECTED_JOB_TYPES(['Full-time', 'Part-time'])
      expect(userStore.selectedJobTypes).toEqual(['Full-time', 'Part-time'])
    })
  })
})
