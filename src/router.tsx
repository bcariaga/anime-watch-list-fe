import Home from 'pages/home/HomePage';
import SharedLayout from 'pages/layout/SharedLayout';
import Signup from 'pages/signup/SignupPage';
import React from 'react';
import {
    createBrowserRouter,
    Route,
    Routes
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
                path: 'signup',
                element: <Signup />,
            }
        ]

    },
    // {
    //     path: '/',
    //     element: <Home />,

    // },
    // {
    //     path: '/signup',
    //     element: <Signup />,
    // }
]);

// const RoutesMap = () => {

//     return (
//         <Routes>
//             <Route path='/' element={<SharedLayout/>}>
//                 <Route index element={<Home/>}>
//                     <Home></Home>
//                 </Route>
//             </Route>
//         </Routes>
//     )
// }