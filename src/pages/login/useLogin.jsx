import { useContext } from "react";
import { googleSignInFirebase } from "../../api/firebase/Auth";
import { UserThemeContext } from "../../context/ThemeContext";

const useLogin = () => {
  const [themeState] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;

  const signInGoogle = () => {
    googleSignInFirebase()
      .then(() => {
        console.log("Login-success");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return { signInGoogle, generalDictionary };
};

export default useLogin;
