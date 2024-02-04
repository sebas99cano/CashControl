import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { MyRoutes } from "./routes";

function App() {
  const getRoutes = (routes) => {
    return routes.map((route) => {
      if (route.children && route.children.length > 0) {
        return route.children.map((children) => (
          <Route
            path={children.path}
            element={children.element}
            key={route.name}
          />
        ));
      } else {
        return (
          <Route path={route.path} element={route.element} key={route.name} />
        );
      }
    });
  };

  const routesList = getRoutes(MyRoutes());

  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>{routesList}</Routes>
      </Suspense>
    </>
  );
}

export default App;
