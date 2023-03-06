import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import profile from "../../Images/unsplash1.png";
import classes from "./index.module.scss";
const Profile = () => {
    const baseImagePath = "https://dev.api.peacemakerapp.com/storage/user_profile/"
    const user = JSON.parse(localStorage.getItem('user'))
    const profile_image = user.profile_picture != "" ? baseImagePath+user.profile_picture:profile;
    return (
        <>
            <Row className={classes .profile_img}>
                <Col md={4}>
                    <Link to={'/user-profile'} className={classes.img_box}>
                        <img src={profile_image} alt="" />
                    </Link>
                </Col>

                <Col md={8}>
                    <h3>{user.name}</h3>
                    <Link to={'/user-profile'}><span>View Profile</span></Link>
                </Col>
            </Row>

        </>
    )
}

export default Profile