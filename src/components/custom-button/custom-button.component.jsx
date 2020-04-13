import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`custom-button 
        ${isGoogleSignIn ? "google-sign-in" : ""} 
        ${inverted ? "inverted" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
