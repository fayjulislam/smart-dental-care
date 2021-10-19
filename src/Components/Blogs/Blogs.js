import React from 'react';
import { Row } from 'react-bootstrap';
import UseBlog from '../../Hooks/UseBlog';
import Blog from '../Blog/Blog';
import Newslater from '../Home/Newslater/Newslater';

const Blogs = () => {
    const [blogs] = UseBlog();
    return (
        <>
            <section className="mb-5 mt-5">
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h2 className="text-center display-3">Our Blogs</h2>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            blogs.map(bl => (<Blog
                                key={bl.id}
                                blog={bl}
                            ></Blog>))
                        }
                    </Row>
                </div>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default Blogs;