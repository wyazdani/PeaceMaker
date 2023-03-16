import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "../../HabitTracker/index.module.scss";
import profile from "../../../Images/habitimg.png";
import habitimg2 from "../../../Images/habitimg2.png";
import { useNavigate } from "react-router-dom";
import HeaderTop from "Components/Header";

const HabitTrackerNext = () => {
  const navigate = useNavigate();
  const MapSec = () => {
    navigate("/click-section");
  };
  return (
    <>
      <HeaderTop />
      <section>
        <Row className={classes.Habit_background}>
          <Col md={6}>
            <div className={classes.position}>
              <h1>Habits I Want to Get Rid Of</h1>
            </div>
          </Col>
          <Col md={6} className="m-0 p-0">
            <img src={habitimg2} alt="" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default HabitTrackerNext;
