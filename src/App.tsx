import "./App.css";
import { MarkdownEditor } from "./components/MarkdownEditor";
import { Sidebar } from "./components/Sidebar";
import { ContextWrapper } from "./context/Wrapper";
import { Row } from "./UIKit";

function App() {
  return (
    <ContextWrapper>
      <Row>
        <Sidebar />
        <MarkdownEditor />
      </Row>
    </ContextWrapper>
  );
}

export default App;
