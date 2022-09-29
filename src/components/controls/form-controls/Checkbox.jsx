import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

const CheckboxControl = ({ name, control, label = "", errors, disabled = false, className = "" }) => {
  let errMsg = errors?.[name]?.message;
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox {...field} disabled={disabled} className={` ${className}`}>
            {label}
          </Checkbox>
        )}
      />
      <p className="error-msg">{errMsg}</p>
    </>
  );
};

export default CheckboxControl;
