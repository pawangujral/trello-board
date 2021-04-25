import React from "react";
import "./../form.css";

const Select: React.FC = () => {
    return (
        <div className="form-group">
            <label>Select</label>
            <select className="form-control">
                <option value=""></option>
                <option value="">Designer</option>
                <option value="">Frontend Dev</option>
                <option value="">Backend Dev</option>
                <option value="">QA</option>
                <option value="">DevOps</option>
            </select>
        </div>
    )
};

export default Select;