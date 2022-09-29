import React from "react";

export const FieldLabel = ({ name, label, required = false, className = "" }) => {
  return (
    <label htmlFor={name} className={`form-label ${className}`}>
      {label} {required && <span className="error-msg">*</span>}
    </label>
  );
};
