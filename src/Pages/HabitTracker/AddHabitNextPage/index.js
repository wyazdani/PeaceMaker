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
    const habit_type = "2";
    navigate("/click-section", { state: { habit_type: habit_type } });
  };
  return (
    <>
      <HeaderTop />
      <section>
        <Row onClick={MapSec} className={classes.Habit_background}>
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
