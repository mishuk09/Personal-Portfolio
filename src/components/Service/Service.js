import React from 'react';
import './Service.css';
import ui from './img/ui.svg';
import web from './img/web.svg';
import net from './img/net.svg';
import seo from './img/seo.svg';
import Uiux from './ServiceDiv/Uiux';
import Web from './ServiceDiv/Web';
import Net from './ServiceDiv/Net';
import Seo from './ServiceDiv/Seo';
import { useState } from 'react';

const Service = () => {
    const [activetab, setActivetab] = useState(2);
    return (
        <div className='container container-head-main'>
            <div className='service-head'>
                <h1>My App/Web Development
                    <br />Services</h1>
            </div>
            <div className='cervice-parents mt-5'>
                <nav >
                    {
                        tabItems.map((item) => {
                            return <div onClick={() => setActivetab(item.id)} className='Link-div' key={item.id} >
                                <div className='service-child p-2'>
                                    <div>
                                        <img src={`${item.img}`} alt="img" />
                                    </div>
                                    <div className='service-child-2  test ps-4 pt-3'>
                                        <h3> {item.tittle}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div >
                        })
                    }
                </nav>
            </div>
            <>
                {activetab === 2 ? <Web /> : activetab === 1 ? <Uiux /> : activetab === 3 ? <Net /> : <Seo />}
            </>
        </div>
    );
};

export default Service;


const tabItems = [

    {
        id: 1,
        tittle: 'UI/UX Design',
        description: 'Designing for People, Not Just Screens',
        img: ui
    },
    {
        id: 2,
        tittle: 'Web-Development',
        description: 'Boost your online visibility with SEO expertise',
        img: web
    },
    {
        id: 3,
        tittle: '.NET Development',
        description: 'Bringing Ideas to Life Through Code',
        img: net
    },
    {
        id: 4,
        tittle: 'Search Engine Optimization',
        description: 'Boost your online visibility with SEO expertise',
        img: seo
    }
]