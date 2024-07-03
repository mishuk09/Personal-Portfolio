import React, { useRef, useState } from 'react';
import 'react-phone-number-input/style.css';
import '../../index.css'
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import '../Responsive.css';

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

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

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
            emailjs.sendForm('service_p3jakff', 'template_cszjdjo', form.current, 'uELA4WD47qGEFXLdA')
                .then((result) => {
                    window.alert('Email Sent Successfully');
                    setFormData({
                        name: '',
                        email: '',
                        phoneNumber: '',
                        subject: '',
                        message: '',
                        recaptchaValue: '',
                    });
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                });
        } else {
            console.log('Please fill all required fields and verify reCAPTCHA');
        }
    };

    return (
        <div className="contact-form-container">
            <div className='how-can mb-5'> <h3>How Can I Help You?</h3></div>
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className='name-email flex w-full'>
                    <input
                        className='w-full focus:outline-none bg-slate-900 text-white'
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='ms-3 w-full focus:outline-none bg-slate-900 text-white'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='phoneinput flex'>
                    <input
                        className='mt-3 w-full focus:outline-none bg-slate-900 text-white'
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className='mt-3 ms-3 w-full focus:outline-none bg-slate-900 text-white'
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <textarea
                    className='mt-3 w-full text-area focus:outline-none bg-slate-900 text-white'
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <ReCAPTCHA
                    className="w-ful mt-3"
                    style={{ width: '200px' }}
                    sitekey="6Lc2eRgpAAAAAMwYZC85iVlVaybjSycxpv75zMBd"
                    onChange={handleRecaptchaChange}
                />
                <button className='bg-slate-900' type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
