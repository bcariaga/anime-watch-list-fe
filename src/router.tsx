import Authorize from 'pages/Authorize/AuthorizePage';
import Home from 'pages/Home/HomePage';
import SharedLayout from 'pages/Layout/SharedLayout';
import Logout from 'pages/Logout/LogoutPage';
import React from 'react';
import {
    createBrowserRouter,
} from 'react-router-dom';

//  TODO: Lazy loading

export const router = createBrowserRouter([
    {
        path: '/',
        caseSensitive: false,
        element: <SharedLayout />,
        children: [
            {
                path: '',
                element: <Home />,

            },
            {
                path: '/logout',
                element: <Logout />,

            },
            {
                path: 'authorize',
                element: <Authorize />,
            }
        ]

    },
]);