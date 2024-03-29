import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { fireStore } from "../firebase/Config";

const UserService = {
  getUserDetail: async (user) => {
    const docRef = doc(fireStore, `user/${user.uid}`);
    const consult = await getDoc(docRef);
    if (consult.exists()) {
      if (user?.providerId !== consult.data()?.providerId) {
        await updateDoc(docRef, { providerId: user.providerId });
      }
      const consult2 = await getDoc(docRef);
      return consult2.data();
    } else {
      await setDoc(docRef, user);
      const consult = await getDoc(docRef);
      return consult.data();
    }
  },
  updateUserSettings: async (settings, uid) => {
    const docRef = doc(fireStore, `user/${uid}`);
    await updateDoc(docRef, {
      languagePreference: settings.languagePreference,
      themePreference: settings.themePreference,
    });
    const consult = await getDoc(docRef);
    return consult.data();
  },
};

export default UserService;
