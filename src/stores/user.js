import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
})
