import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogoutPage from '../LogoutPage'

describe('Logout Page should', () => {
    test('Show Logout Heading', async () => {
        render(<LogoutPage />)
        expect(screen.getByRole('heading')).toHaveTextContent('Logout')
    })
})