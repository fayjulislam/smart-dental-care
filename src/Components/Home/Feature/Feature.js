import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Feature.css';
import feature1 from '../../../image/feature/certification.png';
import feature2 from '../../../image/feature/time.png';
import feature3 from '../../../image/feature/personal.png';
import feature4 from '../../../image/feature/like.png';

const Feature = () => {
    return (
        <section className="feature mb-5">
            <div className="container">
                <div className="row">
                    <CardGroup>
                        <Card className="feature-card">
                            <Card.Img width="50px" className="mx-auto p-1" src={feature1} />
                            <Card.Body>
                                <Card.Title>Certification</Card.Title>
                                <Card.Text>
                                    Corned beef pancetta ut, aliquip tri-tip turducken pork chop. Cow beef eu bacon jowl pastrami.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feature-card">
                            <Card.Img className="mx-auto p-1" src={feature2} />
                            <Card.Body>
                                <Card.Title>24/7 Opened</Card.Title>
                                <Card.Text>
                                    Dolor corned beef ipsum, nulla filet mignon flank in ut minim. Boudin landjaeger pork belly.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feature-card">
                            <Card.Img className="mx-auto p-1" src={feature3} />
                            <Card.Body>
                                <Card.Title>Professional Staff</Card.Title>
                                <Card.Text>
                                    Pork belly chicken nulla swine. Occaecat culpa dolor beef ribs adipisicing et tri-tip eu esse.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feature-card">
                            <Card.Img className="mx-auto p-1" src={feature4} />
                            <Card.Body>
                                <Card.Title>Fair Prices</Card.Title>
                                <Card.Text>
                                    Lorem chicken culpa, sed filet mignon chuck shank ground und in id laboris laborum short.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default Feature;