import { useContext, useEffect, useState } from "react";
import { auth, googleSignInFirebase } from "../../api/firebase/Auth";
import { AuthContext } from "../../context/AuthContext";
import { UserThemeContext } from "../../context/ThemeContext";

import UserService from "../../api/user/UserService";
import UserClass from "../../class/user/UserClass";

const useSignIn = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [, themeDispatch] = useContext(UserThemeContext);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (authState.uid === "") {
      auth.onAuthStateChanged((response) => {
        if (response?.uid) {
          getUserDetail(response, response.providerId);
        } else {
          authDispatch({
            type: "LOGOUT_USER",
          });
        }
        setLoadingUser(false);
      });
    }
  }, []);

  const getUserDetail = (credential, providerId) => {
    const userPayload = new UserClass(credential, credential.uid, providerId);
    UserService.getUserDetail(userPayload.state)
      .then((user) => {
        authDispatch({
          type: "LOGIN_USER",
          payload: user,
        });
        themeDispatch({
          type: user.themePreference,
        });
        themeDispatch({
          type: user.languagePreference,
        });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const signInGoogle = () => {
    googleSignInFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  if (loadingUser) return <h1>Cargando</h1>;

  return { signInGoogle };
};

export default useSignIn;
