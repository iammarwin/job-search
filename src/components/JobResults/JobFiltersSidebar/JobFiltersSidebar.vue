<template>
  <div class="fixed flex h-screen w-96 flex-col border-r border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row items-center justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want do do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            btn-text="Clear Filters"
            btn-type="tertiary"
            @click="userStore.CLEAR_USER_JOB_FILTER_SELECTIONS"
          />
        </div>
      </div>
      <collapsible-accordion header="Degree">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>
      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>
      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
const JobFiltersSidebarDegrees = defineAsyncComponent(
  () => import('@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue')
)

const JobFiltersSidebarJobTypes = defineAsyncComponent(
  () => import('@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue')
)
const JobFiltersSidebarOrganizations = defineAsyncComponent(
  () => import('@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue')
)

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>
