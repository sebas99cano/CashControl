import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserThemeContext } from "../../context/ThemeContext";
import { LanguageData, ThemeData } from "../../api/static/StaticData";
import SettingsClass from "../../class/user/SettingsClass";
import UserService from "../../api/user/UserService";
import ReactGA from "react-ga4";

const useConfiguration = () => {
  const [authState] = useContext(AuthContext);
  const [themeState, themeDispatch] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const [themeListState, setThemeListState] = useState(false);
  const [themeSelected, setThemeSelected] = useState(
    ThemeData.find((theme) => theme.value === themeState.themeClass)
  );

  const [languageListState, setLanguageListState] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(
    LanguageData.find((theme) => theme.value === themeState.language)
  );

  const editSettings = () => {
    const settingToEdit = new SettingsClass(
      themeSelected.value,
      languageSelected.value
    ).state;

    UserService.updateUserSettings(settingToEdit, authState.uid)
      .then((response) => {
        ReactGA.event({
          category: "Update Profile",
          action: "Submit",
          label: themeState.themeClass,
        });
        themeDispatch({
          type: response.themePreference,
        });
        themeDispatch({
          type: response.languagePreference,
        });
      })
      .catch((error) => console.error(error));
  };
  return {
    isOpenDropdown,
    themeListState,
    themeSelected,
    languageListState,
    languageSelected,
    generalDictionary,
    setLanguageSelected,
    setLanguageListState,
    setThemeSelected,
    setThemeListState,
    setIsOpenDropdown,
    editSettings,
  };
};

export default useConfiguration;
