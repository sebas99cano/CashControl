import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { AiOutlineApartment, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
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
    icon: <AiOutlineHome />,
    text: "Home",
    disabled: false,
    isHidden: false,
    children: null,
    element: (
      <PrivateRoute authState={authState}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/categories",
    name: "categories",
    icon: <MdOutlineAnalytics />,
    text: "Categorías",
    disabled: false,
    isHidden: false,
    children: null,
    element: (
      <PrivateRoute authState={authState}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/movements",
    name: "movements",
    icon: <AiOutlineApartment />,
    text: "Movimientos",
    disabled: false,
    isHidden: false,
    children: null,
    element: (
      <PrivateRoute authState={authState}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/informs",
    name: "informs",
    icon: <MdOutlineAnalytics />,
    text: "Informes",
    disabled: false,
    isHidden: false,
    children: null,
    element: (
      <PrivateRoute authState={authState}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    icon: <RiDashboard3Line />,
    text: "Dashboard",
    disabled: false,
    isHidden: false,
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
