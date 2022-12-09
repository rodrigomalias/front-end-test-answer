import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Container, LoadingContainer, Button, Title, ButtonContainer } from './styles'
import { UserItem } from './userItem'

export const Users: React.FC = () => {
  const { users, isLoading, handleGetUsers } = useGlobalContext()

  if(isLoading) {
    return (
      <LoadingContainer data-testid='loading-container'>
        <ClipLoader
          color={'green'}
          loading={isLoading}
          size={50}
        />
      </LoadingContainer>
    )
  }

  if(users.length > 0) {
    return (
      <Container data-testid='users-container'>
        <Title>Usuários</Title>
        {users.map((item) => {
          return <UserItem key={`user-item-${item.id}`} user={item} />
        })}
      </Container>
    )
  }

  return (
    <Container>
      <Title>Nenhum usuário encontrado</Title>
      <ButtonContainer>
        <Button onClick={handleGetUsers}>
          Buscar usuários
        </Button>
      </ButtonContainer>
    </Container>
  )
}
