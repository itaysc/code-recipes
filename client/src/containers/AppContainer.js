
import styled from 'styled-components';
import Router from '../Router';
import theme from '../theme';
import { NavBar } from '../components';


function App() {
  return (
    <Container>
      <NavBar/>
      <Router/>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.mineShaft}
`;

export default App;
