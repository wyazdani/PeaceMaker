import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import profile from "../../Images/unsplash1.png";
import classes from "./index.module.scss";
const Profile = () => {
    return (
        <>
            <Row className={classes .profile_img}>
                <Col md={4}>
                    <Link to={'/user-profile'} className={classes.img_box}>
                        <img src={profile} alt="" />
                    </Link>
                </Col>

                <Col md={8}>
                    <h3>Jacob John</h3>
                    <Link to={'/user-profile'}><span>View Profile</span></Link>
                </Col>
            </Row>

        </>
    )
}

export default Profile