import React from 'react'
import { Users } from './components'
import { GlobalProvider } from './context'
import { Container } from './styles'

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalProvider>
        <Users />
      </GlobalProvider>
    </Container>
  )
}
