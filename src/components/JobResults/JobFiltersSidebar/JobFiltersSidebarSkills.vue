<template>
  <div class="rounded border border-gray-500 px-2 py-3">
    <text-input
      v-model="skills"
      :value="skills"
      class="w-full text-base placeholder:text-sm"
      placeholder="Computer programming, Finance degree, etc."
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextInput from '@/components/Shared/TextInput.vue'
const skills = ref('')
</script>
