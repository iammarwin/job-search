import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import type { Job } from '@/api/types'
import JobListing from '@/components/JobResults/JobListing.vue'

import { createJob } from '../../../utils/createJob'

describe('JobListing', () => {
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...job
        }
      }
    })
  }
  it('renders job title', () => {
    const jobProps = createJob({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Developer')).toBeInTheDocument()
  })
  it('renders job organization', () => {
    const jobProps = createJob({ organization: 'ArkConnect' })
    renderJobListing(jobProps)
    expect(screen.getByText('ArkConnect')).toBeInTheDocument()
  })

  it('renders job location', () => {
    const jobProps = createJob({ locations: ['Casablaca', 'Marrakesh'] })
    renderJobListing(jobProps)
    expect(screen.getByText('Casablaca')).toBeInTheDocument()
    expect(screen.getByText('Marrakesh')).toBeInTheDocument()
  })
  it('renders job qualification', () => {
    const jobProps = createJob({ minimumQualifications: ['Code', 'Develop'] })
    renderJobListing(jobProps)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Develop')).toBeInTheDocument()
  })
})
