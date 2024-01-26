<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 z-10 h-16 w-full">
      <div
        class="mx-auto flex h-full flex-nowrap gap-x-8 border-b border-solid border-brand-gray-1 bg-white px-8"
      >
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl font-semibold"
          >ArkConnect</router-link
        >
        <nav class="h-full">
          <ul class="flex h-full gap-x-9 font-medium text-gray-900">
            <li
              v-for="link in navLinks"
              :key="link.label"
              class="flex h-full items-center justify-center"
            >
              <router-link :to="link.href" class="py-2.5">{{ link.label }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else btn-text="Sign In" @click="LOGIN_USER" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'

const navLinks = ref([
  { href: '/teams', label: 'Teams' },
  { href: '/', label: 'Location' },
  { href: '/', label: 'Benefits' },
  { href: '/jobs/results', label: 'Jobs' },
  { href: '/', label: 'Students' }
])

const userStore = useUserStore()
const LOGIN_USER = userStore.LOGIN_USER
const isLoggedIn = computed(() => userStore.isLoggedIn)
const headerHeightClass = computed(() => ({
  'h-16': !isLoggedIn.value,
  'h-32': isLoggedIn.value
}))
</script>
