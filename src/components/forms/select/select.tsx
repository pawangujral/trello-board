import React from "react";
import "./../form.css";

interface selectProps {
    label: string;
    options: string[];
}

const Select: React.FC<selectProps> = ({label, options}: selectProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select className="form-control">
                <option value=""></option>
                {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                } 
            </select>
        </div>
    )
};

export default Select;