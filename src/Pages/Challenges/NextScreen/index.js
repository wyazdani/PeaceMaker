import HeaderTop from 'Components/Header'
import classes from "./index.module.scss";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const NextScreen = () => {

    return (
        <>
            <HeaderTop />
            <Row className='m-3'>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Row className={classes.inner_styling}>
                                <Col md={8} className='d-flex '>
                                    <i class="fas fa-pennant"></i>
                                    <p><strong>Challenge Points</strong></p>
                                </Col>
                                <Col md={4} className='d-flex'>
                                    <h3>20</h3>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default NextScreen