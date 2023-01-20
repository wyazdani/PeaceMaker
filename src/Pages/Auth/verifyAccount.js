import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import ReactInputVerificationCode from 'react-input-verification-code';

const VerifyAccount = () => {
    const navigate = useNavigate();
    const forgetpassword = () => {
        navigate('/forgot-password');
    };

    return(
        <>
            <>
                <h1 className={"mb-3"}>Verify Your  Phone</h1>
                <p className={"text-muted mb-5"}>Verification code sent to your phone <br /> +1 234 567 8901</p>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupuemail">
                                <Form.Label>Verification code</Form.Label>
                                <ReactInputVerificationCode
                                    length={4}
                                />
                            </Form.Group>
                            <Form.Group className={"form-group mb-3 py-4 text-center"}>
                                Didn’t receive code ? <Link to={"#"} className={"text-orange text-decoration-underline"}>Resend OTP</Link>
                            </Form.Group>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-100"} onClick={forgetpassword}>Verify</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </>
        </>
    )
}

export default VerifyAccount;