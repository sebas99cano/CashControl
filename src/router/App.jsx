import { Routes, useLocation } from "react-router-dom";
import { Suspense, useState } from "react";

import useApp from "./useApp";
import styled from "styled-components";
import SideBar from "../components/organismos/sidebar/SideBar";
import { Device } from "../styles/breakpoints";
import MenuHamburger from "../components/organismos/sidebar/MenuHamburger";

function App() {
  const { routesList, loadingUser } = useApp();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const { pathname } = useLocation();
  if (loadingUser) {
    return <h1>Cargando</h1>;
  }
  return (
    <>
      {pathname != "/signIn" ? (
        <Container className={isOpenSideBar ? "active" : ""}>
          <div className="contentSideBar">
            <SideBar state={isOpenSideBar} setState={setIsOpenSideBar} />
          </div>
          <div className="ContentMenuHamburger">
            <MenuHamburger />
          </div>
          <ContainerBody>
            <Suspense
              fallback={<div style={{ background: "red" }}>cargando</div>}
            >
              <Routes>{routesList}</Routes>
            </Suspense>
          </ContainerBody>
        </Container>
      ) : (
        <Routes>{routesList}</Routes>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgTotal};
  transition: all 0.3s ease-in-out;
  .contentSideBar {
    display: none;
  }
  .ContentMenuHamburger {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 200px 1fr;
    }
    .contentSideBar {
      display: block;
    }
    .ContentMenuHamburger {
      display: none;
    }
  }
`;

const ContainerBody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
