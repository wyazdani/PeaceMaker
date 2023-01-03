import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import profile from "Images/sign-in-left-img.png"
import classes from "./index.module.scss";
import HeaderTop from 'Components/Header';
import PopUp from '../PopUp';

const ClickSection = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <HeaderTop />
            <Row className='m-3'>
                <Col lg={6} >
                    <div className={classes.Habit_background} >
                        <Row>
                            <Col xl={6} lg={12} md={6}>
                                <div className={classes.position}>
                                    <h1>50%</h1>
                                    <h2>Accomplished</h2>
                                    <p>Ain’t no mountain high enough to accomplish success</p>
                                </div>
                            </Col>
                            <Col xl={6} lg={12} md={6}>
                                <div className={classes.profile_img}>
                                    <img src={profile} alt="" />
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <Row className={classes.boxes}>
                        <Col className={classes.mid_box}><span> THU <br /></span> <h3>05</h3> </Col>
                        <Col className={classes.mid_box}><span> FRI <br /></span> <h3>06</h3> </Col>
                        <Col className={classes.mid_box}><span> SAT <br /></span> <h3>07</h3> </Col>
                        <Col className={classes.mid_box}><span> THU <br /></span> <h3>08</h3> </Col>
                        <Col className={classes.mid_box}><span> SAT <br /></span> <h3>09</h3> </Col>
                    </Row>
                    <Row className='m-2'>
                        <Col>

                            <Form className={classes.checkbox}>
                                <h2>Checklist</h2>
                                {['checkbox'].map((type) => (
                                    <div key={type} className="mb-3">
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label> <h4>Read Book</h4> </Form.Check.Label>
                                            <p> Everyday of 7:30 AM</p>
                                        </Form.Check>
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label> <h4>Morning Run</h4> </Form.Check.Label>
                                            <p> Everyday of 5:30 AM</p>
                                        </Form.Check>
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label> <h4>Review Notes in Evaluation</h4> </Form.Check.Label>
                                            <p>Mon, Tue of 9:30 PM</p>
                                        </Form.Check>
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label> <h4>Brush Teeth</h4> </Form.Check.Label>
                                            <p> Everyday of 7:00 AM, 1PM, 9PM</p>
                                        </Form.Check>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-center">
                                    <button  onClick={() => setModalShow(true)} className='btn btn-gradient d-block'>Add Habit</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>

                    <Row className='m-3'>
                        <div className={classes.record}>

                            <Row className='m-3'>
                                <h1>Habit Tracker Records</h1>
                                <Col md={6}>

                                    <strong> <h4>Read Book</h4></strong>
                                    <p>January 05, 2021 <br /> 7:30 AM</p>

                                </Col>
                                <Col md={6}>
                                    <div className='d-flex justify-content-end'>
                                        <span ><i class="far fa-pen"></i></span>
                                        <a href="/"> <i class="far fa-trash-alt"></i> </a>
                                    </div>
                                </Col>
                                <hr />
                                <Col md={6}>
                                    <strong><h4>Read Book</h4></strong>
                                    <p>January 05, 2021 <br /> 7:30 AM</p>
                                </Col>
                                <Col md={6}>

                                    <div className='d-flex justify-content-end'>
                                        <span ><i class="far fa-pen"></i></span>
                                        <a href="/"> <i class="far fa-trash-alt"></i> </a>
                                    </div>
                                </Col>
                                <hr /> <Col md={6}>
                                    <strong> <h4>Read Book</h4></strong>
                                    <p>January 05, 2021 <br /> 7:30 AM</p>
                                </Col>
                                <Col md={6}>

                                    <div className='d-flex justify-content-end'>
                                        <span ><i class="far fa-pen"></i></span>
                                        <a href="/"> <i class="far fa-trash-alt"></i> </a>
                                    </div>
                                </Col>
                                <hr />
                            </Row>

                        </div>
                    </Row>
                </Col>

            </Row>
            <PopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    )
}

export default ClickSection