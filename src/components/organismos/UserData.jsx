import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import CircularButton from "../moleculas/CircularButton";
import { variables } from "../../styles/variables";
import DropdownMenu from "../moleculas/DropdownMenu";
import { MyRoutes } from "../../router/routes";
import { useNavigate } from "react-router-dom";

const UserData = ({ dropdownConfig }) => {
  const [authState] = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownMenuOptions = MyRoutes({ authState }).filter(
    (item) => item.isDropdownMenu
  );
  const functionOnClick = (path) => navigate(path);
  return (
    <Container onClick={dropdownConfig.setIsOpenDropdown}>
      <div className="imageContainer">
        <img src={authState.photoURL} />
      </div>

      <CircularButton
        icon={<variables.iconCrown />}
        width={"25px"}
        height={"25px"}
        bgColor={"#fff"}
        textColor={"#000"}
        fontSize={"12px"}
        translateX={"-50px"}
        translateY={"-12px"}
      />
      <span className="userName">{authState.name}</span>
      {dropdownConfig.isOpenDropdown && (
        <DropdownMenu
          data={dropdownMenuOptions}
          functionOnClick={(path) => functionOnClick(path)}
          top={"61px"}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imageContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .userName {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
export default UserData;
