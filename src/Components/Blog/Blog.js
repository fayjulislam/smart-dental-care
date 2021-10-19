import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = (props) => {
    const { slug, title, short_description, image } = props.blog;
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
                        <div className="d-flex justify-content-center">
                            <Link to={`single-blog/${slug}`}>
                                <Button variant="success" className="fs-6 fw-bolder">Read the rest</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div >
    );
};

export default Blog;