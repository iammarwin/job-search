<template>
  <div class="border-b border-solid border-brand-gray-1 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" @click="open">
      <h3 class="text-base font-semibold">Organizations</h3>
      <div
        class="transit flex items-center justify-center rounded-full p-2 duration-200 ease-in-out hover:bg-slate-200"
      >
        <font-awesome-icon :icon="careIcone" class="transit h-6 w-6 duration-500 ease-in-out" />
      </div>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleAccordion',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    careIcone() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
