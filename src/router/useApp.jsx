import { useContext, useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { auth } from "../api/firebase/Auth";
import { MyRoutes } from "./routes";
import { AuthContext } from "../context/AuthContext";
import { UserThemeContext } from "../context/ThemeContext";
import UserClass from "../class/user/UserClass";
import UserService from "../api/user/UserService";
import ReactGA from "react-ga";
const useApp = () => {
  ReactGA.initialize("G-3QFSTMT461");

  const [authState, authDispatch] = useContext(AuthContext);
  const [themeState, themeDispatch] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;
  const [loadingUser, setLoadingUser] = useState(true);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const { pathname } = useLocation();

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

  const routesList = getRoutes(MyRoutes({ authState, generalDictionary }));
  return { routesList, loadingUser, isOpenSideBar, pathname, setIsOpenSideBar };
};

export default useApp;
