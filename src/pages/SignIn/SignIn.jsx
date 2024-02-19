import SignInTemplate from "../../components/templates/SignInTemplate";
import useSignIn from "./useSignIn";

const SignIn = () => {
  const { signInGoogle } = useSignIn();

  return (
    <>
      <SignInTemplate signInGoogle={signInGoogle} />
    </>
  );
};

export default SignIn;
