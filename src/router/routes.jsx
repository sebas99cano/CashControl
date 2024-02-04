import { lazy } from "react";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/home"} /> : children;
};

const LogIn = lazy(() => import("../pages/signIn/SignIn"));
const Home = lazy(() => import("../pages/home/Home"));

export const MyRoutes = () => [
  {
    path: "/home",
    name: "home",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
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
      <PublicRoute>
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
    element: (
      <PublicRoute>
        <h1>Not Found</h1>
      </PublicRoute>
    ),
  },
];
