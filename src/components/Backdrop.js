import React from 'react';
import {createPortal} from 'react-dom';

const Backdrop = () => {
    
    const backdropRoot = document.getElementById('backdrop');
    return createPortal(<div className="backdrop" />, backdropRoot);
};

export default Backdrop;