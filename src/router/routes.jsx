import { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdExitToApp, MdOutlineAnalytics } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { TbPig } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
export const PrivateRoute = ({ authState, children }) => {
  return authState.uid ? children : <Navigate to={"/signIn"} />;
};
export const PublicRoute = ({ authState, children }) => {
  return authState.uid ? <Navigate to={"/"} /> : children;
};

const LogIn = lazy(() => import("../pages/signIn/SignIn"));
const Home = lazy(() => import("../pages/home/Home"));
const Configuration = lazy(() =>
  import("../pages/configuration/Configuration")
);
export const MyRoutes = ({ authState }) => [
  {
    path: "/",
    name: "home",
    icon: <AiOutlineHome />,
    text: "Home",
    disabled: false,
    isHidden: false,
    children: null,
    isDropdownMenu: false,
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
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Categorías</h1>
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
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Movimientos</h1>
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
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Informes</h1>
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
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Dashboard</h1>
      </PrivateRoute>
    ),
  },
  {
    path: "/config",
    name: "configuration",
    icon: <AiOutlineSetting />,
    text: "Configuración",
    disabled: false,
    isHidden: false,
    children: null,
    isDropdownMenu: true,
    element: (
      <PrivateRoute authState={authState}>
        <Configuration />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    name: "profile",
    icon: <BiUserCircle />,
    text: "Perfil",
    disabled: false,
    isHidden: true,
    children: null,
    isDropdownMenu: true,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Perfil</h1>
      </PrivateRoute>
    ),
  },
  {
    path: "/signOut",
    name: "signOut",
    icon: <MdExitToApp />,
    text: "Cerrar sesión",
    disabled: false,
    isHidden: true,
    children: null,
    isDropdownMenu: true,
    element: (
      <PrivateRoute authState={authState}>
        <Configuration />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    name: "about",
    icon: <TbPig />,
    text: "Acerca de",
    disabled: false,
    isHidden: false,
    children: null,
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <h1>Acerca de</h1>
      </PrivateRoute>
    ),
  },
  {
    path: "/signIn",
    name: "signIn",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    isDropdownMenu: false,
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
    isDropdownMenu: false,
    element: <h1>Not Found</h1>,
  },
];
