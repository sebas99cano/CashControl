import { createContext, useReducer } from "react";

import spanish from "../languages/spanish";
import french from "../languages/french";
import english from "../languages/english";
import { Dark, Light } from "../styles/theme";
import { ThemeProvider } from "styled-components";
export const UserThemeContext = createContext(null);

const initialState = {
  themeClass: "LIGHT_MODE",
  language: "SWITCH_TO_SPANISH",
  themeStyle: Dark,
  ...spanish,
};

const UserThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, themeClass: "DARK_MODE", themeStyle: Dark };
    case "LIGHT_MODE":
      return { ...state, themeClass: "LIGHT_MODE", themeStyle: Light };
    case "SWITCH_TO_ENGLISH":
      return { ...state, language: "SWITCH_TO_ENGLISH", ...english };
    case "SWITCH_TO_FRENCH":
      return { ...state, language: "SWITCH_TO_FRENCH", ...french };
    case "SWITCH_TO_SPANISH":
      return { ...state, language: "SWITCH_TO_SPANISH", ...spanish };
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
