import React from 'react';
import tic from '../img/tick.png';
import seo from '../img/seo.png';

const Seo = () => {
    return (
        <div>
            <div className='container web-service-head pt-5'>
                <div className='container fluid web-service-parents'>
                    <h3 className=''>Search Engine Optimization</h3>
                    <p> Boost your online visibility with expert SEO services tailored to elevate your website's ranking. Unlock higher search engine rankings, drive organic traffic, and dominate your industry's digital landscape with our proven strategies and meticulous optimization techniques </p>
                    <div className='tic'>
                        <div> <img src={tic} alt="" /><span className='px-2 '>Google Search Console</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '>Google Analytics</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '>Keyword</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '> Link </span></div>

                    </div>
                    <div className='website-button'><a href=""><button> Let's Talk</button></a></div>
                </div>
                <div className='web-service-parents2'>
                    <img src={seo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Seo;