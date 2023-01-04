import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import profile_2 from "../../Images/s2.jpg"
import { useNavigate } from 'react-router-dom';

const ExploreProvider = () => {
    const navigate = useNavigate();
    const MapSec = () => {
        navigate('/map-show');
    };
    return (
        <>
            <HeaderTop />
            <Card className={classes.main}>
                <Card.Body>
                    <Row className='text-center justify-content-center '>
                        <h2> Explore a Provider</h2>
                        <Col md={6}  className='align-items-center'>
                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search.."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                            </Form>
                        </Col>
                    </Row>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={8} >
                            <Row className='g-4 '>
                                <Col md={6} >
                                    <Card onClick={MapSec} className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Thomas Edison</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Steven Youngster</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Steven Youngster</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Steven Youngster</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Fred Alfred</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Fred Alfred</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Jayson Smithens</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Jayson Smithens</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Jayson Smithens</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Jayson Smithens</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Steven Youngster</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className={classes.inner_body}>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className={classes.profile_img}>
                                                    <img src={profile_2} alt="" />
                                                </div>
                                                <strong> <h4>Peter Parker</h4></strong>
                                                <span><i class="fal fa-comment-alt-lines"></i></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}

export default ExploreProvider