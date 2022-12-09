import React from 'react'
import { IUser } from '../../../interfaces'
import { Block, Container, Item, Title } from './styles'

interface UserItemProps {
  user: IUser
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const {
    name,
    username,
    email,
    address: {
      street
    },
    phone,
    company: {
      name: companyName
    }
  } = user
  return (
    <Container>
      <Block>
        <Item>
          <Title>Nome:</Title>
          {name}
        </Item>
        <Item>
          <Title>Email:</Title>
          {email}
        </Item>
        <Item>
          <Title>Celular:</Title>
          {phone}
        </Item>
      </Block>
      <Block>
        <Item>
          <Title>Usuário:</Title>
          {username}
        </Item>
        <Item>
          <Title>Rua:</Title>
          {street}
        </Item>
        <Item>
          <Title>Empresa:</Title>
          {companyName}
        </Item>
      </Block>
    </Container>
  )
}
