import React from 'react'
import { Col, Row } from 'react-bootstrap';
import profile from "../../Images/unsplash1.png"
import classes from "./index.module.scss";
const Profile = () => {
  return (
    <>
        <Row className={classes .profile_img}>
           <Col md={4}>
        <div className={classes.img_box}>
        <img src={profile} alt="" />
        </div>  
           </Col>
          
           <Col md={8}>
                 <h3>Jacob John</h3>
                 <span>View Profile</span>
           </Col>
        </Row>
       
    </>
  )
}

export default Profile