import React from 'react';
import './Service.css';
import ui from './img/ui.svg';
import web from './img/web.svg';
import net from './img/net.svg';
import seo from './img/seo.svg';

const Service = () => {
    return (
        <div className='container'>
            <div className='service-head'>
                <h1>My App/Web Development
                    <br />Services</h1>
            </div>
            <div className='cervice-parents mt-5'>
                <div className='service-child p-2'>
                    <div>
                        <img src={ui} alt="" />
                    </div>
                    <div className='service-child-2 ps-4 pt-3'>
                        <h3>UI/UX Design</h3>
                        <p>Designing for People, Not Just Screens</p>
                    </div>
                </div>
                <div className='service-child  p-2 '>
                    <div>
                        <img src={web} alt="" />
                    </div>
                    <div className='service-child-2 ps-4 pt-3' >
                        <h3>Web-Development</h3>
                        <p>Bringing Ideas to Life Through Code</p>
                    </div>
                </div>
                <div className='service-child p-2'>
                    <div>
                        <img src={net} alt="" />
                    </div>
                    <div className='service-child-2 ps-4 pt-3'><h3>.NET Development</h3>
                        <p>Bringing Ideas to Life Through Code</p>
                    </div>
                </div>
                <div className='service-child p-2'>
                    <div>
                        <img src={seo} alt="" />
                    </div>
                    <div className='service-child-2 ps-4 pt-3'><h3>Search Engine Optimization</h3>
                        <p>Boost your online visibility with SEO expertise</p></div>
                </div>
            </div>


            
        </div>
    );
};

export default Service;