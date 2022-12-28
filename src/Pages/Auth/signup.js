import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import { useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const sendOTP = () => {
        navigate('/signup/otp');
    };

    return(
        <>
            <>
                <h1 className={"mb-5"}>Signup</h1>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupfirstname">
                                <Form.Label>Admin First Name</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Username" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupulastname">
                                <Form.Label>Admin Last Name</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Last Name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupuemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Email" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupphonenumber">
                                <Form.Label>Mobile Phone</Form.Label>
                                <Form.Control type={"tel"}  placeholder="+233 1899 3890 12899" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group col className={"form-group mb-5"} controlId="signuppassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type={"password"}
                                    placeholder="************"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-50"} onClick={sendOTP}>Sign Up</Button>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <div className={"formDivider my-3"}><span>OR</span></div>
                        </Col>
                        {/*<Col md={12}>
                            <Form.Group className={"form-group text-center"}>
                                Don’t have an account? <Link to={"#"} className={"text-green"}>Conatact Support</Link>
                            </Form.Group>
                        </Col>*/}
                        <Col md={12}>
                            <Form.Group className={"form-group text-center"}>
                                <Button variant={"outline-light sm-square m-1 text-dark"}>
                                    <i className={"fab fa-google"}></i>
                                </Button>
                                <Button variant={"outline-light sm-square m-1 text-dark"}>
                                    <i className={"fab fa-facebook"}></i>
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </>
        </>
    )
}

export default SignUp;