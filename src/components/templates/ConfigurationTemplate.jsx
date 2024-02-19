import styled from "styled-components";
import { Header } from "../organismos/Header";
import { useContext, useState } from "react";
import Select from "../organismos/Select";
import { variables } from "../../styles/variables";
import { UserThemeContext } from "../../context/ThemeContext";
import GenericList from "../moleculas/GenericList";
import { LanguageData, ThemeData } from "../../api/static/StaticData";
import { SaveButton } from "../moleculas/SaveButton";
import SettingsClass from "../../class/user/SettingsClass";
import { AuthContext } from "../../context/AuthContext";
import UserService from "../../api/user/UserService";
import ClickOutsideHandler from "../../utils/ClickOutsideHandler";

const ConfigurationTemplate = () => {
  const [authState] = useContext(AuthContext);
  const [themeState, themeDispatch] = useContext(UserThemeContext);
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
        themeDispatch({
          type: response.themePreference,
        });
        themeDispatch({
          type: response.languagePreference,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container>
      <header className="header">
        <Header
          dropdownConfig={{
            isOpenDropdown: isOpenDropdown,
            setIsOpenDropdown: () => setIsOpenDropdown(!isOpenDropdown),
          }}
        />
      </header>
      <section className="area2">
        <h1>Ajustes</h1>
        <ClickOutsideHandler
          isOpen={themeListState}
          onClose={() => setThemeListState(false)}
        >
          <ContentCard>
            <span>Tema:</span>
            <Select
              text1={`${themeSelected.icon} ${themeSelected.name}`}
              color={variables.colorSelect}
              state={themeListState}
              selectFunction={() => setThemeListState(!themeListState)}
            />
            {themeListState && (
              <GenericList
                data={ThemeData}
                setState={() => setThemeListState(!themeListState)}
                genericListFunction={setThemeSelected}
              />
            )}
          </ContentCard>
        </ClickOutsideHandler>
        <ClickOutsideHandler
          isOpen={languageListState}
          onClose={() => setLanguageListState(false)}
        >
          <ContentCard>
            <span>Idioma:</span>
            <Select
              text1={`${languageSelected.icon} ${languageSelected.name}`}
              color={variables.colorSelect}
              state={languageListState}
              selectFunction={() => setLanguageListState(!languageListState)}
            />
            {languageListState && (
              <GenericList
                data={LanguageData}
                setState={() => setLanguageListState(!languageListState)}
                genericListFunction={setLanguageSelected}
              />
            )}
          </ContentCard>
        </ClickOutsideHandler>

        <SaveButton
          title={"Guardar"}
          bgColor={variables.colorSelect}
          icon={<variables.iconSave />}
          buttonFunction={editSettings}
        />
      </section>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area2" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
    align-self: center;
    h1 {
      font-size: 3rem;
    }
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export default ConfigurationTemplate;
