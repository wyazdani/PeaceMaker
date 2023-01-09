import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import classes from "./index.module.scss";
import profile from "../../Images/s2.jpg"
import unsplash from "../../Images/unsplash.png"
import unsplash2 from "../../Images/unsplash2.png"
import unsplash3 from "../../Images/unsplash3.png"


const Notification = () => {
    return (
        <>
            <Row className='m-4'>
                <Col md={6}>
                    <h1>Notifications</h1>
                </Col>
                <Col md={6}>
                    <div className={classes.bell_icon}>
                        <span><i class="far fa-bell"></i></span>
                    </div>
                </Col>
            </Row>
            <div className={classes.main_top}>
                <Row className='p-5'>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                                src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    Jacob John
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />


                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                                src={unsplash}
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    Karla Anne
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />


                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                               src={unsplash2}
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    John Estrada
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />


                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                               src={unsplash3}
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    John Estrada
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />


                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                                src={unsplash}
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    Jacob John
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />


                    <Col lg={6} className='mb-2'>
                        <div className='d-flex'>
                            <img
                                src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                                alt='John Doe'
                                className='me-3 rounded-circle'
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h5 className='fw-bold'>
                                    Karla Anne
                                </h5>
                                <p className=''>has requested to message you.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <div className='d-flex justify-content-start align-items-center  '>
                            <div className=''>
                                <Button className={classes.gradient}>Accept</Button>
                                <Button className={classes.btn_cancel}> Decline </Button>
                            </div>
                            <div className={classes.text}>
                                <p >8hr ago</p>
                            </div>
                        </div>
                    </Col>
                    <hr />
                </Row>
            </div>
        </>
    )
}

export default Notification