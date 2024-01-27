<template>
  <div class="flex flex-row items-center justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want do do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        btn-text="Clear Filters"
        btn-type="tertiary"
        @click="userStore.CLEAR_USER_JOB_FILTER_SELECTIONS"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '@/components/Shared/ActionButton.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>
