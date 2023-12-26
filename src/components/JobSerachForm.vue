<template>
  <div class="mt-16">
    <form class="flex h-12 w-full items-center gap-4">
      <fieldset>
        <label for="role">Role</label>
        <div>
          <font-awesome-icon v-bind:icon="['fas', 'search']" />
          <input type="text" id="role" placeholder="Software Engineer" />
        </div>
      </fieldset>
      <fieldset>
        <label for="location">Where?</label>
        <div>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <input type="text" id="location" placeholder="Los Angeles" />
        </div>
      </fieldset>
      <action-button btnText="Search" btnType="secondary" />
    </form>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton
  }
}
</script>
