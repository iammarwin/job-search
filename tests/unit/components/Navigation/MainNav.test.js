import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/Navigation/MainNav.vue'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  it('display company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Gomyco')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for navigation', () => {
    renderMainNav()
    const navMenuItems = screen.getAllByRole('listitem')
    const navMenuTexts = navMenuItems.map((item) => item.textContent)

    expect(navMenuTexts).toEqual(['Teams', 'Location', 'Benefits', 'Jobs', 'Students'])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()
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
