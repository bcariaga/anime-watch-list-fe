import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'components/Auth/AuthProvider';
import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';

import { router } from './router';




export const App = () =>
(<ChakraProvider resetCSS>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
</ChakraProvider>)