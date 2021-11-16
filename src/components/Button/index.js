import React from 'react';
import './index.css';

function Button({
    buttonOnClick,
    children,
    className,
    type
}) {
    return (
        <button
            onClick={buttonOnClick}
            className={className}
            type={type}>
            {children}
        </button>
    );
}

export default Button;