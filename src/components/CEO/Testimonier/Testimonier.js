import React from 'react';
import './Testimonier.css';
import rku from '../img/rku.webp';
import apple from '../img/apple.png';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from 'mdb-react-ui-kit';

const Testimonier = () => {
    return (
        <MDBContainer className="py-5 ">
            <div className='testimonier-div'><h3  >Testimonier</h3></div>
            <MDBRow className="d-flex justify-content-center">
                {/* Testimonial content */}
                <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                    <MDBCard className="testimonial-card">
                        <div className="card-up" style={{ backgroundColor: '#9d789b' }}>
                            <img src={rku} alt="" />
                        </div>
                        <div className="avatar mx-auto bg-blue">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle img-fluid"
                                alt="User Avatar"
                            />
                        </div>
                        <MDBCardBody className='name-div-12'>
                            <h4 className="mb-0">Shivangi Patel</h4>
                            <div className='pb-0 mb-0'>
                                <span>Assistant professor</span> <br />
                                <span className='span234'>Rk University,Gujarat,India.</span>
                            </div>

                            <hr />
                            <p className="dark-grey-text mt-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                    <MDBCard className="testimonial-card">
                        <div className="card-up" style={{ backgroundColor: '#9d789b' }}></div>
                        <div className="avatar mx-auto bg-white">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle img-fluid"
                                alt="User Avatar"
                            />
                        </div>
                        <MDBCardBody>
                            <h4 className="mb-4">Maria Smantha</h4>
                            <hr />
                            <p className="dark-grey-text mt-4">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol> */}
                {/* Repeat this structure for other testimonials */}
            </MDBRow>
        </MDBContainer>
    );
};

export default Testimonier;
