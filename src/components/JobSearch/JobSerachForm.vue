<template>
  <div class="mt-16">
    <form
      class="flex w-full flex-col gap-4 lg:w-11/12 lg:flex-row lg:items-center lg:justify-center"
    >
      <fieldset class="flex w-full flex-col gap-y-2 lg:flex-1">
        <label for="role" class="ml-4 text-base">Role</label>
        <div
          class="flex w-full items-center gap-x-2 rounded-full border border-brand-gray-3 px-4 py-3"
        >
          <font-awesome-icon class="text-brand-gray-3" v-bind:icon="['fas', 'search']" />
          <text-input placeholder="Software Engineer" id="role" v-model="role" />
        </div>
      </fieldset>
      <fieldset class="flex w-full flex-col gap-y-2 lg:flex-1">
        <label for="location" class="ml-4 text-base">Where?</label>
        <div
          class="flex w-full items-center gap-x-2 rounded-full border border-brand-gray-3 px-4 py-3"
        >
          <font-awesome-icon class="text-brand-gray-3" :icon="['fas', 'location-dot']" />
          <text-input placeholder="Los Angeles" id="location" v-model="location" />
        </div>
      </fieldset>
      <div class="lg:self-end">
        <action-button btnText="Search" btnType="secondary" class="w-full" />
      </div>
    </form>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: '',
      location: ''
    }
  }
}
</script>
