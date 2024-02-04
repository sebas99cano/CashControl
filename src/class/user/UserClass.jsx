import React from "react";

class UserClass extends React.Component {
  constructor(user, uid, providerId) {
    super(user);
    if (user) {
      this.state = {
        uid: user?.uid ? user.uid : uid,
        name: user?.displayName ? user.displayName : "",
        email: user?.email ? user.email : "",
        rol: user?.rol ? user.rol : "Usuario",
        providerId: providerId
          ? providerId
          : user.providerId
          ? user.providerId
          : "Email",
        photoURL: user?.photoURL ? user.photoURL : "",
        languagePreference: user?.languagePreference
          ? user.languagePreference
          : "SWITCH_TO_SPANISH",
        themePreference: user?.themePreference ? user.Preference : "LIGHT_MODE",
      };
    }
  }
}

export default UserClass;
