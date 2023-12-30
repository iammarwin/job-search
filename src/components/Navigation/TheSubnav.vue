<script>
export default {
  name: 'TheSubnav',
  computed: {
    onJobResultsPage() {
      return this.$route.name === 'JobResults'
    }
  }
}
</script>

<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div class="flex items-center gap-3" v-if="onJobResultsPage">
        <font-awesome-icon v-bind:icon="['fas', 'search']" />
        <p class="text-lg">
          <span class="font-semibold text-brand-green-1">1426</span> jobs matched
        </p>
      </div>
    </div>
  </div>
</template>
