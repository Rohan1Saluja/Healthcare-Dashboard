import React from "react";
import "./TextInput.scss";
import { TextField } from "@mui/material";

interface Props {
  label?: string;
  width?: string;
  errorMessage?: string;
  name?: string;
  ref?: any;
  value?: string;
  handleChange?: any;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const TextInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      width,
      errorMessage = "",
      name,
      value,
      handleChange,
      type = "text",
      placeholder = "",
      disabled,
      className,
    },
    ref
  ) => {
    return disabled ? (
      <div className={`text-input blur ${width ? width : ""}`}>
        <TextField
          type={type}
          value={value}
          inputRef={ref}
          label={label}
          helperText={errorMessage}
          name={name}
          onChange={(e) => handleChange(e.target.value, name)}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
        />
      </div>
    ) : (
      <div className={`text-input ${width ? width : ""}`}>
        <TextField
          type={type}
          value={value}
          inputRef={ref}
          label={label}
          helperText={errorMessage}
          name={name}
          onChange={(e) => handleChange(e.target.value, name)}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
        />
      </div>
    );
  }
);
