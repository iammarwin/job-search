<template>
  <div class="border-b border-solid border-brand-gray-1 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <div
        class="transit flex items-center justify-center rounded-full p-2 duration-200 ease-in-out hover:bg-slate-200"
      >
        <font-awesome-icon :icon="careIcon" class="transit h-6 w-6 duration-500 ease-in-out" />
      </div>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>It Looks like you forgot to give me a content :)</slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  header: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}

const careIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']))
</script>
