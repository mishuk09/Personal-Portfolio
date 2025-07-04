import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const WhatsApp = () => {
    const style = {
        position: 'fixed',
        zIndex: 999,
        right: '15px',
        bottom: '50px',
        transform: 'translate(0, -50%)',
    };

    return (
        <div style={style}>
            <ReactWhatsapp number="+88 01740106176" message="Hello! I'm a Full Stack Developer. How can I help you?" >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className='whatsapplogo' beat />

            </ReactWhatsapp>
        </div>
    );
};

export default WhatsApp;
