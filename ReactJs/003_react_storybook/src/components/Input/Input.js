import React from "react";
import "./Input.css";

function Input({ size = "medium", ...rest }) {
  return <input className={`input ${size}`} {...rest} />;
}

export default Input;
