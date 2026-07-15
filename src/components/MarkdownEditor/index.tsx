import { useEffect, useState } from "react";
import { ContentEditor } from "./styles";
import { Row } from "../../UIKit";
import { AsideLabel } from "../Sidebar/styles";
import {
  LuEye,
  LuEllipsisVertical,
  LuCheck,
  LuBookmark,
  LuBookmarkCheck,
  LuPencil,
} from "react-icons/lu";
import { IconButton } from "../IconButton";
import { useAppContext } from "../../context/hooks/useAppContext";

const PREVIEW_MODE = {
  EDIT: "edit",
  PREVIEW: "preview",
  LIVE: "live",
} as const;

export const MarkdownEditor = () => {
  const { selectedDocument } = useAppContext();

  const [markdown, setMarkdown] = useState<string | undefined>();

  useEffect(() => {
    setMarkdown(selectedDocument?.content);
  }, [selectedDocument]);

  if (!selectedDocument) {
    return null;
  }

  return (
    <Row style={{ flexDirection: "column", width: "100%" }}>
      <AsideLabel>
        <Row style={{ justifyContent: "space-between" }}>
          <Row style={{ alignItems: "center", gap: 5 }}>
            <IconButton onClick={() => false}>
              {selectedDocument?.pinned ? (
                <LuBookmarkCheck color="bisque" />
              ) : (
                <LuBookmark />
              )}
            </IconButton>
            <label>
              <span style={{ opacity: 0.6 }}>
                {selectedDocument?.notebook} /
              </span>
              {selectedDocument?.title}
            </label>
            <LuCheck color="darkseagreen" />
          </Row>
          <Row style={{ alignItems: "center", gap: 5 }}>
            <IconButton onClick={() => false}>
              <LuPencil />
            </IconButton>

            <IconButton onClick={() => false}>
              <LuEye />
            </IconButton>

            <IconButton onClick={() => false}>
              <LuEllipsisVertical />
            </IconButton>
          </Row>
        </Row>
      </AsideLabel>
      <ContentEditor
        preview={PREVIEW_MODE.EDIT}
        enableScroll
        value={markdown}
        onChange={setMarkdown}
        visibleDragbar={false}
        hideToolbar
        textareaProps={{
          placeholder: "Start writing...",
        }}
      />
    </Row>
  );
};
