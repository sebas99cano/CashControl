import { ContentHeader } from "../atomos/ContentHeader";
import UserData from "./UserData";

export function Header({ dropdownConfig }) {
  return (
    <ContentHeader>
      <UserData dropdownConfig={dropdownConfig} />
    </ContentHeader>
  );
}
