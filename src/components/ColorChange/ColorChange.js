import React, { useState } from 'react';
import './ColorChange.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const ColorItem = ({ color, setColor }) => (
    <div onClick={() => setColor(color)} className="color-item" style={{ backgroundColor: color }}>
    </div>
);

const ColorChange = () => {
    const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab04c', '#30336b'];
    const setTheme = (color) => {
        document.documentElement.style.setProperty('--primary-background-color', color);
    };
    const setColor = (color) => {
        setTheme(color);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`main-div ${isOpen ? 'main-div--open' : ''}`}>
            <button className='app-logo' onClick={() => setIsOpen((prevState) => !prevState)}>
                <FontAwesomeIcon icon={faGear} spin />
            </button>
            <h3>Choose Color</h3>
            <div className='color-list'>
                {colors.map((color, index) => (
                    <ColorItem key={index} setColor={setColor} color={color} />
                ))}
            </div>
        </div>
    );
};

export default ColorChange;


