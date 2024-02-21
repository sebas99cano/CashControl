import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { MyRoutes } from "../../../router/routes";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import SideBarCard from "./SideBarCard";
import { UserThemeContext } from "../../../context/ThemeContext";

const SideBar = ({ state, setState }) => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;
  const routesList = MyRoutes({ authState, generalDictionary });
  return (
    <Main $isOpen={state}>
      <span className="sidebarButton" onClick={() => setState(!state)}>
        {<variables.iconArrowRight />}
      </span>
      <Container $isOpen={state} className={state ? "active" : ""}>
        <div className="logoContent">
          <div className="logoImg">
            <img src={variables.logo} />
          </div>
          <h2>Cash C</h2>
        </div>

        {routesList.map(({ isHidden, path, icon, text }, index) => {
          if (isHidden) return;
          return (
            <div key={index}>
              {index === 5 && <Divider />}
              <div className={state ? "linkContainer active" : "linkContainer"}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `link${isActive ? ` active` : ``}`
                  }
                >
                  <div className="linkIcon">{icon}</div>
                  {state && <span>{text}</span>}
                </NavLink>
              </div>
            </div>
          );
        })}
        <Divider />
        {state && <SideBarCard />}
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
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }
  &.active {
    width: 200px;
  }
  .logoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    .logoImg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${({ $isOpen }) => ($isOpen ? `scale(0.9)` : `scale(1)`)}
        rotate(${(props) => props.theme.logoRotate});
      img {
        width: 100%;
        animation: floating 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ $isOpen }) => ($isOpen ? `block` : `none`)};
      margin-left: ${({ $isOpen }) => ($isOpen ? `10px` : `0px`)};
    }
    @keyframes floating {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, 0px);
      }
    }
  }
  .linkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: ${({ $isOpen }) => ($isOpen ? `start` : `center`)};
      text-decoration: none;
      padding: calc(${() => variables.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;
      .linkIcon {
        padding: ${() => variables.smSpacing} ${() => variables.smSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: ${(props) => props.theme.bg5};
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
  }
`;

const Main = styled.div`
  .sidebarButton {
    position: fixed;
    top: 60px;
    left: 45px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgTgRight};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.35s;
    z-index: 2;
    transform: ${({ $isOpen }) =>
      $isOpen ? `translateX(130px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => variables.lgSpacing} 0;
`;

export default SideBar;
