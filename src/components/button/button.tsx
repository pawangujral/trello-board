import React from "react";
import "./button.css";

interface buttonProps {
    title: string;
}

const Button: React.FC<buttonProps> = ({title}: buttonProps) => {
    return (
        <button>{title}</button>
    )
};

export default Button;