<template>
  <text-input
    v-model.trim.lazy="skillsSerachTerm"
    class="w-full rounded border border-gray-500 px-2 py-3 text-base focus:border-2 focus:border-brand-blue-1"
    placeholder="Computer programming, Finance degree, etc."
  />
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
