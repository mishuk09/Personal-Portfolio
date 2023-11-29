// ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

    const setTheme = (color) => {
        setBackgroundColor(color);
    };

    return (
        <ColorContext.Provider value={{ backgroundColor, setTheme }}>
            {children}
        </ColorContext.Provider>
    );
};
