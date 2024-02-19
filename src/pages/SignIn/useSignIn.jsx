import { googleSignInFirebase } from "../../api/firebase/Auth";

const useSignIn = () => {
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

export default useSignIn;
