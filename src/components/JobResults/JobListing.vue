<script>
export default {
  name: 'JobListing',
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <li>
    <router-link
      :to="{ name: 'JobListing', params: { id: job.id } }"
      class="mx-auto block rounded-md border border-solid border-brand-gray-2 bg-white shadow-gray"
    >
      <div class="border-b border-solid border-brand-gray-1 px-8 pb-2 pt-5">
        <h2 class="mb-2 text-xl font-medium">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul class="text-gray-500">
              <li v-for="location in job.locations" :key="location" class="mr-4 inline-block">
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 pb-8 pt-4">
        <div>
          <h3 class="mb-2 mt-1 font-medium">Minimum qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6">
          <router-link
            :to="{ name: 'JobListing', params: { id: job.id } }"
            class="rounded border border-brand-gray-1 bg-white px-4 py-2 font-medium text-brand-blue-1 hover:bg-brand-gray-2"
            >Learn more</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>
