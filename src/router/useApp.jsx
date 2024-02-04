import { Route } from "react-router-dom";
import { MyRoutes } from "./routes";

const useApp = () => {
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
  return { routesList };
};

export default useApp;
