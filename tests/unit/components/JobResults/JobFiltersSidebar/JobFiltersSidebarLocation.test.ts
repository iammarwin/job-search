import { render, screen } from '@testing-library/vue'
import { userEvent } from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import { useUserStore } from '@/stores/user'

import JobFiltersSidebarLocation from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarLocation.vue'

describe('JobFiltersSidebarSkillsVue', () => {
  const renderJobFiltersSidebarSkills = () => {
    const pinia = createTestingPinia()
    const userStore = useUserStore()

    render(JobFiltersSidebarLocation, {
      global: {
        plugins: [pinia]
      }
    })
    return { userStore }
  }

  it('populates search input from store', async () => {
    const { userStore } = renderJobFiltersSidebarSkills()
    userStore.locationSearchTerm = 'Programmer'
    const input = await screen.findByRole<HTMLInputElement>('textbox')
    expect(input.value).toBe('Programmer')
  })

  it('writes user input to store', async () => {
    const { userStore } = renderJobFiltersSidebarSkills()
    userStore.locationSearchTerm = ''
    const input = screen.getByRole<HTMLInputElement>('textbox')
    await userEvent.type(input, 'London')
    await userEvent.click(document.body)

    expect(userStore.UPDATE_LOCATION_SEARCH_TERM).toHaveBeenCalledWith('London')
  })

  it('it removes whitespace from user input', async () => {
    const { userStore } = renderJobFiltersSidebarSkills()
    userStore.locationSearchTerm = ''
    const input = screen.getByRole<HTMLInputElement>('textbox')
    await userEvent.type(input, '  London UK  ')
    await userEvent.click(document.body)

    expect(userStore.UPDATE_LOCATION_SEARCH_TERM).toHaveBeenCalledWith('London UK')
  })
})
