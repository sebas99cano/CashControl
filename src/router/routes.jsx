import { lazy } from "react";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ authState, children }) => {
  return authState.uid ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ authState, children }) => {
  return authState.uid ? <Navigate to={"/home"} /> : children;
};

const LogIn = lazy(() => import("../pages/signIn/SignIn"));
const Home = lazy(() => import("../pages/home/Home"));

export const MyRoutes = ({ authState }) => [
  {
    path: "/home",
    name: "home",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PrivateRoute authState={authState}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    name: "signIn",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PublicRoute authState={authState}>
        <LogIn />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    name: "notFound",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: <h1>Not Found</h1>,
  },
];
