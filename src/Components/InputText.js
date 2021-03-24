import React from 'react';

import "./Input.css";

const inputText = (props) => {
    return <input className="InputText" type="text" placeholder={props.placeholder}  />
}

export default inputText;