import React from 'react';
import './Service.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { slug, title, short_description, image } = props.service;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img className="img" variant="top" src={image} />
                    <Card.Body className="service-body">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <Link to={`/single-service/${slug}`}>
                                <Button variant="success" className="fs-6 fw-bolder">See Details</Button>
                            </Link>
                            <Link to="/appointment">
                                <Button variant="success" className="fs-6 fw-bolder">Appointment</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;