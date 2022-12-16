import { render, screen } from '@testing-library/react';
import LogoutButton from '../LogoutButton';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Auth0ContextInterface, useAuth0, User } from '@auth0/auth0-react';
jest.mock('@auth0/auth0-react');
const mockUseAuth0 = useAuth0 as jest.MockedFn<typeof useAuth0>
describe('LogoutButton should', () => {
    const logoutMock = jest.fn()
    beforeEach(() => {
        mockUseAuth0.mockImplementation(() => ({
            isLoading: false,
            logout: logoutMock
        }) as unknown as Auth0ContextInterface<User>)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('call logout form useAuth0 hook when user click', async () => {
        const user = userEvent.setup();
        render(<LogoutButton />)
        const button = screen.getByRole('button', { name: 'Logout' });
        await user.click(button);
        expect(logoutMock).toBeCalled()
    })
})