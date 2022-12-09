import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders search users button', () => {
  render(<App />)
  const linkElement = screen.getByText(/Buscar usuários/i)
  expect(linkElement).toBeInTheDocument()
})
