import React from 'react'

import {Content, Flex, ContentButtons} from './components/Grids'

import Button from './components/Button'

const App = () => (
  <Content>
    <h1>Poc initial component</h1>
    <ContentButtons>
      <Flex>
        <Button background>Submit</Button>
        <Button>Send</Button>
      </Flex>
    </ContentButtons>
  </Content>
)

export default App
