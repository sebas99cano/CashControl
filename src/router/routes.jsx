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
  return authState.uid ? children : <Navigate to={"/login"} />;
};
export const PublicRoute = ({ authState, children }) => {
  return authState.uid ? <Navigate to={"/"} /> : children;
};

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Configuration = lazy(() =>
  import("../pages/configuration/Configuration")
);
const Categories = lazy(() => import("../pages/categories/Categories"));
export const MyRoutes = ({ authState, generalDictionary }) => [
  {
    path: "/",
    name: "home",
    icon: <AiOutlineHome />,
    text: generalDictionary.HOME,
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
    text: generalDictionary.CATEGORIES,
    disabled: false,
    isHidden: false,
    children: null,
    isDropdownMenu: false,
    element: (
      <PrivateRoute authState={authState}>
        <Categories />
      </PrivateRoute>
    ),
  },
  {
    path: "/movements",
    name: "movements",
    icon: <AiOutlineApartment />,
    text: generalDictionary.MOVEMENTS,
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
    text: generalDictionary.INFORMS,
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
    text: generalDictionary.DASHBOARD,
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
    text: generalDictionary.DASHBOARD,
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
    text: generalDictionary.PROFILE,
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
    text: generalDictionary.LOG_OUT,
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
    text: generalDictionary.ABOUT,
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
    path: "/login",
    name: "login",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    isDropdownMenu: false,
    element: (
      <PublicRoute authState={authState}>
        <Login />
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
