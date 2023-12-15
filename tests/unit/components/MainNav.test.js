import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  it('display company name', () => {
    render(MainNav)
    const companyName = screen.getByText('CareerConnect')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for navigation', () => {
    render(MainNav)
    const navMenuItems = screen.getAllByRole('listitem')
    const navMenuTexts = navMenuItems.map((item) => item.textContent)

    expect(navMenuTexts).toEqual(['Teams', 'Location', 'Benefits', 'Jobs', 'Students'])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      render(MainNav)
      let profielImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profielImage).not.toBeInTheDocument()
      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profielImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profielImage).toBeInTheDocument()
    })
  })
})
