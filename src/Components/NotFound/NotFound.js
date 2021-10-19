import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import notFound from '../../image/404/404.png';

const NotFound = () => {
    return (
        <>
            <div className="mt-5">
                <img src={notFound} alt="Page Not Found" />
            </div>
            <div className="mt-5">
                <Link to="/">
                    <Button variant="success" className="fs-5 fw-bolder">
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;