import classes from "./index.module.scss";
import HeaderTop from 'Components/Header'
import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Journal = () => {
    const navigate = useNavigate();
    const ButtonEnter = () => {
        navigate('/add-entry-button');
    };
    return (
        <>
            <HeaderTop />
            <div className='main_top'>
                <Row className='m-4'>
                <Row className="mb-3">
                    <Col md={4}>
                        <h2>Journal Entries</h2>
                    </Col>
                    <Col md={8}>
                        <Form className="d-flex justify-content-end ">
                            <InputGroup className="w-50 me-2" >
                                <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <button  onClick={ButtonEnter} className='btn btn-gradient d-block w-40 me-2'>Add Entry</button>
                        </Form>

                    </Col>
                    </Row>
                        <div className={classes.boxes_rounded}>
                            <Row className="m-3">
                                <Col md={6}>
                                    <p>Blood Pressure</p>
                                    <h4>Fight with my Ex</h4>
                                </Col>
                                <Col md={6} className=' d-flex justify-content-end '>
                                    <p>February 21, 2022</p>
                                </Col>
                            </Row>
                            
                        </div>

                        <div className={classes.boxes_rounded}>
                            <Row className="m-3">
                                <Col md={6}>
                                    <p>Blood Pressure</p>
                                    <h4>Journal Entry 001</h4>
                                </Col>
                                <Col md={6} className=' d-flex justify-content-end '>
                                    <p>February 21, 2022</p>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className={classes.boxes_rounded}>
                            <Row className="m-3">
                                <Col md={6}>
                                    <p>Blood Pressure</p>
                                    <h4>Journal Entry 002</h4>
                                </Col>
                                <Col md={6} className=' d-flex justify-content-end '>
                                    <p>February 21, 2022</p>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className={classes.boxes_rounded}>
                            <Row className="m-3">
                                <Col md={6}>
                                    <p>Blood Pressure</p>
                                    <h4>Journal Entry 003</h4>
                                </Col>
                                <Col md={6} className=' d-flex justify-content-end '>
                                    <p>February 21, 2022</p>
                                </Col>
                            </Row>
                            
                        </div>
                      
                   
                </Row>
            </div>
        </>
    )
}

export default Journal