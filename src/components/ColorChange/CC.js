// CC.js
import React from 'react';
import { useColor } from './ColorContext';

const CC = () => {
    const { backgroundColor } = useColor();

    return (
        <div style={{ backgroundColor }}>
            {/* Your content */}
        </div>
    );
};

export default CC;
