import React from 'react';
import './Solar.css';
import '../../Responsive.css';
import mishuk from '../img/mishuk2.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import java from '../img/java.png';
import github from '../img/github.png';

const Solar = () => {
    return (
        <div class="solar-system">
            <div id="sun">
                <img src={mishuk} alt="" />
            </div>
            <div class="orbit mercury-orbit"></div>
            {/* <div class="mercury-spin">
                <div id="mercury"></div>
            </div> */}
            <div class="orbit venus-orbit"></div>
            <div class="venus-spin">
                <div id="venus">
                    <img src={javascript} alt="" />
                </div>
            </div>
            <div class="orbit earth-orbit"></div>
            <div class="earth-spin">
                <div class="orbit moon-orbit"></div>
                <div class="moon-spin">
                    <div id="moon"><img src={github} alt="" /></div>
                </div>
                <img id="earth" src={react} alt="" />
            </div>
            <div class="orbit mars-orbit"></div>
            <div class="mars-spin">
                <div id="mars">
                    <img src={java} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Solar;