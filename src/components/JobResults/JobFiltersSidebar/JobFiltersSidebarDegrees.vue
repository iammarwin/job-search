<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

import { useUserStore } from '@/stores/user'
import { useDegreesStore } from '@/stores/degrees'

const degreeStore = useDegreesStore()
const UNIQUE_DEGREES = computed(() => degreeStore.UNIQUE_DEGREES)

const userStore = useUserStore()
</script>
