<template>
  <div>
    <h1 class="my-12 text-8xl font-bold tracking-tight">
      <span :class="['block', actionClass]">{{ action }}</span>
      for everyone
    </h1>
    <h2 class="text-2xl">Find your next job at ArkConnect.</h2>
  </div>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList.js'
export default {
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
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
