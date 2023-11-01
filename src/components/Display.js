import React from "react";
import "./css/component_style.css";

const Display = (props) => {
  return (
    <div>
      <input
        id="display"
        type="text"
        value={props.input}
        onChange={props.onInputChanged}
      />
    </div>
  );
};

export default Display;
