<template>
  <div class="fixed flex h-screen w-96 flex-col border-r border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row items-center justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want do do?</h3>
        <div class="flex items-center text-sm">
          <action-button btn-text="Clear Filters" btn-type="tertiary" />
        </div>
      </div>
      <job-filters-sidebar-checkbox-group
        header="Degree"
        :unique-values="UNIQUE_DEGREES"
        :action="userStore.ADD_SELECTED_DEGREES"
      />
      <job-filters-sidebar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { useDegreesStore } from '@/stores/degrees'

const jobsStore = useJobsStore()
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)

const degreeStore = useDegreesStore()

const UNIQUE_DEGREES = computed(() => degreeStore.UNIQUE_DEGREES)

const userStore = useUserStore()
</script>
