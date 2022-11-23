import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';

import { router } from './router';




export const App = () =>
(<React.StrictMode>
    <ChakraProvider resetCSS>
        <RouterProvider router={router} />
    </ChakraProvider>
</React.StrictMode>)