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
          <input
            class="flex-1 text-lg font-normal outline-none"
            type="text"
            id="role"
            placeholder="Software Engineer"
            v-model="role"
          />
        </div>
      </fieldset>
      <fieldset class="flex w-full flex-col gap-y-2 lg:flex-1">
        <label for="location" class="ml-4 text-base">Where?</label>
        <div
          class="flex w-full items-center gap-x-2 rounded-full border border-brand-gray-3 px-4 py-3"
        >
          <font-awesome-icon class="text-brand-gray-3" :icon="['fas', 'location-dot']" />
          <input
            class="flex-1 text-lg font-normal outline-none"
            type="text"
            id="location"
            placeholder="Los Angeles"
            v-model="location"
          />
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
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton
  },
  data() {
    return {
      role: '',
      location: ''
    }
  }
}
</script>
