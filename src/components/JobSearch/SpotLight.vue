<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id" class="h-full">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const spotlights = ref([])

const getSpotlights = async () => {
  const BASE_URL = import.meta.env.VITE_APP_API_URL
  const URL = `${BASE_URL}/spotlights`
  const response = await axios.get(URL)
  spotlights.value = response.data
}

onMounted(getSpotlights)
</script>
