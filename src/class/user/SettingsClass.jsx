import React from "react";
class SettingsClass extends React.Component {
  constructor(themePreference, languagePreference) {
    super();
    this.state = {
      themePreference: themePreference ? themePreference : "LIGHT_MODE",
      languagePreference: languagePreference
        ? languagePreference
        : "SWITCH_TO_SPANISH",
    };
  }
}

export default SettingsClass;
