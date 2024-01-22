<template>
  <img :src="imageLink" alt="user profile image" class="h-9 w-9 rounded-3xl object-contain" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imageLink = ref(
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
)
</script>
