import React from "react";
import "./Button.css";

function Button({ children, variant = "primary", ...rest }) {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
