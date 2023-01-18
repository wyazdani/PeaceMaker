import HeaderTop from 'Components/Header'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import classes from "../../HabitTracker/index.module.scss"

const AddHabitNext = () => {
    return (
        <section>
         <HeaderTop />
            <div className={classes.top_row}>   
                <h2>Habit Tracker</h2>
                <Row>
                    <Col md={6}>
                        <div className={classes.record_2}>
                            <Row>
                                <Col md={3}>
                                    <div className={classes.smile_icon}>
                                        <span ><i class="far fa-smile"></i></span>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <strong> <h4>Are You Happy With Your Choice?
                                    </h4></strong>
                                    <p>It is a great way to share with your friend know how you are feeling. </p>
                                </Col>
                                <div className={classes.btn_center}>
                                    <Button className='btn btn-gradient w-50 me-2'>Yes, I am!</Button>
                                    <Button className={classes.btn_cancel}> <strong>No</strong> </Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={classes.record_2}>
                            <Row>
                                <Col md={3}>
                                    <div className={classes.smile_icon}>
                                        <span ><i class="far fa-smile"></i></span>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <strong> <h4>Are You Happy With Your Choice?
                                    </h4></strong>
                                    <p>It is a great way to share with your friend know how you are feeling. </p>
                                </Col>
                                <div className={classes.btn_center}>
                                    <Button className='btn btn-gradient w-50 me-2'>Yes, I am!</Button>
                                    <Button className={classes.btn_cancel}> <strong>No</strong> </Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className='m-3'>
                    <h3>Remarks</h3>
                    <textarea className={classes.empty_box}>
                        <p>WHY?</p>
                    </textarea>
                </div>
                <div className={classes.btn_last}>
                    <Button className='btn btn-gradient w-50 me-2'>Yes, I am!</Button>
                </div>
            </div>
        </section>
    )
}

export default AddHabitNext