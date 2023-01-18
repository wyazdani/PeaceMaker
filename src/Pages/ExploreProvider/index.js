import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import unsplash from "../../Images/unsplash.png"
import unsplash3 from "../../Images/unsplash2.png"
import unsplash4 from "../../Images/unsplash3.png"
import unsplash5 from "../../Images/unsplash4.png"
import unsplash6 from "../../Images/unsplash5.png"
import unsplash2 from "../../Images/unsplash6.png"
import { Link, useNavigate } from 'react-router-dom';
import SecondHeader from 'Components/Header/SecondHeader';

const ExploreProvider = () => {
    const navigate = useNavigate();
    const MapSec = () => {
        navigate('/map-show');
    };
    return (
        <>
          
            <section className='m-3'>
            <SecondHeader />
            <Card>
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
                                <img src={unsplash3} alt="" />
                            </div>
                            <h5 className={'m-0'}  onClick={MapSec}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash2} alt="" />
                               
                            </div>
                            <h5 className={'m-0'} >Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash3} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash4} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash5} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash6} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash3} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash4} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash5} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                        <Card className={`${classes.inner_body}`}>
                            <div className={classes.profile_img}>
                                <img src={unsplash3} alt="" />
                            </div>
                            <h5 className={'m-0'}>Thomas Edison</h5>
                            <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                        </Card>
                    </div>

                </Card.Body>
            </Card>
            </section>
        </>
    )
}

export default ExploreProvider