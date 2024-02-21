import styled from "styled-components";
import { variables } from "../../styles/variables";

const DropdownButton = ({
  name,
  textColor,
  bgColor,
  functionDropdownButton,
}) => {
  return (
    <Container
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={functionDropdownButton}
    >
      <span className="containerText">
        {<variables.iconArrowDown />}
        <h6>{name}</h6>
      </span>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-weight: 500;
  font-size: 22px;
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
`;
export default DropdownButton;
