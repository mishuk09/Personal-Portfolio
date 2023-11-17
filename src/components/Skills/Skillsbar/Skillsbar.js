import React from 'react';
import './Skillsbar.css'
import tick from '../../Home/img/tick.png';
import linkedin from '../img/linkedin.png';
import Skills from '../img/skills.png';
// import { AccumulationChartComponent } from '@syncfusion/ej2-react-charts';
import Chart from '../AcumulationChart/Chart';
import Barchart from '../Barchart/Barchart';
import Toolchart from '../ToolsChart/Toolchart';

const Skillsbar = () => {
    return (
        <div className='skillsbar'>
            <div className='skillsbar-div-head mt-2  '>
                <div className='skills-bar-head p-2 '>
                    <div className='skills-introimg ps-1 '><img src={Skills} alt="" /></div>
                    <div className='skills-bar-head11 ps-5'>
                        <div><img className=' ' src={tick} alt="" /> </div>
                        <div><img className=' ' src={tick} alt="" /></div>

                    </div>
                    <div className='  followglinkedin   '><img className=' ' src={linkedin} alt="" /> </div>
                </div>
                <div className='skills-child-main mt-2 px-3 pt-2'>
                    <p >Last Update:: <span className='lastupdate  '>1 Decembar 2023</span></p>
                    <div className='skills-headline-child'>
                        <div>
                            <p className='dsahead'>DSA</p>
                            <p className='dsahead1' >Number of Problem solve</p>
                            <p className='dsahead'>50</p></div>
                        <div> <p className='dsahead'>Github</p>
                            <p className='dsahead1'>Total Repositories</p>
                            <p className='dsahead'>50</p></div>
                        <div> <p className='dsahead'>Github</p>
                            <p className='dsahead1'>Total Contributions</p>
                            <p className='dsahead'>869</p></div>
                        <div> <p className='dsahead'>Github</p>
                            <p className='dsahead1'>Total Commits</p>
                            <p className='dsahead'>694</p></div>
                    </div>

                    <div className='bar-chart mt-3 '>
                        <div className='pro-barchart'>
                            <Chart></Chart>
                        </div>
                        <div className='language-barchart ps-2'>
                            <div className='bar-chart-child'>
                                <Barchart></Barchart>
                            </div>
                            <div className='bar-chart-child'>
                                <Toolchart></Toolchart>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Skillsbar;