<template>
  <li>
    <router-link
      to="/jobs/results/1"
      class="shadow-gray mx-auto block rounded-md border border-solid border-brand-gray-2 bg-white"
    >
      <div class="border-b border-solid border-brand-gray-1 px-8 pb-2 pt-5">
        <h2 class="mb-2 text-xl font-medium">
          Technical Program Manager, Perception, Augmented Reality
        </h2>
        <div class="flex flex-row align-middle text-gray-500">
          <div class="mr-5">
            <span>Ark</span>
          </div>
          <div>
            <span>Casablanca, Ma</span>
          </div>
        </div>
      </div>
      <div class="px-8 pb-8 pt-4">
        <div>
          <h3 class="mb-2 mt-1 font-medium">Minimum qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Bachelor's Degree or equivalent practical experience.</li>
              <li>5 years of experience in program managemnt.</li>
              <li>
                Experience analyzing data through querying database (e.g., SQL) using speardsheet
                software, and creating statistical models.
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6">
          <router-link
            to="/jobs/results/1"
            class="rounded border border-brand-gray-1 bg-white px-4 py-2 font-medium text-brand-blue-1 hover:bg-brand-gray-2"
            >Learn more</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'JobListing'
}
</script>
