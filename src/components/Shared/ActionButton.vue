<template>
  <button :class="btnClass">{{ btnText }}</button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  btnText: {
    type: String,
    required: true
  },
  btnType: {
    type: String,
    required: false,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary', 'tertiary'].includes(value)
    }
  }
})

const { btnType } = toRefs(props)

const btnClass = computed(() => {
  return { [btnType.value]: true }
})
</script>

<style scoped>
button {
  @apply rounded px-6 py-2 font-medium transition duration-200 ease-in-out;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white shadow-blue hover:bg-brand-blue-3 hover:shadow-bhover;
}
.secondary {
  @apply rounded-full bg-brand-blue-1 py-4 text-white hover:bg-brand-blue-3;
}

.tertiary {
  @apply px-2 py-2 text-sm font-semibold text-brand-blue-1 hover:bg-brand-gray-2;
}
</style>
