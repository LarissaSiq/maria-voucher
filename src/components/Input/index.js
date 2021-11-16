import React from 'react';
import './index.css';

const Input = ({
    placeholder,
    className,
    onChange,
    value,
    name,
    type,
    min,
    max,
}) => {
    return (
        <input type={type}
            placeholder={placeholder}
            className={className}
            name={name}
            onChange={onChange}
            value={value}
            min={min}
            max={max}
            required>
        </input>
    )
}

export default Input;