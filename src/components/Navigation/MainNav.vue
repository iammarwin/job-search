<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full">
      <div
        class="mx-auto flex h-full flex-nowrap gap-x-8 border-b border-solid border-brand-gray-1 bg-white px-8"
      >
        <a href="/" class="flex h-full items-center text-xl font-semibold">{{ company }}</a>
        <nav class="h-full">
          <ul class="flex h-full gap-x-9 font-medium text-gray-900">
            <li
              v-for="link in navLinks"
              :key="link.label"
              class="flex h-full items-center justify-center"
            >
              <a :href="link.href" class="py-2.5">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="loginUser" btn-text="Sign In" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      company: 'Gomyco',
      navLinks: [
        { href: '#', label: 'Teams' },
        { href: '#', label: 'Location' },
        { href: '#', label: 'Benefits' },
        { href: '#', label: 'Jobs' },
        { href: '#', label: 'Students' }
      ],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  }
}
</script>

<style></style>
