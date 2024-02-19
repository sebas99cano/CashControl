import { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { auth } from "../api/firebase/Auth";
import { MyRoutes } from "./routes";
import { AuthContext } from "../context/AuthContext";
import { UserThemeContext } from "../context/ThemeContext";
import UserClass from "../class/user/UserClass";
import UserService from "../api/user/UserService";

const useApp = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [, themeDispatch] = useContext(UserThemeContext);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (authState.uid === "") {
      auth.onAuthStateChanged((response) => {
        if (response?.uid) {
          getUserDetail(response, response.providerId);
        } else {
          authDispatch({
            type: "LOGOUT_USER",
          });
          setLoadingUser(false);
        }
      });
    }
  }, []);

  const getUserDetail = (credential, providerId) => {
    const userPayload = new UserClass(credential, credential.uid, providerId);
    UserService.getUserDetail(userPayload.state)
      .then((user) => {
        authDispatch({
          type: "LOGIN_USER",
          payload: user,
        });
        themeDispatch({
          type: user.themePreference,
        });
        themeDispatch({
          type: user.languagePreference,
        });
        setLoadingUser(false);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

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
  return { routesList, loadingUser };
};

export default useApp;
