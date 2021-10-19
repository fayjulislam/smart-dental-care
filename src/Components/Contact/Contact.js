import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import Newslater from '../Home/Newslater/Newslater';
import contactImg from '../../image/contact/contact2.jpg';

const Contact = () => {
    return (
        <>
            <section className="form-container py-5">
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 mx-auto">
                            <h2 className="text-center display-3 mb-4">
                                Get In Touch!
                            </h2>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 col-md-6">
                            <img
                                src={contactImg}
                                alt="contactImg"
                                className="img-fluid w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <Form>
                                <Row>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="text-muted fw-semi-bold">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#AFAFAF", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phone" className="text-muted fw-semi-bold">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#AFAFAF", color: '#fff' }}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <label htmlFor="email" className="text-muted fw-semi-bold">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                            style={{ background: "#AFAFAF", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="address"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Address
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                            style={{ background: "#AFAFAF", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="message"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                                            rows="3"
                                            style={{ background: "#AFAFAF", color: '#fff' }}
                                        ></textarea>
                                    </div>
                                    <Button variant="success"
                                        onClick={(e) => e.preventDefault()}
                                        type="submit"
                                        className="p-3 fw-bold shadow-none"
                                    >
                                        Send Your Query
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default Contact;