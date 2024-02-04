import styled from "styled-components";
import { SaveButton } from "../moleculas/SaveButton";

const SignInTemplate = () => {
  return (
    <Container>
      <span>version1.0</span>
      <div>
        <img />
      </div>
      <Title></Title>
      <ContainerBtn>
        <SaveButton />
      </ContainerBtn>
    </Container>
  );
};

const Container = styled.div``;
const ContainerBtn = styled.div``;
const Title = styled.div``;

export default SignInTemplate;
