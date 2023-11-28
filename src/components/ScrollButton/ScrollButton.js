import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [scrollActive, setScrollActive] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '10px',
        zIndex: '999',
        backgroundColor: 'green',
        
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer'
    };

    return (
        <div>
            <button style={buttonStyle} onClick={() => {
                scrollToTop();
                setScrollActive(!scrollActive);
            }}>
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollButton;
