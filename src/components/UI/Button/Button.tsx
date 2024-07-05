import * as React from "react";
import Button from "@mui/material/Button";
import "./Button.scss";

interface Props {
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary";
  className?: string;
  buttonText: string;
  onClick?: () => void;
  size?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  errors?: any;
}

export const CustomButton: React.FC<Props> = ({
  color = "primary",
  variant = "contained",
  className = "",
  buttonText,
  size = "",
  onClick,
  type = "button",
  disabled,
  startIcon,
  endIcon,
  errors = "",
}) => {
  return (
    <Button
      type={type}
      className={`default ${className} ${size}`}
      onClick={onClick}
      color={color}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      aria-errormessage={errors}
    >
      {buttonText}
    </Button>
  );
};
