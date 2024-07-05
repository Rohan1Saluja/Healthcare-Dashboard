import React from "react";
import "./Text.scss";

interface Props {
  text: string;
  className?: string;
  onClick?: any;
}

export const Text: React.FC<Props> = ({ text, className = "", onClick }) => {
  return (
    <div className={`text ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};
