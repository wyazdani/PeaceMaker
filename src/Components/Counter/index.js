import classes from "./index.module.scss";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Counter = () => {
    const navigate = useNavigate();
    const NextLevel = () => {
        navigate('/level-one');
    };
    
    return (
        <>
        <div className={classes.top_section}>
            <Row className='m-5 d-flex justify-content-start'>
                <Col md={4}>
                    <Card>
                        <Row>
                            <Col md={2}>
                                <div className={classes.heading_bg}><h3>1</h3></div>
                            </Col>
                            <Col md={10}>
                                <div onClick={NextLevel} className="m-2 justify-content-start">
                                <h4>Level One</h4>
                                <p>0 / 7 Completed</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default Counter