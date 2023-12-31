<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <div class="m-auto max-w-6xl">
      <ul class="flex flex-col gap-7">
        <job-listing />
        <job-listing />
        <job-listing />
      </ul>
    </div>
  </main>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  }
}
</script>
