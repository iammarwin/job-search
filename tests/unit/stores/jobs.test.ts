import type { Mock } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import type { Job } from '@/api/types'

import { useJobsStore } from '@/stores/jobs.js'
import { useUserStore } from '@/stores/user.js'
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
  const createJob = (job: Partial<Job>): Job => ({
    id: 1,
    title: 'Angular Developer',
    organization: 'Vue and Me',
    degree: "Master's",
    jobType: 'Intern',
    locations: ['Lisbon'],
    minimumQualifications: [
      'Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives'
    ],
    preferredQualifications: [
      'Mesh wireless metrics, syndicate innovative markets, and disintermediate intuitive niches'
    ],
    description: ['Away someone forget effect wait land.'],
    dateAdded: '2021-07-04',
    ...job
  })
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
})
