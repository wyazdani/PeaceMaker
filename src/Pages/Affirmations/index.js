import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import profile from "Images/background.jpg"
import classes from "./index.module.scss";
import { useNavigate } from 'react-router-dom'

const Affirmations = () => {
    const navigate = useNavigate();
    const IconClick = () => {
        navigate('/setting-icon-click');
    };
    return (
        <>
            <HeaderTop />
            <Row>
                <Col md={6}>
                    <div className={classes.profile_img}>
                        <img src={profile} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={8}>

                            <strong><h2>Daily Affirmation</h2></strong>
                            <p>How do you want us to give you a nice 5 minutes cool down?</p>

                        </Col>
                        <Col md={4}>
                            <div className={classes.setting_icon}>
                              <a onClick={IconClick}  href="#"><i class="far fa-cog"></i></a> 

                            </div>
                        </Col>
                        <Row >
                            <Col >
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex'>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Identity</h4></strong>
                                    </Card.Body>
                                </Card>
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex '>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Attributes</h4></strong>
                                    </Card.Body>
                                </Card>
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex'>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Purpose</h4></strong>
                                    </Card.Body>
                                </Card>
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex'>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Relationship</h4></strong>
                                    </Card.Body>
                                </Card>
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex'>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Blessings</h4></strong>
                                    </Card.Body>
                                </Card>
                                <Card className={classes.card_background}>
                                    <Card.Body className='d-flex'>
                                        <div className={classes.plus_icon}>
                                            <span><i class="fal fa-plus-square"></i></span>
                                            
                                        </div>
                                        <strong> <h4>Promises</h4></strong>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default Affirmations