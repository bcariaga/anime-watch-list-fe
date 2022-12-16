import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from 'components/Auth/LoginButton';
import UserMenu from 'components/User/UserMenu';

const UserSession = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        isAuthenticated ? <UserMenu user={user} loading={isLoading} /> : <LoginButton />
    )
}

export default UserSession