<template>
  <div class="rounded border border-gray-500 px-2 py-3">
    <text-input
      v-model="skillsSerachTerm"
      class="w-full text-base placeholder:text-sm"
      placeholder="Computer programming, Finance degree, etc."
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TextInput from '@/components/Shared/TextInput.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const skillsSerachTerm = computed({
  get() {
    return userStore.skillsSearchTerm
  },
  set(value: string) {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value)
  }
})
</script>
