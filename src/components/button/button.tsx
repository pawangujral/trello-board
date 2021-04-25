import React from "react";
import "./button.css";

interface buttonProps {
    title: string;
    variant?: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<buttonProps> = ({title, variant, handleClick}: buttonProps) => {
    return (
        <button className={variant} onClick={handleClick}>{title}</button>
    )
};

export default Button;