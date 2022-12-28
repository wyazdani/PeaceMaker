import {React, useState} from "react";
import {Form, InputGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

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

    return(
        <>
            <>
                <h1 className={"mb-5"}>Sign In</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"form-group mb-3"} controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="loginEmail"><i className="fas fa-user text-muted"></i></InputGroup.Text>
                            <Form.Control
                                type={"email"}
                                placeholder="Username"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className={"form-group mb-3"} controlId="loginpassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="loginpassword"><i className="fas fa-lock text-muted"></i></InputGroup.Text>
                            <Form.Control
                                type={"password"}
                                placeholder="Password"
                                required
                            />

                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Link to={"/forgot-password?"}>Forgot Password?</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Button type={"submit"} className={"d-block w-100"}>Login</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        Don’t have an account? <Link to={"#"} className={"text-green"}>Conatact Support</Link>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default Login;