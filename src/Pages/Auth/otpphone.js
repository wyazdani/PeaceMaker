import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SendOTPPhone = () => {
    const navigate = useNavigate();
    const verifyAccount = () => {
        navigate('/verify-account');
    };
    return(
        <>
            <>
                <h1 className={"mb-3"}>Continue With Phone</h1>
                <p className={"text-muted mb-5"}>You will receive 4 digit code to verify account</p>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-5"} controlId="signupphonenumber">
                                <Form.Label>Mobile Phone</Form.Label>
                                <Form.Control type={"tel"}  placeholder="+233 1899 3890 12899" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-100"} onClick={verifyAccount}>Continue</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </>
        </>
    )
}

export default SendOTPPhone;