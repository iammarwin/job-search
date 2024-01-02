import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (props = {}) => ({
    title: 'Vue Programmer',
    organization: 'Apple',
    ...props
  })
  const renderJobListing = (Jobprops) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...Jobprops
        }
      }
    })
  }
  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Developer')).toBeInTheDocument()
  })
  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'ArkConnect' })
    renderJobListing(jobProps)
    expect(screen.getByText('ArkConnect')).toBeInTheDocument()
  })

  it('renders job location', () => {
    const jobProps = createJobProps({ locations: ['Casablaca', 'Marrakesh'] })
    renderJobListing(jobProps)
    expect(screen.getByText('Casablaca')).toBeInTheDocument()
    expect(screen.getByText('Marrakesh')).toBeInTheDocument()
  })
  it('renders job qualification', () => {
    const jobProps = createJobProps({ minimumQualifications: ['Code', 'Develop'] })
    renderJobListing(jobProps)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Develop')).toBeInTheDocument()
  })
})
