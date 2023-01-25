import React, { useState} from "react";
import {Form, InputGroup, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    /*const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };*/

    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate('/home');
    };

    return(
        <>
            <>
                <h1 className={"mb-3"}>Sign In</h1>
                <Form>
                    <Form.Group className={"form-group"} controlId="loginEmail">
                        <Form.Control
                            type={"text"}
                            placeholder="Username"
                            //required
                        />
                    </Form.Group>
                    <Form.Group className={"form-group"} controlId="loginpassword">
                        <Form.Control
                            type={"password"}
                            placeholder="Password"
                            //required
                        />

                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Link to={"/otp-phone"}>Forgot Password?</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Button type={"submit"} variant={"gradient d-block w-100"} onClick={goToDashboard}>Login</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        <Link to={"/SignUp"} className={"text-decoration-underline"}>Create Account</Link>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default Login;