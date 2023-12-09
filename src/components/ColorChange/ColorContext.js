import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();
export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');  
    const setTheme = (color) => {
        setBackgroundColor(color);
    };

    return (
        <ColorContext.Provider value={{ backgroundColor, setTheme }}>
            {children}
        </ColorContext.Provider>
    );
};
