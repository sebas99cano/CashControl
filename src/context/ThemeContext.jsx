import { createContext, useReducer } from "react";
import spanish from "../languages/spanish";
import { Dark, Light } from "../styles/theme";
export const ThemeContext = createContext(null);

const initialState = {
  themeClass: "light",
  language: "spanish",
  themeStyle: Light,
  ...spanish,
};

const ThemeReducer = (state = initialState, action) => {
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

export const ThemeProvider = ({ children }) => {
  const [ThemeState, ThemeDispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={[ThemeState, ThemeDispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
