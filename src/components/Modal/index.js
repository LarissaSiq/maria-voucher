import React from 'react';
import './index.css';
import './responsive.css';

function Modal({
    children
}) {
    return (
        <div className="modal-container">
            {children}
        </div>
    );
}

export default Modal;