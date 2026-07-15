import { FixedRow } from "../../UIKit";
import { DirectoriesAside } from "./components/DirectoriesAside";
import { DocumentsAside } from "./components/DocumentsAside";

export const Sidebar = () => {
  return (
    <FixedRow>
      <DirectoriesAside />
      <DocumentsAside />
    </FixedRow>
  );
};
