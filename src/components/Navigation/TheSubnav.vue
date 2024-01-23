<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage" class="flex items-center gap-3">
        <font-awesome-icon :icon="['fas', 'search']" />
        <p class="text-lg">
          <span class="font-semibold text-brand-green-1">
            {{ FILTERED_JOBS.length }}
          </span>
          jobs matched
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useJobsStore } from '@/stores/jobs'

const route = useRoute()
const onJobResultsPage = computed(() => route.name === 'JobResults')

const jobStore = useJobsStore()
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS)
</script>
