import HeaderTop from "Components/Header";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import classes from "../../HabitTracker/index.module.scss";
import HabitTracker from "api/HabitTracker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHabitNext = (props) => {
  const location = useLocation();
  const [happy_with_choice, setHappy] = useState("yes");
  const [achieve_goals, setPersonalGoal] = useState("yes");
  const [habit_id, setHabitId] = useState();
  const [remarks, setRemarks] = useState();

  const storeRemarks = async () => {
    console.log("hello");
    const data = { happy_with_choice, achieve_goals, remarks };
    try {
      const res = await HabitTracker.habitRemarks(data, habit_id);
      if (res.status == 200) {
        console.log("200");
        toast.success("Remarks Added Successfully");
        setHappy("yes");
        setPersonalGoal("yes");
      }
    } catch (err) {
      const error = err.data.errors;
      console.log("error");
      console.log(err.data.errors.remarks[0]);
      toast.error(error.remarks[0]);
    }
  };

  useEffect(() => {
    setHabitId(location.state.id);
  }, []);
  return (
    <section>
      <ToastContainer />
      <HeaderTop />
      <div className={classes.top_row}>
        <h2>Habit Tracker</h2>
        <Row>
          <Col md={6}>
            <div className={classes.record_2}>
              <Row>
                <Col md={3}>
                  <div className={classes.smile_icon}>
                    <span>
                      <i class="far fa-smile"></i>
                    </span>
                  </div>
                </Col>
                <Col md={9}>
                  <strong>
                    {" "}
                    <h4>Are You Happy With Your Choice?</h4>
                  </strong>
                  <p>It is a great way to share with your friend know how you are feeling. </p>
                </Col>
                <div className={classes.btn_center}>
                  <Button
                    onClick={() => setHappy("yes")}
                    className={happy_with_choice == "yes" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                  >
                    Yes, I am!
                  </Button>
                  <Button
                    onClick={() => setHappy("no")}
                    className={happy_with_choice == "no" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                  >
                    {" "}
                    <strong>No</strong>{" "}
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.record_2}>
              <Row>
                <Col md={3}>
                  <div className={classes.smile_icon}>
                    <span>
                      <i class="far fa-smile"></i>
                    </span>
                  </div>
                </Col>
                <Col md={9}>
                  <strong>
                    {" "}
                    <h4>Did You Achieve your Personal Goals?</h4>
                  </strong>
                  <p>It is a great way to share with your friends.</p>
                </Col>
                <div className={classes.btn_center}>
                  <Button
                    onClick={() => setPersonalGoal("yes")}
                    className={achieve_goals == "yes" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                  >
                    Yes, I am!
                  </Button>
                  <Button
                    onClick={() => setPersonalGoal("no")}
                    className={achieve_goals == "no" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                  >
                    {" "}
                    <strong>No</strong>{" "}
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="m-3">
          <h3>Remarks</h3>
          <textarea className={classes.empty_box} onChange={(event) => setRemarks(event.target.value)}></textarea>
        </div>
        <div className={classes.btn_last}>
          <Button onClick={storeRemarks} className="btn btn-gradient w-50 me-2">
            Yes, I am!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddHabitNext;
