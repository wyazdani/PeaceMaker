import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import profile from "Images/habitimg.png"
import classes from "../../HabitTracker/index.module.scss"
import HeaderTop from 'Components/Header';
import PopUp from '../PopUp';

const ClickSection = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <HeaderTop />
            <section>
            <Row>
                <Col lg={6} >
                        <div className={classes.Habit_background_2}>
                            <Col xl={6} lg={12} md={6}>
                                <div className={classes.position_2}>
                                    <h1>50%</h1>
                                    <h2>Accomplished</h2>
                                    <p>Ain’t no mountain high enough to accomplish success</p>
                                </div>
                            </Col>
                            <Col xl={6} lg={12} md={6} className='m-0 p-0'>
                                <div className={classes.profile_img}>
                                    <img src={profile} alt="" />
                                </div>
                            </Col>
                        </div>
                    <Row className={classes.boxes}>
                        <Col className={classes.mid_box}><span> THU <br /></span> <h3>05</h3> </Col>
                        <Col className={classes.mid_box}><span> FRI <br /></span> <h3>06</h3> </Col>
                        <Col className={classes.mid_box}><span> SAT <br /></span> <h3>07</h3> </Col>
                        <Col className={classes.mid_box}><span> THU <br /></span> <h3>08</h3> </Col>
                        <Col className={classes.mid_box}><span> SAT <br /></span> <h3>09</h3> </Col>
                    </Row>
                    <div className=''>
                            <Card>
                                <Card.Title>Checklist</Card.Title>
                                {['checkbox'].map((type) => (
                                    <div key={type} className={classes.checkbox_background}>
                                        <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} />
                                            <Form.Check.Label className='d-block fw-bold font-16'>Read Book</Form.Check.Label>
                                            <small className='text-muted'> Everyday of 7:30 AM</small>
                                        </Form.Check>
                                        <Form.Check type={type}  className='mb-3' id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} />
                                            <Form.Check.Label className='d-block fw-bold font-16'> Morning Run </Form.Check.Label>
                                            <small className='text-muted' > Everyday of 5:30 AM</small>
                                        </Form.Check>
                                        <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} />
                                            <Form.Check.Label className='d-block fw-bold font-16'> Review Notes in Evaluation </Form.Check.Label>
                                            <small className='text-muted'>Mon, Tue of 9:30 PM</small>
                                        </Form.Check>
                                        <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} />
                                            <Form.Check.Label className='d-block fw-bold font-16'> Brush Teeth </Form.Check.Label>
                                            <small className='text-muted'> Everyday of 7:00 AM, 1PM, 9PM</small>
                                        </Form.Check>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-center my-5">
                                    <Button onClick={() => setModalShow(true)} variant='gradient d-block w-75'>Add Habit</Button>
                                </div>
                            </Card>
                          
                      
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={classes.record}>
                            <h1>Habit Tracker Records</h1>
                       <div className={classes.habit_tracker_records}>
                            <Col md={6}>
                                <strong> <h4>Read Book</h4></strong>
                                <p>January 05, 2021 <br /> 7:30 AM</p>
                            </Col>
                            <Col md={6}>
                                <div className='d-flex justify-content-end'>
                                    <a className={classes.edit} href='#' ><i class="far fa-pen"></i></a>
                                    <a className={classes.delete} href='#'> <i class="far fa-trash-alt"></i> </a>
                                </div>
                            </Col>
                        </div>
                        <div className={classes.habit_tracker_records}>
                            <Col md={6}>
                                <strong> <h4>Read Book</h4></strong>
                                <p>January 05, 2021 <br /> 7:30 AM</p>
                            </Col>
                            <Col md={6}>
                                <div className='d-flex justify-content-end'>
                                    <a className={classes.edit} href='#' ><i class="far fa-pen"></i></a>
                                    <a className={classes.delete} href='#'> <i class="far fa-trash-alt"></i> </a>
                                </div>
                            </Col>
                        </div>
                        <div className={classes.habit_tracker_records}>
                            <Col md={6}>
                                <strong> <h4>Read Book</h4></strong>
                                <p>January 05, 2021 <br /> 7:30 AM</p>
                            </Col>
                            <Col md={6}>
                                <div className='d-flex justify-content-end'>
                                    <a className={classes.edit} href='#' ><i class="far fa-pen"></i></a>
                                    <a className={classes.delete} href='#'> <i class="far fa-trash-alt"></i> </a>
                                </div>
                            </Col>
                        </div>
                        
                    </div>
                </Col>

            </Row>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            </section>
        </>
    )
}

export default ClickSection