import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthorizePage from '../AuthorizePage'

describe('Authorize Page should', () => {
    test('Show Authorize Heading', async () => {
        render(<AuthorizePage />)
        expect(screen.getByRole('heading')).toHaveTextContent('Authorize')
    })
})