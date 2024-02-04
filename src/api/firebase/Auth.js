import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import app from "./Config";

export const auth = getAuth(app);

export function googleSignInFirebase() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}

export function signOutFirebase() {
  return signOut(auth);
}
