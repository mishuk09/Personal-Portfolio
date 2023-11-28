import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactForm from '../Contact/ContactForm';
import contactform from './contactform.jpg';

const ContactPage = () => {
    const divStyle = {
        position:'relative',
        width: '100%',
        height: '100vh',
        // background: '#000',
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${contactform})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(90deg, rgba(1, 3, 16, 1) 0%, rgba(1, 3, 16, 1) 49%, rgba(17, 19, 70, 1) 100%), url(${contactform})`,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 255, 0.2)', // Blue box shadow

        // background: `rgb(1, 3, 16)`;
        // background: linear - gradient(90deg, rgba(1, 3, 16, 1) 0 %, rgba(1, 3, 16, 1) 49 %, rgba(17, 19, 70, 1) 100 %);
        // // background: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        // filter: 'blur(1px)',
    };
    return (
        <div className='pt-7' style={divStyle}>
            {/* <Navbar></Navbar> */}
            <ContactForm ></ContactForm>
        </div>
    );
};

export default ContactPage;
