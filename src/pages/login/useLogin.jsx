import { googleSignInFirebase } from "../../api/firebase/Auth";

const useLogin = () => {
  const signInGoogle = () => {
    googleSignInFirebase()
      .then(() => {
        console.log("Login-success");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return { signInGoogle };
};

export default useLogin;
