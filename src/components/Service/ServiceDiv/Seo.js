import React from 'react';
import tic from '../img/tick.png';
import seo from '../img/seo.png';
import { Link } from 'react-router-dom';
import Button from '../../OthersComponent/Button/Button';
import { Fade } from 'react-reveal';

const Seo = () => {
    return (
        <div>
            <div className='container web-service-head pt-5'>
                <Fade bottom>
                    <div className='container fluid web-service-parents'>
                        <h3 className=''>Search Engine Optimization</h3>
                        <p> Boost your online visibility with expert SEO services tailored to elevate your website's ranking. Unlock higher search engine rankings, drive organic traffic, and dominate your industry's digital landscape with our proven strategies and meticulous optimization techniques </p>
                        <div className='tic'>
                            <div> <img src={tic} alt="" /><span className='px-2 '>Google Search Console</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '>Google Analytics</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '>Keyword</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '> Link </span></div>
                        </div>
                        <div className='mt-5 w-25'>
                            <Link to='/contactpage'>
                                <Button>Get SEO Service</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='web-service-parents2'>
                        <img src={seo} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Seo;