import { render, screen } from '@testing-library/vue'

import { MainNav } from '@/components'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('display company name and links', () => {
    render(MainNav)
    const companyName = screen.getByText('CareerConnect')
    expect(companyName).toBeInTheDocument()
  })
})
