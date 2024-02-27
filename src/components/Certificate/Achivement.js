import React from 'react';
import './Achivement.css'
import '../Responsive.css';
import sort from '../Home/img/sort.png'
import college from '../Home/img/college.svg';
import expert from '../Home/img/expert.svg';
import programming from '../Home/img/programming.svg';
import projects from '../Home/img/projects.svg';
import linkedinfollow from '../Home/img/linkedinfollow.gif'
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Achivement = () => {
    return (
        <div>
            <div className='     '>
                <div className='sort-intro'>
                    <div className='sort-intro-headline p-1 '>
                        <div className='sort-intro-img ps-1'><img src={sort} alt="" className='jhdsahdf' /></div>
                        <div className='w-[50%] h-10 marquee-div rounded bg-blue-400 p-2'>
                            <Marquee
                                speed={40}
                                gradient={false}
                                pauseOnHover={false}
                                direction='left'
                                className='marquee-div1 font-nunito'
                                pauseOnClick={false}
                            >
                                Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                            </Marquee>
                        </div>
                        <div className='linkedin-follow h-10 '><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><img className='pt-[3px]' src={linkedinfollow} alt="img" /></a></div>
                    </div>
                    <div className='  mt-2'>

                        <div class="card">
                            <div class="paleta">
                                {/* <div class="circle">
                                    <div class="component">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            class="bi bi-palette"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                            ></path>
                                            <path
                                                d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div> */}
                                <div class="cores cor1">
                                    {/* <div class="div1"><span class="func">Hover me</span></div> */}
                                    <div class="div2">
                                        <div class="component">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                class="bi bi-palette"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                                ></path>
                                                <path
                                                    d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <div class="nome">0E3746</div> */}
                                </div>
                                <div class="cores cor2">
                                    {/* <div class="div3"></div> */}
                                    <div class="div4">
                                        <div class="component">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                class="bi bi-palette"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                                ></path>
                                                <path
                                                    d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <div class="nome">EAE8DC</div> */}
                                </div>
                                <div class="cores cor3">
                                    <div class="div5"></div>
                                    <div class="div6">
                                        <div class="component">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                class="bi bi-palette"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                                ></path>
                                                <path
                                                    d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <div class="nome">F4F2EC</div> */}
                                </div>
                                <div class="cores cor4">
                                    <div class="div7"></div>
                                    <div class="div8">
                                        <div class="component">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                fill="currentColor"
                                                class="bi bi-palette"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                                ></path>
                                                <path
                                                    d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <div class="nome">BE2623</div> */}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;
