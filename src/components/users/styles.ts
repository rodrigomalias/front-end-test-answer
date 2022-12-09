import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`

export const ButtonContainer = styled.div`
  width: 200px;
  display: grid;
`

export const Button = styled.button`
  height: 40px;
  cursor: pointer;
  background-color: #1C7CF9;
  color: #ffffff;
  border: 0px;
  border-radius: 4px;
  transition: all 250ms;
  &:hover {
    background-color: #1860CC;
  }
`

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const LoadingContainer = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
