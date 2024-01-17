import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'
import { useRouter } from 'vue-router'
vi.mock('vue-router')

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs.js'
import { useUserStore } from '@/stores/user.js'
import { describe, expect } from 'vitest'

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    const userStore = useUserStore()

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    return { jobsStore, userStore }
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
      useRouter.mockReturnValue({ push: vi.fn() })
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
      const push = vi.fn()
      useRouter.mockReturnValue({ push })
      const { jobsStore } = renderJobFiltersSidebarOrganizations()
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

      const button = screen.getByRole('button', { name: /organizations/i })
      await userEvent.click(button)

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      })
      await userEvent.click(googleCheckbox)

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
