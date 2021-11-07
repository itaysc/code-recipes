import React from 'react';
import styled from 'styled-components';
import Router from '../Router';
import theme from '../theme';
import { NavBar } from '../components';
import {NavBarProvider} from '../components/navBar/useNavBarContext';
function App() {
  return (
    <Container>
      <NavBarProvider>
        <NavBar/>
        <Router/>
      </NavBarProvider>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.ghost}
`;

export default App;
