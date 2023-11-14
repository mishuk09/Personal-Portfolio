import React from 'react';
import './ColorChange.css'
import ColorItem from './color-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const ColorChange = () => {
    const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab04c', '#30336b'];
    
    const setCOlor=()=>{
        
    }
    
    
    
    
    return (
        <div className='main-div'>
            <button><FontAwesomeIcon icon={faGear} /></button>
            <h3>Choose Color</h3>
            <div className='color-list'>
                {colors.map((color, inx) => <ColorItem color={color}></ColorItem>)}
            </div>
        </div>
    );
};

export default ColorChange;