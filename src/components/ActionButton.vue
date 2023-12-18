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
      type: String
    },
    btnType: {
      type: String
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
  @apply hover:bg-brand-blue-3 border-0 bg-brand-blue-1 text-white shadow-blue hover:shadow-bhover;
}
.secondary {
  @apply hover:bg-brand-blue-3 rounded-full bg-brand-blue-1 py-4 text-white;
}
</style>
