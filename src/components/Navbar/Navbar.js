import React from 'react';
import './Navbar.css';
import logo from './logo/logo.png';
import { Link, Navigate, Route, Routes, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faBatteryFull, faCertificate, faCode, faAddressBook, faComment } from '@fortawesome/free-solid-svg-icons'
import DarkMode from '../DarkMode/DarkMode';
import Popup from 'reactjs-popup';
import ContactForm from '../Contact/ContactForm';
import ContactPage from '../ContactPage/ContactPage';



const Navbar = () => {


    return (

        <div className='header'>
            <div className='container navdiv'>
                <div >
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav>

                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faHome} /></p>
                            <Link className='link' >Home</Link>
                        </div>

                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <Link className='link' >About</Link></div>
                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faBatteryFull} /></p>
                            <Link className='link' >Skills</Link></div>
                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faCertificate} /></p>
                            <Link className='link' >Certificate</Link></div>
                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faCode} /> </p>
                            <Link className='link' >Projects</Link></div>
                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faComment} /></p>
                            <Link className='link' >Testimonier</Link></div>
                        <div className='homeDiv'>
                            <p><FontAwesomeIcon icon={faAddressBook} /></p>
                            <Link className='link' >Contact</Link></div>

                    </nav>
                </div>
                <div className='nevigate-button'>

                    <div>
                        <Link to="/contactpage"> <button >Get Free Consultation</button></Link>
                    </div>


                    <div><DarkMode></DarkMode></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
