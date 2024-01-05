import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import { describe } from 'vitest'

describe('CollapsibleAccordion', () => {
  it('renders child content', () => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      props: {
        header: 'My Category'
      }
    })
  })
})
