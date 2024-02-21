import styled from "styled-components";
import { Icon } from "../atomos/Icon";

const DropdownMenuItem = ({ item, functionOnClick }) => {
  return (
    <Container onClick={functionOnClick}>
      <Icon className="iconDropdown">{item.icon}</Icon>
      <span>{item.text}</span>
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }
  svg {
    font-size: 24px;
    display: block;
  }
`;
export default DropdownMenuItem;
