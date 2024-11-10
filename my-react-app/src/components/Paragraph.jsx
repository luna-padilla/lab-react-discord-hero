
import PropTypes from "prop-types";
function Paragraph({ text,className}) {
  return (
    <div>
      <p className={className}>{text}</p>
    </div>
  );
}
Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className:PropTypes.string
};
export default Paragraph;
