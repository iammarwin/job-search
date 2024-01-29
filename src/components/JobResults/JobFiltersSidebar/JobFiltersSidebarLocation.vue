<template>
  <div class="relative">
    <input
      v-model.trim.lazy="locationSerachTerm"
      type="text"
      class="w-full flex-1 rounded border border-gray-500 px-2 py-3 text-base font-normal outline-none focus:border-2 focus:border-brand-blue-1"
      placeholder="Which location do you prefer?"
    />
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const locationSerachTerm = computed({
  get() {
    return userStore.locationSearchTerm
  },
  set(value: string) {
    userStore.UPDATE_LOCATION_SEARCH_TERM(value)
  }
})
</script>
