import React from 'react';
import tic from '../img/tick.png';
import uiux from '../img/uiux.png';
import { Link } from 'react-router-dom';
import Button from '../../OthersComponent/Button/Button';
import { Fade } from 'react-reveal';

const Uiux = () => {
    return (
        <div className='container web-service-head pt-5'>
            <Fade bottom>
                <div className='container fluid web-service-parents'>
                    <h3 className=''>UI/UX Design & Development</h3>
                    <p className='text-justify'> As a designer and developer, I craft exceptional websites that seamlessly blend wonderfull visuals with flawless functionality. <br />
                        I will convert your designs into high-quality websites, ensuring they capture attention and provide an exceptional user experience. I handle the entire process, merging design aesthetics with robust development.
                    </p>
                    <div className='tic '>
                        <div> <img src={tic} alt="" /><span className='px-2 '>PSD</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '>FIGMA</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '>CANVA</span></div>
                        <div> <img src={tic} alt="" /><span className='px-2 '>AI</span></div>
                    </div>
                    <div className='mt-5 w-25'>
                        <Link to='/contactpage'>
                            <Button>Get Your First Website</Button>
                        </Link>
                    </div>
                </div>
                <div className='web-service-parents2 xs:mt-20'>
                    <img src={uiux} alt="" />
                </div>
            </Fade>
        </div>
    );
};

export default Uiux;