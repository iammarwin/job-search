<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <div class="m-auto max-w-6xl">
      <ul class="flex flex-col gap-7">
        <job-listing v-for="job in jobs" :key="job.id" :job="job" />
      </ul>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs/')
    this.jobs = await response.data
  }
}
</script>
