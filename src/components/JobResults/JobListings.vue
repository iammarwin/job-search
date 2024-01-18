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

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore } from '@/stores/jobs'
import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages.js'

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)

const route = useRoute()

const currentPage = computed(() => Number.parseInt(route.query.page || '1'))
const lastPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10))

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, lastPage)

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})
</script>
