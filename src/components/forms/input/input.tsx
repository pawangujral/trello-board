import React from "react";

interface inputProps {
    type: string,
    placeholder?: string;
}

const Input: React.FC<inputProps> = ({type = "text", placeholder}: inputProps) => {
    return (
        <input type={type} placeholder={placeholder}/>
    )
};

export default Input; 