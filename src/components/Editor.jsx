import PropTypes from "prop-types";

function Editor({text, handleTextChange,expanded}) {
  return (
    <textarea
      name="editor"
      id="editor"
      onChange={handleTextChange}
      value={text}
      style={{ minHeight: expanded ? "100vh" : "" }}
    ></textarea>
  );
}

Editor.propTypes = {
  text: PropTypes.string,
  handleTextChange: PropTypes.func,
  expanded: PropTypes.bool,
};

export default Editor;
