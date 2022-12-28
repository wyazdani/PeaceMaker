import {React, useState} from "react";
import {Form, InputGroup, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate('/dashboard');
    };

    return(
        <>
            <>
                <h1 className={"mb-5"}>Sign In</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"form-group"} controlId="loginEmail">
                        <Form.Control
                            type={"text"}
                            placeholder="Username"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={"form-group"} controlId="loginpassword">
                        <Form.Control
                            type={"password"}
                            placeholder="Password"
                            required
                        />

                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Link to={"/forgot-password?"}>Forgot Password?</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Button type={"submit"} variant={"gradient d-block w-100"} onSubmit={goToDashboard}>Login</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        Don’t have an account? <Link to={"/SignUp"} className={"text-green"}>Create Account</Link>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default Login;