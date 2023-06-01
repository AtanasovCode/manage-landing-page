import { useState } from 'react'
import Nav from './components/Nav'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Nav />
    </Container>
  )
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  padding: 45px 125px;
`;
