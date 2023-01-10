import React from 'react'
import classes from '../../SettingIconClick/index.module.scss'
import { Col, Form, Row } from 'react-bootstrap'

const BloodPressure = () => {
    return (
        <>
            <Row className='m-5'>
                <Col className={classes.border_bottom}>
                    <h2>Enter your blood pressure to determine when will the affirmation occur.</h2>
                </Col>
                <Form className='mb-5'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <strong><h4>Diastole</h4></strong> </Form.Label>
                        <Form.Control type="password" placeholder="Enter your diastole" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <strong><h4>Systole</h4></strong> </Form.Label>
                        <Form.Control type="password" placeholder="Enter your systole" />
                    </Form.Group>
                </Form>
                <div className={classes.btn_bottom}>
                    <button className='btn btn-gradient d-block w-50'>Save</button>
                </div>

            </Row>
        </>
    )
}

export default BloodPressure