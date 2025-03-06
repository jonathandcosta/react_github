import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 16px;
  max-height: 250px;
  max-width: 365px;
`

export const Butons = styled.div`
  display: flex;
  justify-content: end;
  gap: 15px;
`

export const LinkBotao = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  border-radius: 8px;
`
