import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'
import { useRouter } from 'vue-router'
vi.mock('vue-router')
const useRouterMock = useRouter as Mock
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

describe('JobFiltersSidebarCheckboxGroup', () => {
  interface JobFiltersSidebarCheckboxGroupProps {
    uniqueValues: Set<string>
    action: Mock
  }
  const createProps = (
    props: Partial<JobFiltersSidebarCheckboxGroupProps> = {}
  ): JobFiltersSidebarCheckboxGroupProps => ({
    uniqueValues: new Set(['ValueA', 'valueB']),
    action: vi.fn(),
    ...props
  })
  const renderJobFiltersSidebarCheckboxGroup = (props: JobFiltersSidebarCheckboxGroupProps) => {
    const pinia = createTestingPinia()
    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('renders unique list of values', () => {
    const props = createProps({
      uniqueValues: new Set(['Full-time', 'Part-time'])
    })
    renderJobFiltersSidebarCheckboxGroup(props)

    const jobTypesListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypesListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(['Full-time', 'Part-time'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for job types', async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() })
      const action = vi.fn()
      const props = createProps({
        uniqueValues: new Set(['Full-time', 'Part-time']),
        action
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(action).toHaveBeenCalledWith(['Full-time'])
    })

    it('navigates user to job page to see fresh batch of filtered jobs', async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({ push })
      const props = createProps({
        uniqueValues: new Set(['Full-time'])
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
