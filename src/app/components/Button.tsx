import styled from 'styled-components'

import theme from './theme/default'

interface ButtonProps {
  background?: boolean // After change to enum design colors
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  background-color: ${props =>
    props.background ? theme.colors.primary : theme.colors.secondary};
  color: ${theme.colors.default};
  padding: ${theme.spacing.unit * 2}px ${theme.spacing.unit}px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  margin: ${theme.spacing.unit}px;
  &:hover {
    background-color: ${props =>
      props.background ? theme.colors.secondary : theme.colors.primary};
  }
`

export default Button
