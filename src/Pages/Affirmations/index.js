import HeaderTop from 'Components/Header'
import React from 'react'
import { Accordion, Card, Col, ListGroup, Row } from 'react-bootstrap'
import profile from "Images/background.jpg"
import classes from "./index.module.scss";
import { Link, useNavigate } from 'react-router-dom'

const Affirmations = () => {
    const navigate = useNavigate();
    const IconClick = () => {
        navigate('/setting-icon-click');
    };
    return (
        <>
            <HeaderTop />
            <Row className='p-4'>
                <Col md={6} lg={6}>
                    <div className={classes.profile_img}>
                        <img src={profile} alt="" />
                        <div className={classes.img_text}>
                            <div className='d-flex justify-content-between p-3'>
                                <p> Daily Affirmation</p>
                                <Link to="#"><i class="fas fa-play"></i></Link>
                            </div>
                            <h1>“I am God’s workmanship, created in Christ.”</h1>

                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Row>
                            <Col md={8}>
                                <strong><h2>Daily Affirmation</h2></strong>
                                <p>How do you want us to give you a nice 5 minutes cool down?</p>
                            </Col>
                            <Col md={4}>
                                <div className={classes.setting_icon}>
                                    <a onClick={IconClick} href="#"><i class="far fa-cog"></i></a>
                                </div>
                            </Col>
                        </Row>
                        <Card.Body>
                            <ul className={'activity_list col1'}>
                                <li>
                                    <Accordion className={'box_accordian'}>
                                        <Accordion.Header><i className={'fas fa-plus'}></i> Habit Tracker</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion>
                                </li>
                                <li>
                                    <Link to={"#"} className={'box'}>
                                        <i className={'fas fa-plus'}></i>
                                        Habit Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className={'box'}>
                                        <i className={'fas fa-plus'}></i>
                                        Habit Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className={'box'}>
                                        <i className={'fas fa-plus'}></i>
                                        Habit Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className={'box'}>
                                        <i className={'fas fa-plus'}></i>
                                        Habit Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className={'box'}>
                                        <i className={'fas fa-plus'}></i>
                                        Habit Tracker
                                    </Link>
                                </li>
                            </ul>
                        </Card.Body>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Affirmations