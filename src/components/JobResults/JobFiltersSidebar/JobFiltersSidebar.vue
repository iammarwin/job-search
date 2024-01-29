<template>
  <div
    class="fixed flex h-screen w-96 flex-col overflow-auto border-r border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <collapsible-accordion header="Locations">
        <job-filters-sidebar-location />
      </collapsible-accordion>

      <collapsible-accordion header="Degree">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Skills & Qualifications">
        <job-filters-sidebar-skills />
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
import { defineAsyncComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

const JobFiltersSidebarSkills = defineAsyncComponent(
  () => import('@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue')
)
const JobFiltersSidebarLocation = defineAsyncComponent(
  () => import('@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarLocation.vue')
)

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

const route = useRoute()
const userStore = useUserStore()

const parseSkillsSerachTerm = () => {
  const role = (route.query.role as string) || ''
  userStore.UPDATE_SKILLS_SEARCH_TERM(role)
}

const parseLocationSerachTerm = () => {
  const location = (route.query.location as string) || ''
  userStore.UPDATE_LOCATION_SEARCH_TERM(location)
}
onMounted(parseSkillsSerachTerm)
onMounted(parseLocationSerachTerm)
</script>
