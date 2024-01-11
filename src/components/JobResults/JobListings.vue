<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <div class="m-auto max-w-[1200px]">
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
import { mapState, mapActions } from 'pinia'
import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from '@/stores/jobs'
export default {
  name: 'JobListings',
  components: {
    JobListing
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
    ...mapState(useJobsStore, {
      FILTERED_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1
        const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10)
        return nextPage <= maxPage ? nextPage : undefined
      },
      displayedJobs() {
        const pageNumber = this.currentPage
        const firstJobIndex = (pageNumber - 1) * 10
        const lastJobIndex = pageNumber * 10
        return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex)
      }
    })
  },
  async mounted() {
    this.FETCH_JOBS()
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS])
  }
}
</script>
