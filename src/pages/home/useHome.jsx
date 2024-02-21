import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserThemeContext } from "../../context/ThemeContext";

const useHome = () => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;
  return { authState, generalDictionary };
};

export default useHome;
