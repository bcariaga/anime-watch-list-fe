import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserMenu from 'components/User/UserMenu'
import { User } from '@auth0/auth0-react'
import LogoutButton from 'components/Auth/LogoutButton'
import MockComponent from 'common/test/MockComponent'
import { ThemeWrapper } from 'common/test/ThemeWrapper'
jest.mock('components/Auth/LogoutButton')
jest.mock('@auth0/auth0-react')
const LOGOUT_BUTTON_TEST_ID = 'logoutButton'
const mockLogoutButton = LogoutButton as jest.MockedFunction<typeof LogoutButton>
describe('User Menu should', () => {
    const nickname = 'bcariaga'
    const picture = 'svg-picture'
    const email = 'test@email.com'
    const userStub = { nickname, picture, email } as unknown as User
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        })
    })
    beforeEach(() => {
        jest.clearAllMocks()
        mockLogoutButton.mockImplementation(() => <MockComponent data-testid={LOGOUT_BUTTON_TEST_ID} />)
    })

    test('render correctly', () => {
        const loading = false
        const component = render(<UserMenu user={userStub} loading={loading} />, {
            wrapper: ThemeWrapper,
        })
        expect(component).toMatchSnapshot()
    })
    test('show user nickname, email, configuration and logout button', () => {
        const loading = false
        render(<UserMenu user={userStub} loading={loading} />, { wrapper: ThemeWrapper })
        const userEmailComponent = screen.queryByTestId('user-email')
        expect(screen.queryByTestId('user-avatar')).toBeInTheDocument()
        expect(userEmailComponent).toBeInTheDocument()
        expect(userEmailComponent?.textContent).toBe(email)
        expect(screen.queryByTestId('user-configuration')).toBeInTheDocument()
        expect(screen.queryByTestId(LOGOUT_BUTTON_TEST_ID)).toBeInTheDocument()
    })
})
