import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import CloseButton from "../atomos/CloseButton";

const GenericList = ({ data, setState, genericListFunction }) => {
  const selectOption = (option) => {
    genericListFunction(option);
    setState();
  };
  return (
    <Container>
      <section className="contentClose">
        <CloseButton buttonFunction={setState} />
      </section>
      <section className="contentItems">
        {data.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => selectOption(item)}>
              {item?.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  top: 105%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
`;
const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgTotal};
  }
`;

export default GenericList;
