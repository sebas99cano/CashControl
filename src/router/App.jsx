import { Routes } from "react-router-dom";
import { Suspense } from "react";

import useApp from "./useApp";
import styled from "styled-components";
import SideBar from "../components/organismos/sidebar/SideBar";
import { Device } from "../styles/breakpoints";
import MenuHamburger from "../components/organismos/sidebar/MenuHamburger";

function App() {
  const { routesList } = useApp();

  return (
    <Container>
      <div className="contentSideBar">
        <SideBar />
      </div>
      <div className="ContentMenuHamburger">
        <MenuHamburger />
      </div>
      <ContainerBody>
        <Suspense fallback={<></>}>
          <Routes>{routesList}</Routes>
        </Suspense>
      </ContainerBody>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgTotal};
  transition: all 0.2s ease-in-out;
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
