import {React} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CreateNewPassword = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/');
    };
    return(
        <>
            <h1 className={"mb-3"}>Create New Password</h1>
            <p className={"mb-5 text-muted"}>Your password must be different from previous used password.</p>
            <Form>
                <Row>
                    <Col md={12}>
                        <Form.Group col className={"form-group mb-3"} controlId="newpassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type={"password"}
                                placeholder="************"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group col className={"form-group mb-5"} controlId="confirmpassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type={"password"}
                                placeholder="************"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className={"form-group mb-3 text-center"}>
                            <Button onClick={login} className={"w-100"}>Set Password</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CreateNewPassword;