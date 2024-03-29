import type { Mock } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { createJob } from '../../utils/createJob'

import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { describe, expect } from 'vitest'

vi.mock('axios')
const axiosGetMock = axios.get as Mock
describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('FETCH_JOBS', () => {
    it('makes API request and stores recieved jobs', async () => {
      axiosGetMock.mockResolvedValue({ data: ['Job 1', 'Job 2'] })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(['Job 1', 'Job 2'])
    })
  })
})

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ organization: 'Google' }),
        createJob({ organization: 'Amazon' }),
        createJob({ organization: 'Google' })
      ]

      const result = store.UNIQUE_ORGANIZATIONS
      expect(result).toEqual(new Set(['Google', 'Amazon']))
    })
  })

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ jobType: 'Full-time' }),
        createJob({ jobType: 'Part-time' }),
        createJob({ jobType: 'Full-time' })
      ]

      const result = store.UNIQUE_JOB_TYPES
      expect(result).toEqual(new Set(['Full-time', 'Part-time']))
    })
  })

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = []
        const jobsStore = useJobsStore()
        const job = createJob({ organization: 'Google' })

        const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })
    describe('when the user has selected organizations', () => {
      it('identifies if job is associated with given organizations', () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = ['Google', 'Microsoft']
        const jobsStore = useJobsStore()
        const job = createJob({ organization: 'Google' })

        const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })
  })

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = []
        const jobsStore = useJobsStore()
        const job = createJob({ jobType: 'Full-time' })

        const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })
    describe('when the user has selected any job types', () => {
      it('identifies if job is associated with given job types', () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = ['Full-time', 'Part-time']
        const jobsStore = useJobsStore()
        const job = createJob({ jobType: 'Part-time' })

        const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })
  })

  describe('INCLUDE_JOB_BY_DEGREE', () => {
    describe('when the user has not selected any degrees', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedDegrees = []
        const jobsStore = useJobsStore()
        const job = createJob({ degree: "Master's" })

        const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job)

        expect(result).toBe(true)
      })
    })

    describe('when the user has selected any degrees', () => {
      it('identifies if job is associated with given degrees', () => {
        const userStore = useUserStore()
        userStore.selectedDegrees = ["Master's"]
        const jobsStore = useJobsStore()
        const job = createJob({ degree: "Master's" })

        const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job)

        expect(result).toBe(true)
      })
    })
  })

  describe('INCLUDE_JOB_BY_SKILL', () => {
    it("identifies if job matches user's skills", () => {
      const userStore = useUserStore()
      userStore.skillsSearchTerm = 'Vue Developer'
      const jobsStore = useJobsStore()
      const job = createJob({ title: 'Vue Developer' })

      const result = jobsStore.INCLUDE_JOB_BY_SKILL(job)

      expect(result).toBe(true)
    })

    it('handles inconsistent character casing', () => {
      const userStore = useUserStore()
      userStore.skillsSearchTerm = 'vue'
      const jobsStore = useJobsStore()
      const job = createJob({ title: 'Vue Developer' })

      const result = jobsStore.INCLUDE_JOB_BY_SKILL(job)

      expect(result).toBe(true)
    })

    describe('when the user has not eneterd any skill', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.skillsSearchTerm = ''
        const jobsStore = useJobsStore()
        const job = createJob({ title: 'Vue Developer' })

        const result = jobsStore.INCLUDE_JOB_BY_SKILL(job)

        expect(result).toBe(true)
      })
    })
  })

  describe('INCLUDE_JOB_BY_LOCATION', () => {
    it("identifies if job matches user's location", () => {
      const userStore = useUserStore()
      userStore.locationSearchTerm = 'Londond UK'
      const jobsStore = useJobsStore()
      const job = createJob({ locations: ['Londond UK'] })

      const result = jobsStore.INCLUDE_JOB_BY_LOCATION(job)

      expect(result).toBe(true)
    })

    it('handles inconsistent character casing', () => {
      const userStore = useUserStore()
      userStore.locationSearchTerm = 'londond uK'
      const jobsStore = useJobsStore()
      const job = createJob({ locations: ['Londond UK'] })

      const result = jobsStore.INCLUDE_JOB_BY_LOCATION(job)

      expect(result).toBe(true)
    })

    describe('when the user has not eneterd any location', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.locationSearchTerm = ''
        const jobsStore = useJobsStore()
        const job = createJob({ locations: ['Londond UK'] })

        const result = jobsStore.INCLUDE_JOB_BY_LOCATION(job)

        expect(result).toBe(true)
      })
    })
  })
})
