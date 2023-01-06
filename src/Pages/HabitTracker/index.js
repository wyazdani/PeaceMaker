import React from 'react'
import { Col, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import profile from "../../Images/habitimg.png"
import habitimg2 from "../../Images/habitimg2.png"
import { useNavigate } from 'react-router-dom';
import HeaderTop from 'Components/Header';

const HabitTracker = () => {
    const navigate = useNavigate();
    const MapSec = () => {
        navigate('/click-section');
    };
    return (
        <>
        <HeaderTop/>
            <Row className='m-3'>
                <div onClick={MapSec}  className={classes.Habit_background} >
                <Row>
                    <Col md={6} >
                        <div className={classes.position}>
                          <h1>Habits I Want to Develop</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                     <img src={profile} alt="" />
                    </Col>
                    </Row>
                </div>
                <div className={classes.Habit_background} >
                <Row>
                    <Col md={6} >
                    <div className={classes.position}>
                          <h1>Habits I Want to Get Rid Of</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                    <img src={habitimg2} alt="" />
                    </Col>
                    </Row>
                </div>
            </Row>
        </>
    )
}

export default HabitTracker