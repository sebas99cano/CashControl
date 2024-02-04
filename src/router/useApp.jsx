import { Route } from "react-router-dom";
import { MyRoutes } from "./routes";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useApp = () => {
  const [authState] = useContext(AuthContext);

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

  const routesList = getRoutes(MyRoutes({ authState }));
  return { routesList };
};

export default useApp;
