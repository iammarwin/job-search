<template>
  <div class="flex w-96 flex-col border-r border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row items-center justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want do do?</h3>
        <div class="flex items-center text-sm">
          <action-button btn-text="Clear Filters" btn-type="tertiary" />
        </div>
      </div>
      <collapsible-accordion header="Degree" />
      <job-filters-sidebar-organizations />
      <job-filters-sidebar-job-types />
    </section>
  </div>
</template>

<script>
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebarJobTypes.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobTypes
  }
}
</script>
