import { render, screen } from '@testing-library/react';
import LoginButton from '../LoginButton';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Auth0ContextInterface, useAuth0, User } from '@auth0/auth0-react';
jest.mock('@auth0/auth0-react');
const mockUseAuth0 = useAuth0 as jest.MockedFn<typeof useAuth0>
describe('LogingButton should', () => {
    const loginWithRedirectMock = jest.fn()
    test('render login button', () => {
        render(<LoginButton />)
        expect(screen.queryByTestId('login-button')).toBeInTheDocument();
    });
    beforeEach(() => {
        mockUseAuth0.mockImplementation(() => ({
            isLoading: false,
            loginWithRedirect: loginWithRedirectMock
        }) as unknown as Auth0ContextInterface<User>)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('use loginWithRedirect from auth0 hook when user click the button', async () => {
        const user = userEvent.setup();
        render(<LoginButton />);
        const button = screen.getByRole('button', { name: 'Login' });
        await user.click(button);
        expect(loginWithRedirectMock).toBeCalled()

    })
})