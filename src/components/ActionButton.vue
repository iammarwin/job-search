<template>
  <button :class="btnClass">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  data() {
    return {
      primary: true
    }
  },
  props: {
    btnText: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  computed: {
    btnClass() {
      return { [this.btnType]: true }
    }
  }
}
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
</style>
