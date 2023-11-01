import React from "react";
import "./css/component_style.css";

const Button = (props) => {
  return (
    <button id="btn_input" value={props.value} onClick={props.getVal}>
      {props.value}
    </button>
  );
};

export default Button;
