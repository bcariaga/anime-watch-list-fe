import React from 'react';
import '@testing-library/jest-dom'
import { Auth0ContextInterface, useAuth0, User } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import UserSession from 'components/User/UserSession';
import LoginButton from 'components/Auth/LoginButton';
import UserMenu from 'components/User/UserMenu';
import MockComponent from 'common/test/MockComponent';


const USER_MENU_TEST_ID = 'userMenu';
const LOGIN_BUTTON_TEST_ID = 'loginButton';

jest.mock('@auth0/auth0-react');
jest.mock('components/User/UserMenu')
jest.mock('components/Auth/LoginButton')

const mockUserMenu = UserMenu as jest.MockedFunction<typeof UserMenu>
const mockLoginButton = LoginButton as jest.MockedFunction<typeof LoginButton>

const mockUseAuth0 = useAuth0 as jest.MockedFn<typeof useAuth0>

describe('User Session should', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        mockUserMenu.mockImplementation(() => <MockComponent data-testid={USER_MENU_TEST_ID} />)
        mockLoginButton.mockImplementation(() => <MockComponent data-testid={LOGIN_BUTTON_TEST_ID} />)
    })
    test('render UserMenu if user is authenticated', () => {
        const mockUser = {} as User;
        const isAuthenticated = true;
        const isLoading = false;

        mockUseAuth0.mockImplementation(() => ({
            user: mockUser,
            isAuthenticated,
            isLoading
        }) as unknown as Auth0ContextInterface<User>)

        render(<UserSession />)

        expect(screen.queryByTestId(USER_MENU_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(LOGIN_BUTTON_TEST_ID)).not.toBeInTheDocument();
    })

    test('render LogginButton if user is not authenticated', () => {
        const mockUser = {} as User;
        const isAuthenticated = false;
        const isLoading = false;

        mockUseAuth0.mockImplementation(() => ({
            user: mockUser,
            isAuthenticated,
            isLoading
        }) as unknown as Auth0ContextInterface<User>)

        render(<UserSession />)

        expect(screen.queryByTestId(USER_MENU_TEST_ID)).not.toBeInTheDocument();
        expect(screen.queryByTestId(LOGIN_BUTTON_TEST_ID)).toBeInTheDocument();
    })

    test('forward useAuth0 props to userMenu when user is authenticated', () => {
        const mockUser = {} as User;
        const isAuthenticated = true;
        const isLoading = false;

        mockUseAuth0.mockImplementation(() => ({
            user: mockUser,
            isAuthenticated,
            isLoading
        }) as unknown as Auth0ContextInterface<User>)

        render(<UserSession />)
        expect(mockUserMenu).toBeCalled();
        expect(mockUserMenu).toBeCalledWith(
            { 'loading': isLoading, 'user': mockUser },
            {} // React Context
        )

    })
})