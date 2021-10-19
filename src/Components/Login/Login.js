import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const emailRedirect = location?.state?.from || "/";
    const googleRedirect = location?.state?.from || "/";
    const { getEmail, getPassword, signInWithEmail, error, setUser, signinGoogle, passwordReset, setIsLoading } = useAuth();
    const login = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setUser(result.user)
                Swal.fire(
                    "Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(emailRedirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handlePasswordreset = () => {
        passwordReset()
            .then((result) => {
                Swal.fire(
                    "Good job!",
                    "Password reset Send SuccessFull!",
                    "success"
                )
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const lock = <FontAwesomeIcon icon={faLock} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div className="container" style={{ marginTop: "5rem" }}>
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center mb-5 text-secondary">Please Login</h2>
                    <p className="text-danger text-center">{error}</p>
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" id="formBasicemail">
                            <Form.Label htmlFor="inlineFormInputGroup1" visuallyHidden>
                                Emaill Address
                            </Form.Label>
                            <InputGroup className="mb-2 rounded">
                                <InputGroup.Text>{envelope}</InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" id="formBasicPassword">
                            <Form.Label htmlFor="inlineFormInputGroup2" visuallyHidden>
                                Password
                            </Form.Label>
                            <InputGroup className="mb-2 rounded">
                                <InputGroup.Text>{lock}</InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-name"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <Form.Group className="mb-3" id="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicCheckbox">
                                <Button onClick={handlePasswordreset} variant="warning">Forgot Password</Button>
                            </Form.Group>
                        </div>
                        <Button variant="success" className="w-100 fw-bold" type="submit">
                            {arrow} Login
                        </Button>
                    </Form>
                    <NavLink className="text-decoration-none" to="/register">
                        <p className="text-center mt-3 text-dark fw-bolder">New Member? Please Create An Account!</p>
                    </NavLink>
                    <div className="mt-3 text-center fs-4 fw-bolder text-muted">---Or---</div>
                    <div className="mt-3 mb-3 text-center fs-4 fw-bolder" >
                        <Button onClick={handleGoogleLogin} variant="danger"> {google}</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;