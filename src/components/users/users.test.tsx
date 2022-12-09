import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Users } from '.'
import { GlobalContext } from '../../context'
import { usersMock } from '../../services/service.test'

const mockProvider = {
  users: [],
  setUsers: jest.fn(),
  handleGetUsers: jest.fn(),
  isLoading: false,
  setIsLoading: jest.fn(),
}
test('When click on button, expect handleGetUsers to have been called', () => {
  render(
    <GlobalContext.Provider value={mockProvider}>
      <Users />
    </GlobalContext.Provider>
  )

  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(mockProvider.handleGetUsers).toHaveBeenCalled()
})

test('When loading is true expect to have loading component on screen', () => {
  const mock = {
    ...mockProvider,
    isLoading: true
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const loading = screen.getByTestId('loading-container')

  expect(loading).toBeInTheDocument()
})

test('When Users is set, expect to display users list', () => {
  const mock = {
    ...mockProvider,
    users: usersMock
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const usersContainer = screen.getByTestId('users-container')

  expect(usersContainer).toBeInTheDocument()
})
