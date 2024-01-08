<template>
  <ul>
    <li v-for="spotlight in spotLights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

axios
export default {
  name: 'SpotLight',
  data() {
    return {
      spotLights: []
    }
  },
  async mounted() {
    const BASE_URL = import.meta.env.VITE_APP_API_URL
    const URL = `${BASE_URL}/spotlights`
    const response = await axios.get(URL)
    this.spotLights = response.data
  }
}
</script>
