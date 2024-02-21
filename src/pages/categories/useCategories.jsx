import { useContext, useState } from "react";
import { UserThemeContext } from "../../context/ThemeContext";
import { variables } from "../../styles/variables";

const useCategories = () => {
  const [themeState] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const categoryOptions = [
    {
      name: generalDictionary.CATEGORY_EXPENSES,
      text: generalDictionary.CATEGORY_EXPENSES,
      textColor: variables.colorExpenses,
      bgColor: variables.colorBgExpenses,
      value: "categoryExpenses",
      icon: <variables.iconMinus />,
    },
    {
      name: generalDictionary.CATEGORY_EARNINGS,
      text: generalDictionary.CATEGORY_EARNINGS,
      textColor: variables.colorEarning,
      bgColor: variables.colorBgEarnings,
      value: "categoryEarnings",
      icon: <variables.iconAdd />,
    },
  ];
  const [categorySelected, setCategorySelected] = useState(categoryOptions[0]);

  const handleCategorySelect = (category) => {
    setIsOpenCategories(false);
    setCategorySelected(category);
  };

  return {
    isOpenDropdown,
    categoryOptions,
    categorySelected,
    isOpenCategories,
    handleCategorySelect,
    setIsOpenDropdown,
    setIsOpenCategories,
  };
};

export default useCategories;
