import React from "react";
import "./button.css";

interface buttonProps {
    variant?: string;
    type?: "button" | "submit" | "reset";
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<buttonProps> = ({variant, handleClick, type = "button", children}) => {
    return  <button className={variant} type={type} onClick={handleClick}>{children}</button>
};

export default Button;