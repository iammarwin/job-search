<template>
  <div class="fixed flex h-screen w-96 flex-col border-r border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <job-filters-sidebar-prompt />

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
import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue'
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
</script>
