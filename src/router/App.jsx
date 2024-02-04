import { Routes } from "react-router-dom";
import { Suspense } from "react";

import useApp from "./useApp";

function App() {
  const { routesList } = useApp();
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>{routesList}</Routes>
      </Suspense>
    </>
  );
}

export default App;
