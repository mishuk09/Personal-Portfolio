import React from 'react';

const Button = (props) => {
    const { children, theme } = props;

    const buttonStyle = {
        backgroundColor: theme,
        color: 'white',

        // Add any other styles you need
    };

    return (
        <div>
            <button
                className='   btn-bg-color text-white hover:bg-blue-600 duration-200 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 p-2 text-sm rounded-full ps-3 pe-3'
                style={buttonStyle}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
