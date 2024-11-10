import PropTypes from "prop-types";
function Button({text,className}) {
  return <div className="positionButton">
    <button className={className}>{text}</button>
  </div>;
}

Button.propTypes={
    text:PropTypes.string.isRequired,
    className:PropTypes.string
}

export default Button;
