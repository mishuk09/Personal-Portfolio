import React from 'react';
import tic from '../img/tick.png';
import net from '../img/net.png';
import { Link } from 'react-router-dom';
import Button from '../../OthersComponent/Button/Button';
import { Fade } from 'react-reveal';

const Net = () => {
    return (
        <div>
            <div className='container web-service-head pt-5'>
                <Fade bottom>
                    <div className='container fluid web-service-parents'>
                        <h3 className=''>.NET Development</h3>
                        <p>I specialize in creating fantastic Windows Application that not only look great but also function smoothly. Let's collaborate to turn your concepts into a standout online presence, making your ideas shine on the web! <br />
                            I handle the entire process, merging design aesthetics with robust development.
                        </p>
                        <div className='tic '>
                            <div> <img src={tic} alt="" /><span className='px-2 '>C#</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '>SQL</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '>.NET Framework</span></div>
                            <div> <img src={tic} alt="" /><span className='px-2 '>ASP.NET MVC/Core</span></div>
                        </div>
                        <div className='mt-5 w-25'>
                            <Link to='/contactpage'>
                                <Button>Get Window Application</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='web-service-parents2'>
                        <img src={net} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Net; <h1>This is .NET</h1>