import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Test = () => {
    const testimonialData = [
        {
            name: 'Williamson',
            role: 'Web Developer',
            imgSrc: 'images/img-1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        },
        {
            name: 'Kristina',
            role: 'Web Designer',
            imgSrc: 'images/img-2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        },
        {
            name: 'Steve Thomas',
            role: 'Web Developer',
            imgSrc: 'images/img-3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        },
        // Add more testimonial data objects as needed
    ];

    const renderTestimonials = () => {
        return testimonialData.map((testimonial, index) => (
            <div className="testimonial" key={index}>
                <div className="pic">
                    <img src={testimonial.imgSrc} alt={`Testimonial ${index + 1}`} />
                </div>
                <p className="description">{testimonial.description}</p>
                <div className="testimonial-profile">
                    <h3 className="title">{testimonial.name}</h3>
                    <span className="post">{testimonial.role}</span>
                </div>
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        items={2}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 2,
                            },
                        }}
                    >
                        {renderTestimonials()}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Test;
