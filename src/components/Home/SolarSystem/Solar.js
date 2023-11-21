import React from 'react';
import './Solar.css'

const Solar = () => {
    return (
        <div class="solar-system">
            <div id="sun"></div>

            <div class="orbit mercury-orbit"></div>
            <div class="mercury-spin">
                <div id="mercury"></div>
            </div>

            <div class="orbit venus-orbit"></div>
            <div class="venus-spin">
                <div id="venus"></div>
            </div>

            <div class="orbit earth-orbit"></div>
            <div class="earth-spin">
                <div class="orbit moon-orbit"></div>
                <div class="moon-spin">
                    <div id="moon"></div>
                </div>

                <img id="earth" src="https://dl.dropboxusercontent.com/u/55240438/temp_site_links/solarsystemcss/earth_small_150.jpg" />
            </div>

            <div class="orbit mars-orbit"></div>
            <div class="mars-spin">
                <div id="mars"></div>
            </div>
        </div>
    );
};

export default Solar;