import styled from "styled-components";
import { signOutFirebase } from "../../api/firebase/Auth";
import useHome from "./useHome";

const Home = () => {
  const { authState, generalDictionary } = useHome();
  return (
    <Container>
      <h1>
        {generalDictionary.WELCOME} {authState.email}
      </h1>
      <img src={authState.picture} />
      <button onClick={signOutFirebase}>{generalDictionary.CLOSE}</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
