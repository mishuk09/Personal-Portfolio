import React, { useState } from 'react';
import './Service.css';
import ui from './img/ui.png';
import we from './img/we.png';
import ne from './img/ne.png';
import se from './img/se.png';
import Uiux from './ServiceDiv/Uiux';
import Web from './ServiceDiv/Web';
import Net from './ServiceDiv/Net';
import Seo from './ServiceDiv/Seo';

const Service = () => {
    const [activetab, setActivetab] = useState(2);

    const handleTabClick = (id) => {
        setActivetab(id);
    };

    const tabItems = [
        {
            id: 1,
            title: 'UI/UX Design',
            description: 'Designing for People, Not Just Screens',
            img: ui
        },
        {
            id: 2,
            title: 'Web Development',
            description: 'Boost your online visibility with SEO expertise',
            img: we
        },
        {
            id: 3,
            title: '.NET Development',
            description: 'Bringing Ideas to Life Through Code',
            img: ne
        },
        {
            id: 4,
            title: 'Search Engine Optimization',
            description: 'Boost your online visibility with SEO expertise',
            img: se
        }
    ];

    return (
        <div className='container container-head-main'>
            <div className='service-head'>
                <h1>My App/Web Development<br />Services</h1>
            </div>
            <div className='cervice-parents mt-5'>
                <nav>
                    {tabItems.map((item) => (
                        <div
                            onClick={() => handleTabClick(item.id)}
                            className={`Link-div ${activetab === item.id ? 'active-tab' : ''}`}
                            key={item.id}
                        >
                            <div className='service-child p-2 hover:bg-slate-100'>
                                <div>
                                    <img src={`${item.img}`} alt="img" />
                                </div>
                                <div className='service-child-2 test ps-4 pt-3'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
            <div>
                {activetab === 2 ? <Web /> : activetab === 1 ? <Uiux /> : activetab === 3 ? <Net /> : <Seo />}
            </div>
        </div>
    );
};

export default Service;
