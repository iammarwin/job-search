import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs.js'
import { useUserStore } from '@/stores/user.js'
import { describe, expect } from 'vitest'

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    const userStore = useUserStore()
    const $router = { push: vi.fn() }
    render(JobFiltersSidebarOrganizations, {
      global: {
        mocks: {
          $router
        },
        plugins: [pinia]
      },
      stubs: {
        FontAwesomeIcon: true
      }
    })
    return { jobsStore, userStore, $router }
  }

  it('renders unique list of organization from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarOrganizations()
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizations = organizationListItems.map((node) => node.textContent)
    expect(organizations).toEqual(['Google', 'Amazon'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates thet user has selected checkbox for organizations', async () => {
      const { jobsStore, userStore } = renderJobFiltersSidebarOrganizations()
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

      const button = screen.getByRole('button', { name: /organizations/i })
      await userEvent.click(button)

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      })
      await userEvent.click(googleCheckbox)

      expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google'])
    })

    it('navigates user to job page to see fresh batch of filtered jobs', async () => {
      const { jobsStore, $router } = renderJobFiltersSidebarOrganizations()
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

      const button = screen.getByRole('button', { name: /organizations/i })
      await userEvent.click(button)

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      })
      await userEvent.click(googleCheckbox)

      expect($router.push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
