import { createPinia, setActivePinia } from 'pinia'

import { useUserStore } from '@/stores/user'
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

  it('stores degrees that the user would like to filter jobs by', () => {
    const userStore = useUserStore()
    expect(userStore.selectedDegrees).toEqual([])
  })

  it("stores user's search term for skills and qualifications", () => {
    const userStore = useUserStore()
    expect(userStore.skillsSearchTerm).toEqual('')
  })

  it("stores user's search term for location", () => {
    const userStore = useUserStore()
    expect(userStore.locationSearchTerm).toEqual('')
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const userStore = useUserStore()
      userStore.LOGIN_USER()
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

  describe('ADD_SELECTED_DEGREES', () => {
    it('updates degrees the user has chosen to filter jobs by', () => {
      const userStore = useUserStore()
      userStore.ADD_SELECTED_DEGREES(["Master's", "Bachelor's"])
      expect(userStore.selectedDegrees).toEqual(["Master's", "Bachelor's"])
    })
  })

  describe('UPDATE_SKILLS_SEARCH_TERM', () => {
    it('receives search term for skills the user has enterd', () => {
      const userStore = useUserStore()
      userStore.UPDATE_SKILLS_SEARCH_TERM('Vue Developer')
      expect(userStore.skillsSearchTerm).toEqual('Vue Developer')
    })
  })

  describe('UPDATE_LOCATION_SEARCH_TERM', () => {
    it('receives search term for location the user has enterd', () => {
      const userStore = useUserStore()
      userStore.UPDATE_LOCATION_SEARCH_TERM('London UK')
      expect(userStore.locationSearchTerm).toEqual('London UK')
    })
  })

  describe('CLEAR_USER_JOB_FILTER_SELECTIONS', () => {
    it('removes all job filters that user has shosen', () => {
      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Random organization']
      userStore.selectedJobTypes = ['Random job type']
      userStore.selectedDegrees = ['Random degree']
      userStore.skillsSearchTerm = 'Vue Developer'

      userStore.CLEAR_USER_JOB_FILTER_SELECTIONS()

      expect(userStore.selectedOrganizations).toEqual([])
      expect(userStore.selectedJobTypes).toEqual([])
      expect(userStore.selectedDegrees).toEqual([])
      expect(userStore.skillsSearchTerm).toBe('')
    })
  })
})
