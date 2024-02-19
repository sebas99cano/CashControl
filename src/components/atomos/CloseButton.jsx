import styled from "styled-components";
import { variables } from "../../styles/variables";

const CloseButton = ({ buttonFunction }) => {
  return (
    <Container onClick={buttonFunction}>{<variables.iconClose />}</Container>
  );
};
const Container = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${() => variables.colorSelect};
    transform: scale(1.2);
  }
`;

export default CloseButton;
