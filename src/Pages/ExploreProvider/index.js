import HeaderTop from 'Components/Header'
import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import profile_2 from "../../Images/s2.jpg"
import { Link, useNavigate } from 'react-router-dom';

const ExploreProvider = () => {
    const navigate = useNavigate();
    const MapSec = () => {
        navigate('/map-show');
    };
    return (
        <>
            <HeaderTop />
            <Card className={classes.main}>
                <Card.Body>
                    <Row className='text-center justify-content-center '>
                        <h2> Explore a Provider</h2>
                        <Col md={6}  className='align-items-center'>
                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search.."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                            </Form>
                        </Col>
                    </Row>
                    <div className={classes.providerRow}>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}  onClick={MapSec}>
                                <img src={profile_2} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default ExploreProvider