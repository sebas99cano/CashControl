import { ContentHeader } from "../atomos/ContentHeader";
import UserData from "./UserData";
import ClickOutsideHandler from "../../utils/ClickOutsideHandler";

export function Header({ dropdownConfig }) {
  return (
    <ContentHeader>
      <ClickOutsideHandler
        isOpen={dropdownConfig.isOpenDropdown}
        onClose={dropdownConfig.setIsOpenDropdown}
      >
        <UserData dropdownConfig={dropdownConfig} />
      </ClickOutsideHandler>
    </ContentHeader>
  );
}
