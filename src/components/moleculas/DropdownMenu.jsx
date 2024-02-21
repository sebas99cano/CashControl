import styled from "styled-components";
import DropdownMenuItem from "./DropdownMenuItem";
import { variables } from "../../styles/variables";

const DropdownMenu = ({ data, functionOnClick, top }) => {
  return (
    <Container $top={top}>
      {data.map((item) => (
        <DropdownMenuItem
          key={item.name}
          item={item}
          functionOnClick={() => functionOnClick(item)}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.$top};
  box-shadow: ${() => variables.boxShadowGray};
`;
export default DropdownMenu;
