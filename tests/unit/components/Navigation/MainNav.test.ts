import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'
import { useRoute } from 'vue-router'
vi.mock('vue-router')

import MainNav from '@/components/Navigation/MainNav.vue'
import { useUserStore } from '@/stores/user'
import { RouterLinkStub } from '@vue/test-utils'

const getRouterMock = useRoute as Mock

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia()
    getRouterMock.mockReturnValue({ name: 'Home' })

    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('display company name', () => {
    renderMainNav()
    const companyName = screen.getByText('ArkConnect')
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
      const userStore = useUserStore()
      let profielImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profielImage).not.toBeInTheDocument()
      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)
      profielImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profielImage).toBeInTheDocument()
    })
  })
})
