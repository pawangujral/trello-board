import React from "react";
import "./button.css";

interface buttonProps {
    title: string;
    variant?: string;
}

const Button: React.FC<buttonProps> = ({title, variant}: buttonProps) => {
    return (
        <button className={variant}>{title}</button>
    )
};

export default Button;