import React from "react";
import "./button.css";

interface buttonProps {
    title: string;
    variant?: string;
    type?: "button" | "submit" | "reset";
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<buttonProps> = ({title, variant, handleClick, type = "button"}: buttonProps) => {
    return (
        <button className={variant} type={type} onClick={handleClick}>{title}</button>
    )
};

export default Button;