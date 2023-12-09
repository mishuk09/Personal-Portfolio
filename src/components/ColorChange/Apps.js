import React from 'react';
import ReactDOM from 'react-dom';
import './ColorChange.css';
import ColorChange from './ColorChange';
import CC from './CC';
import { ColorProvider } from './ColorContext';

const App = () => {
    return (
        <ColorProvider>
            <div className="app-container">
                <ColorChange />
                <CC />
            </div>
        </ColorProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
