import React from "react";

import "./Input.css";

const checkBox = (props) => {
  return (
    <label>
      <input className="CheckBox" type="checkbox"/>
      <span>Remember me</span>
    </label>
  );
};

export default checkBox;
// style={{ marginLeft: 8 }}
// style={{marginLeft: -40}}