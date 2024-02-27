import React from 'react';
import './Solar.css';
import '../../Responsive.css';
import mishuk from '../img/mishuk2.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import java from '../img/java.webp';
import github from '../img/github.png';

const Solar = () => {
    return (
        <div className="solar-system">
            <div id="sun">
                <img src={mishuk} alt="" />
            </div>
            <div className="orbit mercury-orbit"></div>
            {/* <div className="mercury-spin">
                <div id="mercury"></div>
            </div> */}
            <div className="orbit venus-orbit"></div>
            <div className="venus-spin">
                <div id="venus">
                    <img src={javascript} alt="" />
                </div>
            </div>
            <div className="orbit earth-orbit"></div>
            <div className="earth-spin">
                <div className="orbit moon-orbit"></div>
                <div className="moon-spin">
                    <div id="moon"><img src={github} alt="" /></div>
                </div>
                <img id="earth" src={react} alt="" />
            </div>
            <div className="orbit mars-orbit"></div>
            <div className="mars-spin">
                <div id="mars">
                    <img src={java} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Solar;