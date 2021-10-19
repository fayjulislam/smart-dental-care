import React from 'react';
import './About.css';
import aboutImg from '../../image/about/about-4.jpg';
import Newslater from '../Home/Newslater/Newslater';

const About = () => {
    return (
        <>
            <section className="about mt-5 mb-5">
                <div className="container">
                    <div className="mb-5">
                        <h1 className="display-3 mb-2 text-center">About US</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="about-imgs">
                                <img className="about-img img-fluid" src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="about-text pt-3">
                                <h2 className="fw-bolder">Our Story</h2>
                                <p className="text-justify text-muted">
                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.

                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante.
                                </p>
                                <div>
                                    <h4 className="fw-bolder mb-3">Our Skills</h4>
                                    <p className="fw-bolder mb-2 text-muted">DENTAL PREVENTION</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">FLUORIDE TREATMENT</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">TOOTH EXTRACTION</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Root Canals</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '99%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">99%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Cosmetic Dentistry</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Dental Implants</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Whitening</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default About;