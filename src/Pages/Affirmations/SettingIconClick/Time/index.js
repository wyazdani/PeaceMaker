import React from 'react'
import classes from "./index.module.scss";
import { Col, Form, Row } from 'react-bootstrap'

const Time = () => {
    return (

        <div className={classes.main_top}>
            <Row className='justify-content-center'>
                <Col className={classes.big_font}>
                    <Col>
                        <h1> 12:34</h1>
                        <p>Friday, 22 December</p>

                    </Col>
                </Col>
                <Row>
                    <h2>Alarm Every</h2>
                    <Col md={6} className='d-flex'>
                        <a href='#' className={classes.clock_icon}><i class="icon-Clock"></i></a>
                        <p><strong>08:00 AM</strong> <br /> Mon, Fri</p>
                    </Col>
                    <Col md={6} className={classes.form_control}>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"

                            />

                        </Form>
                    </Col>
                    <Col md={6} className='d-flex'>
                        <span className={classes.clock_icon}><i class="icon-Clock"></i></span>
                        <p><strong>08:00 AM</strong> <br /> Mon, Fri</p>
                    </Col>
                    <Col md={6} className={classes.form_control}>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"

                            />

                        </Form>
                    </Col>
                    <Col md={6} className='d-flex'>
                        <span className={classes.clock_icon}><i class="icon-Clock"></i></span>
                        <p><strong>08:00 AM</strong> <br /> Mon, Fri</p>
                    </Col>
                    <Col md={6} className={classes.form_control}>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"

                            />

                        </Form>
                    </Col>

                </Row>
            </Row>
            <div className={classes.btn_bottom}>
                <button className='btn btn-gradient d-block w-50'>Add Alarm</button>
            </div>
        </div>

    )
}

export default Time