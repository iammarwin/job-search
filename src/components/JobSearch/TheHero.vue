<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
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
  </main>
</template>

<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSerachForm from '@/components/JobSearch/JobSerachForm.vue'
export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSerachForm
  }
}
</script>
