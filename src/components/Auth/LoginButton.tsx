import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Skeleton } from '@chakra-ui/react';

const LoginButton = () => {
    const { loginWithRedirect, isLoading } = useAuth0();

    return <Skeleton isLoaded={!isLoading}>
        <Button data-testid='login-button' onClick={() => loginWithRedirect()}>Login</Button>
    </Skeleton>;
};

export default LoginButton;