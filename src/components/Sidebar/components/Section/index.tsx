import { useState } from "react";
import { LuChevronDown, LuChevronRight, LuCirclePlus } from "react-icons/lu";
import { SectionHeader, SectionItems, SectionActions } from "./styles";
import { useAppContext } from "../../../../context/hooks/useAppContext";
import { IconButton } from "../../../IconButton";

interface INotesFolderProps {
  label: string;
  children: React.ReactElement[];
  isOpen?: boolean;
  plusAction?: boolean;
  icon: React.ReactNode;
  numberDisplay?: boolean;
}

export const AsideSection = ({
  label,
  children,
  plusAction = false,
  isOpen = false,
  icon,
  numberDisplay = false,
}: INotesFolderProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpen = () => setOpen((state) => !state);

  const { setPopup } = useAppContext();

  return (
    <>
      <SectionHeader onClick={handleOpen}>
        {open ? <LuChevronDown size={16} /> : <LuChevronRight size={16} />}
        {icon} {label}
        <SectionActions>
          {numberDisplay && <span>{children.length}</span>}
          {plusAction && (
            <IconButton
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setPopup("NEW_NOTEBOOK");
              }}
            >
              <LuCirclePlus />
            </IconButton>
          )}
        </SectionActions>
      </SectionHeader>
      {open && <SectionItems>{children}</SectionItems>}
    </>
  );
};
