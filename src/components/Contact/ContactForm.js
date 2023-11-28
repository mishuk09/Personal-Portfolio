import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Contact.css'; // CSS file for styling
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
        recaptchaValue: '', // Captcha value will be stored here
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phoneNumber: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRecaptchaChange = (value) => {
        setFormData({
            ...formData,
            recaptchaValue: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation - check if required fields are filled
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = true;
        }
        if (!formData.email.trim()) {
            errors.email = true;
        }
        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = true;
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0 && formData.recaptchaValue) {
            // Form submission logic here
            console.log('Form submitted:', formData); // For example, logging form data to the console
        } else {
            // Handle the case when reCAPTCHA is not completed or required fields are empty
            console.log('Please fill all required fields and verify reCAPTCHA');
        }
    };

    return (
        <div className="contact-form-container">
            <div className='how-can mt-3 mb-5'> <h3>How Can I Help You?</h3></div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className='name-email flex w-full'>
                    <input
                        className='w-full  text-white'
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='ms-3 w-full   text-white'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='phoneinput flex'>
                    {/* <PhoneInput
                        className='mt-3 w-full   phoneinput'
                        name="phoneNumber"
                        placeholder="Phone"
                        value={formData.phoneNumber}
                        onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                        required
                    /> */}
                    <input
                        className='mt-3  w-full  text-white'
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='mt-3 ms-3 w-full   text-white'
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <textarea
                    className='mt-3 w-full text-area   text-white'
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <ReCAPTCHA
                    className="w-ful mt-3"
                    style={{ width: '200px' }}
                    sitekey="6Lc2eRgpAAAAAMwYZC85iVlVaybjSycxpv75zMBd" // Replace with your actual reCAPTCHA site key
                    onChange={handleRecaptchaChange}

                />

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
