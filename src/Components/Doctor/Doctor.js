import React from 'react';
import './Doctor.css';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Doctor = (props) => {
    const { name, designation, image } = props.doctor;
    // react FontAwesomeIcon icon 
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img className="dc-img mx-auto p-3" variant="top" src={image} />
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {designation}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="social-icon text-center">
                            <a href="#" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;