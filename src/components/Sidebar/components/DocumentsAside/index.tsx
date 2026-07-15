import { Row } from "../../../../UIKit";
import { Aside, AsideContent, AsideLabel } from "../../styles";
import {
  LuAArrowDown,
  LuSquarePen,
  LuBookmark,
  LuBookmarkCheck,
} from "react-icons/lu";
import { NoteRow } from "./styles";
import { useAppContext } from "../../../../context/hooks/useAppContext";
import { IconButton } from "../../../IconButton";
import { useMockedData } from "../../../../context/hooks/useMockedData";
import { IDocument } from "../../../../types/document";

interface INoteItemProps {
  document: IDocument;
}

const NoteItem = ({ document }: INoteItemProps) => {
  const { setSelectedDocument, selectedDocument } = useAppContext();

  const tags = document.tags.map((t) => {
    const { label, color } = t;
    return (
      <span
        key={label}
        style={{
          color: color,
          fontSize: 10,
          background: "rgba(255, 228, 196, 0.18)",
          borderRadius: 8,
          height: 14,
          padding: "5px 6px",
          border: `solid 1px ${color}`,
          lineHeight: 0.15,
        }}
      >
        {label}
      </span>
    );
  });

  return (
    <NoteRow
      $selected={selectedDocument?.title === document.title}
      onClick={() => setSelectedDocument(document)}
    >
      <div>
        <Row style={{ alignItems: "center", gap: 5 }}>
          {document.pinned ? (
            <LuBookmarkCheck style={{ minWidth: 16 }} color="bisque" />
          ) : (
            <LuBookmark style={{ minWidth: 16 }} />
          )}
          <h4
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: 280,
            }}
          >
            {" "}
            {document.title}
          </h4>
        </Row>

        <p
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: 280,
          }}
        >
          {document.content}
        </p>
        <Row style={{ alignItems: "center", gap: 5 }}>
          <span style={{ color: "cornflowerblue", fontSize: 12 }}>
            2 days ago
          </span>
          <span
            style={{
              color: "darkseagreen",
              fontSize: 10,
              borderRadius: 8,
            }}
          >
            {document.status}
          </span>
          {tags}
        </Row>
      </div>
    </NoteRow>
  );
};

export const DocumentsAside = () => {
  const { selectedNotebook } = useAppContext();

  const { data } = useMockedData();

  const documents =
    selectedNotebook === "All Notes"
      ? data
      : selectedNotebook === "Pinned Notes"
        ? data.filter((d) => d.pinned)
        : data.filter((d) => d.notebook === selectedNotebook);

  const documentItems = documents.map((d) => (
    <NoteItem key={d.title} document={d} />
  ));

  return (
    <Aside>
      <AsideLabel>
        <Row style={{ justifyContent: "space-between" }}>
          <IconButton onClick={() => false}>
            <LuAArrowDown />
          </IconButton>
          <label>{selectedNotebook}</label>
          <IconButton onClick={() => false}>
            <LuSquarePen />
          </IconButton>
        </Row>
      </AsideLabel>
      <AsideContent>
        <ul>{documentItems}</ul>
      </AsideContent>
    </Aside>
  );
};
