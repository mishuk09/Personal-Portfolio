import React from 'react';
import './Service.css';
import ui from './img/ui.svg';
import web from './img/web.svg';
import net from './img/net.svg';
import seo from './img/seo.svg';
import { Link, Route, Routes } from 'react-router-dom';

import Uiux from './ServiceDiv/Uiux';
import Web from './ServiceDiv/Web';
import Net from './ServiceDiv/Net';
import Seo from './ServiceDiv/Seo';

const Service = () => {
    return (
        <div className='container'>



            <div className='service-head'>
                <h1>My App/Web Development
                    <br />Services</h1>
            </div>


            <div className='cervice-parents mt-5'>

                <nav>
                    <Link to="uiux">
                        <div className='service-child p-2'>
                            <div>
                                <img src={ui} alt="" />
                            </div>
                            <div className='service-child-2 ps-4 pt-3'>
                                <h3>UI/UX Design</h3>
                                <p>Designing for People, Not Just Screens</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className='service-child  p-2 '>
                            <div>
                                <img src={web} alt="" />
                            </div>
                            <div className='service-child-2 ps-4 pt-3' >
                                <h3>Web-Development</h3>
                                <p>Bringing Ideas to Life Through Code</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="net">
                        <div className='service-child p-2'>
                            <div>
                                <img src={net} alt="" />
                            </div>
                            <div className='service-child-2 ps-4 pt-3'><h3>.NET Development</h3>
                                <p>Bringing Ideas to Life Through Code</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="seo">
                        <div className='service-child p-2'>
                            <div>
                                <img src={seo} alt="" />
                            </div>
                            <div className='service-child-2 ps-4 pt-3'><h3>Search Engine Optimization</h3>
                                <p>Boost your online visibility with SEO expertise</p></div>
                        </div>
                    </Link>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Web></Web>}></Route>
                <Route path='/uiux' element={<Uiux></Uiux>}></Route>
                <Route path='/net' element={<Net></Net>}></Route>
                <Route path='/seo' element={<Seo></Seo>}></Route>
            </Routes>

        </div>
    );
};

export default Service;