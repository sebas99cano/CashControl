import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { signOutFirebase } from "../../api/firebase/Auth";

const Home = () => {
  const [authState] = useContext(AuthContext);
  return (
    <Container>
      <h1>Bienvenido Home {authState.email}</h1>
      <img src={authState.picture} />
      <button onClick={signOutFirebase}>cerrar</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
