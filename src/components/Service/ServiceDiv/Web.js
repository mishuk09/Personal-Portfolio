import React from 'react';
import './Web.css';
import webimg from '../img/webimg.png';
import tic from '../img/tick.png';
import { Link } from 'react-router-dom';
import Button from '../../OthersComponent/Button/Button';
import { Fade } from 'react-reveal';


const Web = () => {
    return (
        <div className='container web-service-head pt-5'>
            <Fade bottom>
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
                    <div className='mt-5 w-25'>
                        <Link to='/contactpage'>
                            <Button>Get Your First Website</Button>
                        </Link>
                    </div>
                </div>
                <div className='web-service-parents2'>
                    <img src={webimg} alt="" />
                </div>
            </Fade>
        </div>
    );
};

export default Web;