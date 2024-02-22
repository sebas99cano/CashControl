import styled from "styled-components";

const AddButton = ({ bgColor, textColor, icon, functionAddButton }) => {
  return (
    <Container
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={functionAddButton}
    >
      <span>{icon}</span>
    </Container>
  );
};

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  border-color: ${(props) => props.$textColor};
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
    span {
      transform: scale(1.3);
    }
  }
`;

export default AddButton;
