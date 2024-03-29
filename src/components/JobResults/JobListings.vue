<template>
  <main v-if="displayedJobs.length > 0" class="ml-96 flex-auto bg-brand-gray-2 p-8">
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
  <main v-else class="flex h-[92vh] w-full items-center justify-center">
    <p class="text-center text-lg lg:ml-96">
      Oops! It seems we couldn't find any results matching your search or filter criteria.
    </p>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore } from '@/stores/jobs'
import { useDegreesStore } from '@/stores/degrees'
import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)
const degreesStore = useDegreesStore()
onMounted(degreesStore.FETCH_DEGREES)
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)

const route = useRoute()

const currentPage = computed(() => Number.parseInt((route.query.page as string) || '1'))
const lastPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10))

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, lastPage)

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})
</script>
