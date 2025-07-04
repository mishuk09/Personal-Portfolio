import React from 'react';
import '../../index.css'
import '../Responsive.css';
import certificate from './img/certificate.png';
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';
import four from './img/four.jpg';
import five from './img/five.jpg';
import six from './img/six.jpg';
import seven from './img/seven.jpg';
import eight from './img/eight.jpg';
import nine from './img/nine.jpg';
import cisco from './img/cisco.png';
import coursera from './img/coursera.png';
import infosys from './img/Infosys.png';
import gatelogo from './img/gatelogo.png';
import { Slide } from 'react-reveal';



const Certificate = () => {
    return (

        <div id="certificate" className="  certification-main    ">
            <div className='certificate-img pt-3 pb-3'>
                <img src={certificate} alt="" />
                <h1>Certificate</h1>
            </div>
            <div className="certi-div bg-slate-300">
                <div className="certi-div1"><img src={cisco} alt="" className="img1" /></div>
                <div className="certi-div3"><img src={infosys} alt="" className="img3" /></div>
                <div className="certi-div4"><img src={coursera} alt="" className="img4" />
                </div>
                <div className="certi-div5 "><img src={gatelogo} alt="" className="img5" /></div>
            </div>
            <div id="slideshow">
                <div className="entire-content">
                    <div className="content-carrousel">
                        <figure className="shadow-certificate"> <img src={one} alt="" /> </figure>
                        <figure className="shadow-certificate"> <img src={two} alt="" /> </figure>
                        <figure className="shadow-certificate"> <img src={three} alt="" />  </figure>
                        <figure className="shadow-certificate"> <img src={four} alt="" /> </figure>
                        <figure className="shadow-certificate"> <img src={five} alt="" /> </figure>
                        <figure className="shadow-certificate"> <img src={six} alt="" />  </figure>
                        <figure className="shadow-certificate"> <img src={seven} alt="" /> </figure>
                        <figure className="shadow-certificate"><img src={eight} alt="" /> </figure>
                        <figure className="shadow-certificate"> <img src={nine} alt="" /> </figure>
                    </div>
                </div>
            </div>
            <div className='flex certificate-flex-box py-2'>
                <div className="shad12"> <img src={nine} alt="" /> </div>
                <div className="shad12"><img src={eight} alt="" /> </div>
                <div className="shad12"> <img src={one} alt="" /> </div>
                <div className="shad12"> <img src={two} alt="" /> </div>
                <div className="shad12"> <img src={three} alt="" /> </div>
                <div className="shad12"> <img src={four} alt="" /> </div>
                <div className="shad12"> <img src={five} alt="" /> </div>
                <div className="shad12"> <img src={six} alt="" /> </div>
                <div className="shad12"> <img src={seven} alt="" /> </div>

            </div>

            <div className=" container pt-0 mt-5 mb-5 certificate-description">
                <Slide left>
                    <div className="courseDetils1">
                        <h3>JAVA</h3>
                        <p className="px-2">I have completed JAVA certificate course with 70% marks.Currently i am doing DSA with
                            JAVA
                        </p>
                    </div>
                </Slide>
                <Slide left>
                    <div className="courseDetils2">
                        <h3>Python</h3>
                        <p className="px-2">Python is one of the most polular language.I have completed PYTHON Intermediate course
                            with 75% marks.
                        </p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="courseDetils3">
                        <h3>HTML,CSS,JS</h3>
                        <p className="px-2">I want to be a Full Stack Web Developer,I have completed HTML CSS & JS coursers from
                            INFOSYS limited with 80%,60%,65% marks.</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="courseDetils3">
                        <h3>Google Analytics</h3>
                        <p className="px-2">I have done Google Analytics course from COURSERA with 75% marks.</p>
                    </div>
                </Slide>

            </div>
            {/* <div className='wave1 '>
                <img className=' img645' src={wave} alt="" />
                <Achivement/>
            </div> */}
        </div >

    );
};

export default Certificate;