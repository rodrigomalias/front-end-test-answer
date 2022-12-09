import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex: 1;
  margin: 16px;
  border: 1px solid #000000;
  border-radius: 4px;

  @media (max-width: 1023px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    display: grid;
    justify-content: center;
  }
`

export const Block = styled.div`
  margin-left: 16px;
  flex: 1;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

export const Title = styled.p`
  font-weight: bold;
  margin: 0px 4px;
`
