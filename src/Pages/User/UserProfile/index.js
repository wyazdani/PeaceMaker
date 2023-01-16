import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Tab, Tabs } from 'react-bootstrap'
import classes from "../../User/index.module.scss";
import profile from '../../../Images/unsplash.png'
import User from '..';

const UserProfile = () => {
  return (
    <>
    <HeaderTop />

    <div className={classes.user_sec}>
        <Col md={4}>
            <div className="d-flex align-items-center" >
                <div><img src={profile} alt="" /></div>
                <div><strong>Jacob John</strong>
                    <p> jacobjohn@gmail.com </p></div>
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
    </div>
    <Card className='chart_card'>
                <Card.Title>User’s Record</Card.Title>
               
         
    <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="second-tab"
        justify
    >
        <Tab eventKey="home" title="Results">
          <User/>
        </Tab>
        <Tab eventKey="profile" title="Nutrition">
          
        </Tab>
        <Tab eventKey="longer-tab" title="Digital Footprint">
           
        </Tab>
    </Tabs>
    </Card>

</>
  )
}

export default UserProfile