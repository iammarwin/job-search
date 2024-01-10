import { defineStore } from 'pinia'

import getJobs from '@/api/getJobs'

import { useUserStore } from '@/stores/user.js'

export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const FILTERED_JOBS_BY_ORGANIZATIONS = 'FILTERED_JOBS_BY_ORGANIZATIONS'
export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: []
  }),
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganization = new Set()
      state.jobs.forEach((job) => {
        uniqueOrganization.add(job.organization)
      })
      return uniqueOrganization
    },
    [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
      const userStore = useUserStore()
      return state.jobs.filter((job) => userStore.selectedOrganizations.includes(job.organization))
    }
  },
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs()
      this.jobs = jobs
    }
  }
})
