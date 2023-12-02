import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactForm from '../Contact/ContactForm';
import contact from './img/contact.png';

const ContactPage = () => {
    const divStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 255, 0.2)', // Blue box shadow
        background: 'linear-gradient(90deg, rgba(1, 3, 19, 1) 0%, rgba(7, 11, 40, 1) 49%, rgba(66, 37, 115, 1) 100%)',
    };

    return (
        <div style={divStyle}>
            <div className='container  flex pt-7 mt-[65px]' >
                <div className=''>
                    <img className='w-100 px-10 mt-10' src={contact} alt="" />
                </div>
                <div className='w-[60%]'>
                    <ContactForm ></ContactForm>
                </div>

            </div>
        </div>

    );
};

export default ContactPage;
