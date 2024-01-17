<template>
  <div class="relative flex w-full flex-row flex-nowrap items-start">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script setup>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'
</script>
