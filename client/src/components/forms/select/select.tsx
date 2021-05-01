import React from "react";
import "./../form.css";

interface selectProps {
    label: string;
    options: string[];
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<{ value: unknown, name: string }>) => void;
}

const Select: React.FC<selectProps> = ({label, options, value, name, onChange}: selectProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select className="form-control" value={value} name={name} onChange={onChange}>
                <option value=""></option>
                {
                    options.map(option => <option key={option}  value={option}>{option}</option>)
                } 
            </select>
        </div>
    )
};

export default Select;