import styled from "styled-components";
import ConfigurationTemplate from "../../components/templates/ConfigurationTemplate";
import useConfiguration from "./useConfiguration";

const Configuration = () => {
  const {
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
  } = useConfiguration();
  return (
    <Container>
      <ConfigurationTemplate
        isOpenDropdown={isOpenDropdown}
        themeListState={themeListState}
        themeSelected={themeSelected}
        languageListState={languageListState}
        languageSelected={languageSelected}
        setLanguageSelected={setLanguageSelected}
        setLanguageListState={setLanguageListState}
        setThemeSelected={setThemeSelected}
        setThemeListState={setThemeListState}
        setIsOpenDropdown={setIsOpenDropdown}
        editSettings={editSettings}
      />
    </Container>
  );
};

const Container = styled.main`
  height: 100vh;
`;

export default Configuration;
