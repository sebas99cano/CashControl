import styled from "styled-components";
import { Icon } from "../atomos/Icon";

export const SaveButton = ({ buttonFunction, title, bgColor, icon }) => (
  <Container bgColor={bgColor}>
    <Icon>{icon}</Icon>
    <span className="btn" onClick={buttonFunction}>
      {title}
    </span>
  </Container>
);

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  .btn {
    background-color: ${(props) => props.bgColor};
  }
`;
