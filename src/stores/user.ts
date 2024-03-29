import { ref } from 'vue'
import { defineStore } from 'pinia'

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES'
export const ADD_SELECTED_DEGREES = 'ADD_SELECTED_DEGREES'
export const CLEAR_USER_JOB_FILTER_SELECTIONS = 'CLEAR_USER_JOB_FILTER_SELECTIONS'

// export interface UserState {
//   isLoggedIn: boolean
//   selectedOrganizations: string[]
//   selectedJobTypes: string[]
//   selectedDegrees: string[]
// }

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const selectedOrganizations = ref<string[]>([])
  const selectedJobTypes = ref<string[]>([])
  const selectedDegrees = ref<string[]>([])
  const skillsSearchTerm = ref<string>('')
  const locationSearchTerm = ref<string>('')

  const LOGIN_USER = () => {
    isLoggedIn.value = true
  }

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations
  }
  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes
  }
  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees
  }
  const UPDATE_SKILLS_SEARCH_TERM = (skills: string) => {
    skillsSearchTerm.value = skills
  }
  const UPDATE_LOCATION_SEARCH_TERM = (location: string) => {
    locationSearchTerm.value = location
  }
  const CLEAR_USER_JOB_FILTER_SELECTIONS = () => {
    selectedOrganizations.value = []
    selectedJobTypes.value = []
    selectedDegrees.value = []
    skillsSearchTerm.value = ''
    locationSearchTerm.value = ''
  }
  return {
    isLoggedIn,
    selectedOrganizations,
    selectedJobTypes,
    selectedDegrees,
    skillsSearchTerm,
    locationSearchTerm,
    LOGIN_USER,
    ADD_SELECTED_ORGANIZATIONS,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREES,
    UPDATE_SKILLS_SEARCH_TERM,
    UPDATE_LOCATION_SEARCH_TERM,
    CLEAR_USER_JOB_FILTER_SELECTIONS
  }
})

// export const useUserStore = defineStore('user', {
//   state: (): UserState => ({
//     isLoggedIn: false,
//     selectedOrganizations: [],
//     selectedJobTypes: [],
//     selectedDegrees: []
//   }),
//   actions: {
//     loginUser() {
//       this.isLoggedIn = true
//     },
//     [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
//       this.selectedOrganizations = organizations
//     },
//     [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
//       this.selectedJobTypes = jobTypes
//     },
//     [ADD_SELECTED_DEGREES](degrees: string[]) {
//       this.selectedDegrees = degrees
//     },
//     [CLEAR_USER_JOB_FILTER_SELECTIONS]() {
//       this.selectedOrganizations = []
//       this.selectedJobTypes = []
//       this.selectedDegrees = []
//     }
//   }
// })
