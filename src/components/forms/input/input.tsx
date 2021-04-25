import React from "react";
import "./../form.css";

interface inputProps {
    type: string,
    placeholder?: string;
    label: string;
}

const Input: React.FC<inputProps> = ({type = "text", placeholder, label}: inputProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} className="form-control"/>
        </div>
    )
};

export default Input; 