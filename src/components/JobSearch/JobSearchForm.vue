<template>
  <div class="mt-16">
    <form
      class="flex w-full flex-col gap-4 lg:w-11/12 lg:flex-row lg:items-center lg:justify-center"
      @submit.prevent="searchForJobs"
    >
      <fieldset class="flex w-full flex-col gap-y-2 lg:flex-1">
        <label for="role" class="ml-4 text-base">Role</label>
        <div
          class="flex w-full items-center gap-x-2 rounded-full border border-brand-gray-3 px-4 py-3"
        >
          <font-awesome-icon :icon="['fas', 'search']" class="text-brand-gray-3" />
          <text-input id="role" v-model="role" placeholder="Software Engineer" />
        </div>
      </fieldset>
      <fieldset class="flex w-full flex-col gap-y-2 lg:flex-1">
        <label for="location" class="ml-4 text-base">Where?</label>
        <div
          class="flex w-full items-center gap-x-2 rounded-full border border-brand-gray-3 px-4 py-3"
        >
          <font-awesome-icon class="text-brand-gray-3" :icon="['fas', 'location-dot']" />
          <text-input id="location" v-model="location" placeholder="Los Angeles" />
        </div>
      </fieldset>
      <div class="lg:self-end">
        <action-button btn-text="Search" btn-type="secondary" class="w-full" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'

const router = useRouter()
const role = ref('')
const location = ref('')

const searchForJobs = () => {
  router.push({ name: 'JobResults', query: { role: role.value, location: location.value } })
}
</script>
