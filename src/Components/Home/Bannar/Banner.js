import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="banner-text text-center">
                            <h1 className="pb-3 fw-bolder">A REASON TO SMILE</h1>
                            <p className="pb-3">We provide a gentle, comprehensive and personalised approach in dentistry.</p>
                            <Link to="/appointment">
                                <Button className="fs-6 fw-bolder text-white" variant="success">Get An Appointment</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;