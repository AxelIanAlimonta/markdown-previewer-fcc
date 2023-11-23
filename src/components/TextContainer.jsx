import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GrContract } from "react-icons/gr";
import "../css/TextContainer.css";

function TextContainer({
  title,
  children,
  visible,
  expanded,
  expandContractHandler,
}) {
  return (
    <div
      className="textContainer"
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className="textContainter-barraSuperior">
        <FaCode width="20px" height="20px" />
        <p className="textContainter-title">{title}</p>
        {expanded ? (
          <GrContract
            onClick={expandContractHandler}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FaExpandArrowsAlt
            onClick={expandContractHandler}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {children}
    </div>
  );
}

TextContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  expandContractHandler: PropTypes.func,
};

export default TextContainer;
