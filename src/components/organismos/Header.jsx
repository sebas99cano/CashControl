import { useEffect, useRef } from "react";
import { ContentHeader } from "../atomos/ContentHeader";
import UserData from "./UserData";

export function Header({ dropdownConfig }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        dropdownConfig.isOpenDropdown
      ) {
        dropdownConfig.setIsOpenDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownConfig.isOpenDropdown]);

  return (
    <ContentHeader>
      <div ref={ref}>
        <UserData dropdownConfig={dropdownConfig} />
      </div>
    </ContentHeader>
  );
}
