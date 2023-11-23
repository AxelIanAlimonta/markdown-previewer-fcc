import { useState } from "react";
import { defaultText } from "./js/defaultText";
import "./App.css";
import TextContainer from "./components/TextContainer";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState(defaultText);

  const [visibleEditor, setVisibilityEditor] = useState(true);
  const [visiblePreview, setVisibilityPreview] = useState(true);
  const [expandedEditor, setExpandedEditor] = useState(false);
  const [expandedPreview, setExpandedPreview] = useState(false);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function expandContractEditor() {
    setExpandedEditor((e) => !e);
    setVisibilityPreview((s) => !s);
  }
  function expandContractPreview() {
    setExpandedPreview((e) => !e);
    setVisibilityEditor((s) => !s);
  }

  return (
    <div className="previsualizador-markdown">
      <TextContainer
        title="Editor"
        visible={visibleEditor}
        expanded={expandedEditor}
        expandContractHandler={expandContractEditor}
      >
        <Editor
          text={text}
          handleTextChange={handleTextChange}
          expanded={expandedEditor}
        />
      </TextContainer>
      <TextContainer
        title="Preview"
        visible={visiblePreview}
        expanded={expandedPreview}
        expandContractHandler={expandContractPreview}
      >
        <Preview text={text} />
      </TextContainer>
    </div>
  );
}

export default App;
