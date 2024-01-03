<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <div class="m-auto max-w-6xl">
      <ul class="flex flex-col gap-7">
        <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
      </ul>
      <div class="mt-8">
        <div class="flex flex-row flex-nowrap">
          <p class="flex-grow text-sm">Page {{ currentPage }}</p>
          <div class="flex items-center justify-center gap-6">
            <router-link
              v-if="previousPage"
              role="link"
              :to="{ name: 'JobResults', query: { page: previousPage } }"
              class="text-sm font-semibold text-brand-blue-1"
              >Previous</router-link
            >
            <router-link
              v-if="nextPage"
              role="link"
              :to="{ name: 'JobResults', query: { page: nextPage } }"
              class="text-sm font-semibold text-brand-blue-1"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    previousPage() {
      const previuousPage = this.currentPage - 1
      const firstPage = 1
      return previuousPage >= firstPage ? previuousPage : undefined
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const maxPage = Math.ceil(this.jobs.length / 10)
      return nextPage <= maxPage ? nextPage : undefined
    },
    displayedJobs() {
      const pageNumber = this.currentPage
      const firstJobIndex = (pageNumber - 1) * 10
      const lastJobIndex = pageNumber * 10
      return this.jobs.slice(firstJobIndex, lastJobIndex)
    }
  },
  async mounted() {
    const BASE_URL = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`${BASE_URL}/jobs`)
    this.jobs = response.data
  }
}
</script>
