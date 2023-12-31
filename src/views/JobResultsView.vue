<template>
  <div class="relative flex w-full flex-row flex-nowrap items-start">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'
export default {
  name: 'JobSearchView',
  components: {
    JobFiltersSidebar,
    JobListings
  }
}
</script>
