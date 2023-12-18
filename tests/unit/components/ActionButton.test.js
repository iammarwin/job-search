import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/ActionButton.vue'
import { expect, it } from 'vitest'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        btnText: 'Click me',
        btnType: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      name: /click me/i
    })

    expect(button).toBeInTheDocument()
  })
  it('applies one of several style to button', () => {
    render(ActionButton, {
      props: {
        btnText: 'Click me',
        btnType: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
