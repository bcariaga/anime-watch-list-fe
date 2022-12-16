import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
/* ENV variables */
declare const AUTH0_DOMAIN: string
declare const AUTH0_CLIENTID: string
export const AuthProvider = ({ children }: { children: React.ReactNode }) => (
    <Auth0Provider
        domain={AUTH0_DOMAIN || ''}
        clientId={AUTH0_CLIENTID || ''}
        redirectUri={window.location.origin}
    >
        {children}
    </Auth0Provider>
)
