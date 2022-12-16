import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { As, Button, ThemingProps } from '@chakra-ui/react';

interface LogoutButtonProps extends ThemingProps<'Button'> {
    as?: As
}
const LogoutButton = ({ as, ...rest }: LogoutButtonProps) => {
    const { logout } = useAuth0();

    return (<Button
        as={as}
        colorScheme='red'
        onClick={() => logout({ returnTo: 'https://localhost:8080/logout' })}
        {...rest}>
        Logout
    </Button>);
};

export default LogoutButton;