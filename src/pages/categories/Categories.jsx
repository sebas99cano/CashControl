import styled from "styled-components";
import Header from "../../components/organismos/Header";
import ContentFilters from "../../components/atomos/ContentFilters";
import DropdownButton from "../../components/moleculas/DropdownButton";
import useCategories from "./useCategories";
import DropdownMenu from "../../components/moleculas/DropdownMenu";
import ClickOutsideHandler from "../../utils/ClickOutsideHandler";
import AddButton from "../../components/moleculas/AddButton";
import { variables } from "../../styles/variables";

const Categories = () => {
  const {
    isOpenDropdown,
    categoryOptions,
    categorySelected,
    isOpenCategories,
    handleCategorySelect,
    setIsOpenDropdown,
    setIsOpenCategories,
  } = useCategories();
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
      <section className="type">
        <ContentFilters>
          <ClickOutsideHandler
            isOpen={isOpenCategories}
            onClose={() => setIsOpenCategories(!isOpenCategories)}
          >
            <DropdownButton
              bgColor={categorySelected.bgColor}
              textColor={categorySelected.textColor}
              name={categorySelected.name}
              functionDropdownButton={() =>
                setIsOpenCategories(!isOpenCategories)
              }
            />
          </ClickOutsideHandler>
          {isOpenCategories && (
            <DropdownMenu
              data={categoryOptions}
              top={"110%"}
              functionOnClick={handleCategorySelect}
            />
          )}
        </ContentFilters>
        <AddButton
          bgColor={categorySelected.bgColor}
          textColor={categorySelected.textColor}
          icon={<variables.iconAdd />}
          functionAddButton={() => {}}
        />
      </section>
      <section className="area2"></section>
      <section className="main"></section>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .type {
    grid-area: area1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
  }
  .main {
    grid-area: main;
  }
`;

export default Categories;
