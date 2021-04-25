import React from "react";
import "./../form.css";

interface inputProps {
    type: string,
    placeholder?: string;
}

const Input: React.FC<inputProps> = ({type = "text", placeholder}: inputProps) => {
    return (
        <div className="form-group">
            <label>{type}</label>
            <input type={type} placeholder={placeholder} className="form-control"/>
        </div>
    )
};

export default Input; 