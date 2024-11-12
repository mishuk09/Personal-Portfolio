import React from 'react';
import upwork from './img/upwork.png';

const Upwork = () => {
    const style = {
        position: 'fixed',
        zIndex: 999,
        right: '13px',
        bottom: '95px',
        transform: 'translate(0, -50%)',
    };
    return (
        <div style={style}>
            <a href='https://www.upwork.com/freelancers/~014bda020b8d80555d' target='blank'>
                <img src={upwork} className='w-9 h-9 bit' alt="upworkimg" />
            </a>
        </div>
    );
};

export default Upwork;