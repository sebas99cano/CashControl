import { createContext, useReducer } from "react";

import spanish from "../languages/spanish";
import { Dark, Light } from "../styles/theme";
import { ThemeProvider } from "styled-components";
export const UserThemeContext = createContext(null);

const initialState = {
  themeClass: "light",
  language: "spanish",
  themeStyle: Light,
  ...spanish,
};

const UserThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, themeClass: "dark", themeStyle: Dark };
    case "LIGHT_MODE":
      return { ...state, themeClass: "light", themeStyle: Light };
    case "SWITCH_TO_ENGLISH":
      return { ...state, language: "english", ...spanish };
    case "SWITCH_TO_SPANISH":
      return { ...state, language: "spanish", ...spanish };
    default:
      return { ...initialState };
  }
};

export const UserThemeProvider = ({ children }) => {
  const [ThemeState, ThemeDispatch] = useReducer(
    UserThemeReducer,
    initialState
  );

  return (
    <UserThemeContext.Provider value={[ThemeState, ThemeDispatch]}>
      <ThemeProvider
        theme={ThemeState.themeStyle ? ThemeState.themeStyle : Light}
      >
        {children}
      </ThemeProvider>
    </UserThemeContext.Provider>
  );
};

export default UserThemeProvider;
