import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs.js'

describe('JobFiltersSidebarOrganizations', () => {
  it('renders unique list of organization from jobs', async () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia]
      },
      stubs: {
        FontAwesomeIcon: true
      }
    })

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationsListItems = screen.getAllByRole('listitem')
    const organizations = organizationsListItems.map((node) => node.textContent)

    expect(organizations).toEqual(['Google', 'Amazon'])
  })
})
