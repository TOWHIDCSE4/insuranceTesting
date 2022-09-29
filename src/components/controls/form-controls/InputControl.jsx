import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";

const InputControl = ({
  name,
  type = "text",
  control,
  errors,
  msg,
  disabled = false,
  placeholder = "",
  className = "",
  size = "middle",
  defaultValue = "",
}) => {
  let errMsg = msg ? msg : errors?.[name]?.message;
  return (
    <div className="">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            allowClear
            {...field}
            type={type}
            id={name}
            className={`form-control ${className}`}
            status={errMsg && "error"}
            size={size}
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
      />
      <p className="error-msg">{errMsg}</p>
    </div>
  );
};

export default InputControl;
