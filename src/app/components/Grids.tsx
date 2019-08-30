import styled from 'styled-components'

interface FlexComponentProps {
  direction?: string
  justify?: string
  alignItems?: string
}

export const Flex = styled.div<FlexComponentProps>`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentButtons = styled.div`
  width: 500px;
`
