import React from 'react';
import {createPortal} from 'react-dom';

const Modal = ({form}) => {
    
    const modalRoot = document.getElementById('modal');
    return createPortal(
    <div className="modal-area">{form}</div>, modalRoot);
};

export default Modal;

