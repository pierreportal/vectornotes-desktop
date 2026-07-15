import { Aside, AsideContent, AsideLabel } from "../../styles";
import { Row } from "../../../../UIKit";
import {
  LuSettings,
  LuFileText,
  LuBookmark,
  LuBook,
  LuCheckCheck,
  LuTag,
} from "react-icons/lu";
import { AsideSection } from "../Section";
import { Item } from "./styles";
import { useAppContext } from "../../../../context/hooks/useAppContext";
import { IconButton } from "../../../IconButton";
import {
  fetchTags,
  useMockedData,
} from "../../../../context/hooks/useMockedData";
import { STATUS } from "../../../../types/document";

export const DirectoriesAside = () => {
  const { setSelectedNotebook, selectedNotebook } = useAppContext();

  const { data } = useMockedData();
  const { tags } = fetchTags();

  const directories = data.map((d) => d.notebook);

  const selectDirectory = (dirName: string) => setSelectedNotebook(dirName);

  const notebooksItems = [...new Set(directories)].map((nb: string) => {
    return (
      <Item
        key={nb}
        $selected={selectedNotebook === nb}
        onClick={() => setSelectedNotebook(nb)}
      >
        {nb}
      </Item>
    );
  });
  const tagItems = tags.map((t) => {
    return (
      <Item
        key={t.label}
        $selected={selectedNotebook === t.label}
        onClick={() => selectDirectory(`# ${t.label}`)}
      >
        {t.label}
      </Item>
    );
  });

  const statusItems = Object.values(STATUS).map((s) => {
    return (
      <Item
        key={s}
        $selected={selectedNotebook === s}
        onClick={() => selectDirectory(`status: ${s}`)}
      >
        {s}
      </Item>
    );
  });

  return (
    <Aside $darker $small>
      <AsideLabel>
        <Row style={{ flexDirection: "row-reverse" }}>
          <IconButton onClick={() => false}>
            <LuSettings />
          </IconButton>
        </Row>
      </AsideLabel>
      <AsideContent>
        <ul>
          <Item
            $selected={selectedNotebook === "All Notes"}
            onClick={() => selectDirectory("All Notes")}
          >
            <LuFileText size={16} />
            <span>All Notes</span>

            <span style={{ position: "absolute", right: 15 }}>
              {data.length}
            </span>
          </Item>
          <Item
            $selected={selectedNotebook === "Pinned Notes"}
            onClick={() => selectDirectory("Pinned Notes")}
          >
            <LuBookmark size={16} />
            <span>Pinned Notes</span>
          </Item>
          <AsideSection
            icon={<LuBook />}
            isOpen
            plusAction
            numberDisplay
            label="Notebooks"
          >
            {notebooksItems}
          </AsideSection>
          <AsideSection icon={<LuCheckCheck />} isOpen label="Status">
            {statusItems}
          </AsideSection>
          <AsideSection icon={<LuTag />} isOpen plusAction label="Tags">
            {tagItems}
          </AsideSection>
        </ul>
      </AsideContent>
    </Aside>
  );
};
