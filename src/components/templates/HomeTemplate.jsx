import styled from "styled-components";
import { signOutFirebase } from "../../api/firebase/Auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const HomeTemplate = () => {
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

export default HomeTemplate;
