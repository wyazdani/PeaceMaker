import React from 'react'
import classes from '../../SettingIconClick/index.module.scss'
import { Col, Form, Row } from 'react-bootstrap'

const BodyTemperature = () => {
    return (
        <>
            <Row className='m-5'>
                <Col className={classes.border_bottom}>
                    <h2>Enter your body temperature to determine when will the affirmation occur.</h2>
                </Col>
                <Form className='mb-5'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <strong><h4>Temperature</h4></strong> </Form.Label>
                        <Form.Control type="password" placeholder="Enter your Temperature" />
                    </Form.Group>

                </Form>
                <div className={classes.btn_bottom}>
                    <button className='btn btn-gradient d-block w-50'>Save</button>
                </div>
            </Row>
        </>
    )
}

export default BodyTemperature