import React, { useState } from 'react';
import './ColorChange.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const ColorItem = ({ color, setColor }) => (
    <div onClick={() => setColor(color)} className="color-item" style={{ backgroundColor: color }}>
    </div>
);

const ColorChange = () => {
    const colors = ['#be185d', '#22d3ee', '#16a34a', '#b91c1c', '#a855f7', '#059669'];
    const [isOpen, setIsOpen] = useState(false);

    const setColor = (color) => {
        document.documentElement.style.setProperty('--color-changer', color);
    };

    return (
        <div className={`main-div ${isOpen ? 'main-div--open' : ''}`}>
            <button className='app-logo' onClick={() => setIsOpen((prevState) => !prevState)}>
                <FontAwesomeIcon icon={faGear} spin />
            </button>
            <h3 className='text-black'>Choose Color</h3>
            <div className='color-list'>
                {colors.map((color, index) => (
                    <ColorItem key={index} setColor={setColor} color={color} />
                ))}
            </div>
        </div>
    );
};

export default ColorChange;
