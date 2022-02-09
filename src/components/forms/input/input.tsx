import React from 'react';
import './../form.css';

export interface inputProps {
    type: string,
    placeholder?: string;
    label: string;
    value?: string;
    name: string;
    onChange: (e: React.ChangeEvent<{ value: unknown, name: string }>) => void;
}

const Input: React.FC<inputProps> = ({
  type = 'text',
  placeholder,
  label,
  value,
  name,
  onChange}: inputProps) => {
  return (
    <div className="form-group">
      <label>{label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="form-control"
          value={value}
          onChange={onChange}/>
      </label>
    </div>
  );
};

export default Input;
