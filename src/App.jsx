import { useState } from 'react';
import Nav from './components/Nav';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = {
    brightRed: "hsl(12, 88%, 59%)",
    darkBlue: "hsl(228, 39%, 23%)",
    darkGrayBlue: "hsl(227, 12%, 61%)",
    darkBlue: "hsl(233, 12%, 13%)",
    paleRed: "hsl(13, 100%, 96%)",
    lightGray: "hsl(0, 0%, 98%)"
  }

  const [navOpen, setNavOpen] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <Container>
        { navOpen && <NavTint /> }
        <Nav 
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App;


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;

const NavTint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.7)
  );
`;