import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    isLoggedIn: false
  },
  action: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
})
