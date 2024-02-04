import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { MyRoutes } from "../../../router/routes";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const SideBar = () => {
  const [authState] = useContext(AuthContext);
  const routesList = MyRoutes({ authState });
  return (
    <Main>
      <Container>
        <div className="logoContent">
          <div className="logoImg">
            <img src={variables.logo} />
          </div>
          <h2>CashControl</h2>
        </div>

        {routesList.map(({ isHidden, path, name, icon, text }) => {
          if (isHidden) return;
          return (
            <NavLink to={path} key={name}>
              <div className="linkIcon">{icon}</div>
              <span>{text}</span>
            </NavLink>
          );
        })}
        <Divider />
      </Container>
    </Main>
  );
};
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Main = styled.div``;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => variables.lgSpacing} 0;
`;

export default SideBar;
