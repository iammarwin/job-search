<template>
  <main class="flex h-screen flex-col">
    <section class="pb-20 pt-10">
      <div class="grid px-4 lg:grid-cols-12">
        <div class="col-span-6 col-start-2">
          <the-headline />
          <job-serach-form />
        </div>
        <div class="col-span-5 col-start-8 self-center justify-self-center">
          <img
            src="../../assets/images/Vue.js_Logo_2.svg.png"
            alt=""
            class="h-80 w-80 object-contain"
          />
        </div>
      </div>
    </section>
    <spot-light class="mt-12 flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <div class="h-full">
          <router-link
            to="jobs/results"
            class="mx-5 flex h-full w-72 flex-col overflow-hidden rounded-lg border bg-brand-gray-2 transition duration-200 ease-in-out hover:scale-105"
          >
            <img :src="slotProps.img" :alt="slotProps.title" class="object-contain" />
            <div class="mt-3 px-6 pb-6 pt-2">
              <h3 class="text-lg font-medium">
                {{ slotProps.title }}
              </h3>
              <p class="mt-3 text-sm">{{ slotProps.description }}</p>
            </div>
          </router-link>
        </div>
      </template>
    </spot-light>
  </main>
</template>

<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSerachForm from '@/components/JobSearch/JobSearchForm.vue'
import SpotLight from '@/components/JobSearch/SpotLight.vue'
export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSerachForm,
    SpotLight
  }
}
</script>
