import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { marked } from "marked";

function Preview({text,expanded}) {
  return (
    <div
      name="preview"
      id="preview"
      style={{ minHeight: expanded ? "100vh" : "" }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(text)),
      }}
    ></div>
  );
}

Preview.propTypes = {
    text:PropTypes.string,
    expanded: PropTypes.bool,
};

export default Preview;
