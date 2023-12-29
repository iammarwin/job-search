<template>
  <input
    type="text"
    :value="modelValue"
    autocomplete="off"
    class="flex-1 text-lg font-normal outline-none"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>
