import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../api/firebase/Auth";

export const AuthContext = createContext({});

const initialState = {
  address: "",
  email: "",
  lastName: "",
  uid: "",
  providerId: "",
  rol: "",
  name: "",
  firstTime: false,
  phone: "",
  photoURL: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      return { ...initialState };
    default:
      return { ...initialState };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, AuthDispatch] = useReducer(AuthReducer, initialState);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        AuthDispatch({
          type: "LOGIN_USER",
          payload: user,
        });
      } else {
        AuthDispatch({
          type: "LOGOUT_USER",
        });
      }
      setLoadingUser(false);
    });
  }, []);

  if (loadingUser) return <h1>Cargando</h1>;

  return (
    <AuthContext.Provider value={[authState, AuthDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
