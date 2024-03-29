import { createContext, useReducer } from "react";

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
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
