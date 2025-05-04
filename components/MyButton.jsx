import React from "react";
import PropTypes from "prop-types";

const MyButton = ({ color, text, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

MyButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MyButton;
