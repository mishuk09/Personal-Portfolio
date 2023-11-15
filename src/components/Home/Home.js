import React from 'react';
import './Home.css'
import { faGithub, faFacebook, faLinkedin, faTwitch, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import homelogo from './img/homelogo.png';

const Home = () => {
    return (
        <div className='container home-div'>

            <div className='name-div'>

                <p className='name-p'>Welcome to my Portfolio</p>
                <div className='name-div22'>
                    <p>I'm</p>
                    <h1>MAHADI HASAN <span>MISHUK</span> </h1>
                </div>
                <p>Junior web Developer</p>
                <p  >I am Sincare,responsible,confident,dedicated,down to earth & trustworthly.Currently I am studying about Web-development as well as Softwer Engineering.</p>

                <div className=' icon-div'>
                    <div> <img src={homelogo} alt="" /></div>
                    <div className='social-link  '>
                        {/* <div><FontAwesomeIcon icon={faHome} />  </div> */}
                        <div className='m-10'><FontAwesomeIcon icon={faGithub} />  </div>
                        <div><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div><FontAwesomeIcon icon={faFacebook} /></div>
                        <div><FontAwesomeIcon icon={faTwitch} /></div>
                    </div>
                </div>
            </div>


            <div className='pic-div'>
                <h1 className=" text-sm text-gray-500 ">
                    Hello world!
                </h1>
            </div>
        </div>
    );
};

export default Home;