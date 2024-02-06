import styled from "styled-components";
import ConfigurationTemplate from "../../components/templates/ConfigurationTemplate";

const Configuration = () => {
  return (
    <Container>
      <ConfigurationTemplate />
    </Container>
  );
};

const Container = styled.main`
  height: 100vh;
`;

export default Configuration;
