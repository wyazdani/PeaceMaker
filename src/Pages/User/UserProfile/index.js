import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap'
import classes from "../../User/index.module.scss";
import profile from '../../../Images/unsplash.png'
import User from '..';
import { BarChart } from 'Components/Chart/BarChart';
import CSV from 'Components/CSV';
import DateSet from 'Components/DatePicker';

const UserProfile = (props) => {
    return (
        <>
            <HeaderTop />
            <section>
            <Card>
            <Row className={classes.user_sec}>
                <Col md={4}>
                    <div className="d-flex align-items-center" >
                        <div className={classes.img_box}>
                            <img src={profile} alt="" />
                        </div>
                        <div className={classes.profile_info}>
                            <strong>Jacob John</strong>
                            <p> jacobjohn@gmail.com </p>
                        </div>
                    </div>

                </Col>
                <Col md={4}>
                    <strong>Phone Number:</strong>
                    <p> +1 (127) 2123 212</p>
                </Col>
                <Col md={4}>
                    <strong> Location:</strong>
                    <p>Los Angeles, Canada</p>
                </Col>
            </Row>
            </Card>
            <Card>
                <Card.Header>
                    <Card.Title>User’s Record</Card.Title>
                    <div className='d-flex justify-content-end'>
                        <DateSet />
                        <CSV />
                    </div>
                </Card.Header>
                <Tabs
                    defaultActiveKey="Results"
                    className="second-tab"
                    justify
                >
                    <Tab eventKey="Results" title="Results">
                        <User />
                    </Tab>
                    <Tab eventKey="Nutrition" title="Nutrition">
                        <BarChart />
                    </Tab>
                    <Tab eventKey="Digital Footprint" title="Digital Footprint">

                    </Tab>
                </Tabs>
            </Card>
            </section>
        </>
    )
}

export default UserProfile