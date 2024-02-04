import styled from "styled-components";
import { Icon } from "../atomos/Icon";

export const SaveButton = ({ buttonFunction, title, bgColor, icon }) => (
  <Container $bgColor={bgColor}>
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
  gap: 10px;
  background-color: initial;
  .btn {
    background: ${(props) => props.$bgColor};
    padding: 8px 16px;
    font-weight: 700;
    font-size: 18px;
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 2px 2px #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    cursor: pointer;
    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px #000;
    }
    &:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px #000;
    }
  }
`;
