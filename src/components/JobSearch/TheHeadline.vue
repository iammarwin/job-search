<template>
  <div>
    <h1 class="my-12 text-8xl font-bold tracking-tight">
      <span :class="['block', actionClass]">{{ action }}</span>
      for everyone
    </h1>
    <h2 class="text-2xl">Find your next job at ArkConnect.</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import nextElementInList from '@/utils/nextElementInList'

const action = ref('Build')
const interval = ref<ReturnType<typeof setInterval>>()

const actionClass = computed(() => {
  return {
    [action.value.toLowerCase()]: true
  }
})

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code']
    action.value = nextElementInList(actions, action.value)
  }, 3000)
}

onMounted(changeTitle)

onBeforeUnmount(() => clearInterval(interval.value))
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
