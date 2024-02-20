import styled from "styled-components";
import { LanguageData, ThemeData } from "../../api/static/StaticData";
import { variables } from "../../styles/variables";

import Select from "../organismos/Select";
import GenericList from "../moleculas/GenericList";
import Header from "../organismos/Header";
import SaveButton from "../moleculas/SaveButton";
import ClickOutsideHandler from "../../utils/ClickOutsideHandler";

const ConfigurationTemplate = ({
  isOpenDropdown,
  themeListState,
  themeSelected,
  languageListState,
  languageSelected,
  setLanguageSelected,
  setLanguageListState,
  setThemeSelected,
  setThemeListState,
  setIsOpenDropdown,
  editSettings,
}) => {
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
