import Map from "./Map";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyles";
import "@fontsource/poppins";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Map />
    </Container>
  );
}

export default App;
