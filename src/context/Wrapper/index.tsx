import { createContext, useEffect, useState } from "react";
import { Popup } from "../../components/Popup";
import { IDocument } from "../../types/document";

interface IAppContext {
  selectedNotebook: string;
  selectedDocument: IDocument | null;
  setSelectedNotebook: (nb: string) => void;
  setSelectedDocument: (doc: IDocument | null) => void;
  popup: null | string;
  setPopup: (s: null | string) => void;
}

const DEFAULT_SELECTED_NOTEBOOK = "All Notes";

export const AppContext = createContext<IAppContext>({
  selectedNotebook: DEFAULT_SELECTED_NOTEBOOK,
  selectedDocument: null,
  setSelectedNotebook: (_nb: string) => {},
  setSelectedDocument: (_doc: IDocument | null) => {},
  popup: null,
  setPopup: (_s: null | string) => {},
});

interface IProps {
  children: React.ReactElement;
}

export const ContextWrapper = ({ children }: IProps) => {
  const [selectedNotebook, setSelectedNotebook] = useState(
    DEFAULT_SELECTED_NOTEBOOK,
  );

  const [selectedDocument, setSelectedDocument] = useState<IDocument | null>(
    null,
  );

  const [popup, setPopup] = useState<null | string>(null);

  return (
    <AppContext.Provider
      value={{
        selectedNotebook,
        setSelectedNotebook,
        selectedDocument,
        setSelectedDocument,
        popup,
        setPopup,
      }}
    >
      {popup && <Popup type={popup} />}
      {children}
    </AppContext.Provider>
  );
};
