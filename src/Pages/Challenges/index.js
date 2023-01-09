import HeaderTop from 'Components/Header'
import classes from "./index.module.scss";
import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import profile from "../../Images/login.png"
import { useNavigate } from 'react-router-dom';

const Challenges = () => {
    const navigate = useNavigate();
    const NextScreen = () => {
        navigate('/next-screen');
    };
    return (
        <>
            <HeaderTop />
            <Row className='m-5 justify-content-start'>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Row className={classes.inner_styling}>
                                <Col md={6} className='d-flex'>
                                    <i class="fas fa-pennant"></i>
                                    <p><strong>Challenge Points</strong></p>
                                </Col>
                                <Col md={6} className='d-flex justify-content-end'>
                                    <h3>20</h3>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <div onClick={NextScreen} className={classes.Habit_background}>
                        <Row>
                            <Col md={6} >
                                <div className={classes.challenges}>
                                    <i class="icon-Unfil-challenge"></i>
                                   <h3>Challenges</h3>
                                    <h4> 1 / 70</h4>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={profile} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6} className='boxes_rounded' >
                    <div className='m-3'>
                        <h3>Challenge History</h3>
                        <div className={classes.record}>

                            <Row className=''>

                                <Col md={8}>

                                    <h4>Level 1: Find 2 Wind Chimes</h4>
                                    <p>Duration: <strong>1 Day</strong></p>
                                    <p>Points: <strong>1 Day Point</strong></p>
                                    <p className={classes.text_color}>Goal Completed</p>

                                </Col>
                                <Col md={4}>
                                {['checkbox'].map((type) => (
                                    <div key={type} className='d-flex justify-content-end'>
                                    <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} />
                                        </Form.Check>
                                    </div>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Challenges