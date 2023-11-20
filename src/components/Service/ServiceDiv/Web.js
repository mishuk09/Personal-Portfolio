import React from 'react';
import './Web.css';
import webimg from '../img/webimg.png';
import tic from '../img/tick.png';

const Web = () => {
    return (
        <div className='container web-service-head pt-5'>
            <div className='web-service-parents'>
                <h3 className=''>Web-Development</h3>
                <p>I specialize in creating fantastic websites that not only look great but also function smoothly. Let's collaborate to turn your concepts into a standout online presence, making your ideas shine on the web!</p>
                <div className='tic '>
                    <div> <img src={tic} alt="" /><span className='px-2 '>HTML</span></div>
                    <div> <img src={tic} alt="" /><span className='px-2 '>CSS</span></div>
                    <div> <img src={tic} alt="" /><span className='px-2 '>JAVASCRIPT</span></div>
                    <div> <img src={tic} alt="" /><span className='px-2 '>REACT JS</span></div>
                    <div> <img src={tic} alt="" /><span className='px-2 '>NODE JS</span></div>
                </div>
                <div className='website-button'><a href=""><button>Get Your First Website</button></a></div>
            </div>
            <div className='web-service-parents2'>
                <img src={webimg} alt="" />
            </div>
        </div>
    );
};

export default Web;