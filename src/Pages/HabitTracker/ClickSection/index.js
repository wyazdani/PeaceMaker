import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import profile from "Images/habitimg.png";
import classes from "../../HabitTracker/index.module.scss";
import HeaderTop from "Components/Header";
import PopUp from "../PopUp";
import challenges from "Images/challangeImg.svg";
import loginImg from "Images/loginImg.svg";
import HabitTracker from "api/HabitTracker";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const ClickSection = (props) => {
  const navigate = useNavigate();
  const next = (data) => {
    console.log(data);
    navigate("/add-habit-next", { state: { id: data } });
  };
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);
  const [userHabit, setUserHabit] = useState([]);
  const [pageType, setPageType] = useState([]);
  const [loader, setLoader] = useState(true);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  const getHabits = async () => {
    const res = await HabitTracker.getHabits();
    if (res) {
      setUserHabit(res.data.data);
      //   console.log(res.data.data);
      console.log(userHabit);
      setLoader(false);
    }
  };

  const handleEdit = async (id) => {
    const res = await HabitTracker.showHabit(id);
    console.log(res);
  };

  const handleDelete = async (id) => {
    setLoader(true);
    const res = await HabitTracker.deleteHabit(id);
    toast.success("Habit Deleted Successfully");
    getHabits();
  };

  const handleDataFromPopUp = async () => {
    console.log("handle prop");
    setLoader(true);
    await getHabits();
    setLoader(false);
  };

  useEffect(() => {
    getHabits();
    const data = location.state;
    setPageType(data.habit_type);
  }, []);

  return (
    <>
      <ToastContainer />
      <HeaderTop />
      <section>
        <Row>
          <Col lg={6}>
            {/* <div className={classes.Habit_background_2}>
                            <Col xl={6} lg={12} md={6}>
                                <div className={classes.position_2}>
                                    <h1>50%</h1>
                                    <h2>Accomplished</h2>
                                    <p>Ain’t no mountain high enough to accomplish success</p>
                                </div>
                            </Col>
                            <Col xl={6} lg={12} md={6} className='m-0 p-0'>
                                <div className={classes.profile_img}>
                                    <img src={profile} alt="" />
                                </div>
                            </Col>
                        </div> */}

            <Card className="bg-bottom-right_2" style={{ backgroundImage: `url(${profile})` }}>
              <Card.Body>
                <div className={classes.text_color_set}>
                  {/* <img src={challenges} alt="" /> */}
                  <h1>50%</h1>
                  <h2>Accomplished</h2>
                  <p>
                    Ain’t no mountain high enough <br /> to accomplish success
                  </p>
                </div>
              </Card.Body>
            </Card>
            <div className={classes.boxes}>
              <div className={classes.mid_box}>
                <Form.Check id={"mon"} type="checkbox" label="THU" />

                <h3>05</h3>
              </div>
              <div className={classes.mid_box}>
                <Form.Check id={"tue"} type="checkbox" label="FRI" />
                <h3>06</h3>
              </div>
              <div className={classes.mid_box}>
                <Form.Check id={"wed"} type="checkbox" label="SAT" />
                <h3>07</h3>
              </div>
              <div className={classes.mid_box}>
                <Form.Check id={"thu"} type="checkbox" label="THU" />
                <h3>08</h3>
              </div>
              <div className={classes.mid_box}>
                <Form.Check id={"fri"} type="checkbox" label="SAT" />
                <h3>09</h3>
              </div>
            </div>
            <div className="">
              <Card>
                <Card.Title>Checklist</Card.Title>

                <div className={classes.checkbox_background}>
                  <Form.Check type={"checkbox"} className="mb-3" id={`checkbox`}>
                    <Form.Check.Input type={"checkbox"} />
                    <Form.Check.Label className="d-block fw-bold font-16">Read Book</Form.Check.Label>
                    <small className="text-muted"> Everyday of 7:30 AM</small>
                  </Form.Check>
                  <Form.Check type={"checkbox"} className="mb-3" id={`checkbox1`}>
                    <Form.Check.Input type={"checkbox"} />
                    <Form.Check.Label className="d-block fw-bold font-16"> Morning Run </Form.Check.Label>
                    <small className="text-muted"> Everyday of 5:30 AM</small>
                  </Form.Check>
                  <Form.Check type={"checkbox"} className="mb-3" id={`checkbox2`}>
                    <Form.Check.Input type={"checkbox"} />
                    <Form.Check.Label className="d-block fw-bold font-16">
                      {" "}
                      Review Notes in Evaluation{" "}
                    </Form.Check.Label>
                    <small className="text-muted">Mon, Tue of 9:30 PM</small>
                  </Form.Check>
                  <Form.Check type={"checkbox"} className="mb-3" id={`checkbox3`}>
                    <Form.Check.Input type={"checkbox"} />
                    <Form.Check.Label className="d-block fw-bold font-16"> Brush Teeth </Form.Check.Label>
                    <small className="text-muted"> Everyday of 7:00 AM, 1PM, 9PM</small>
                  </Form.Check>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <Button onClick={() => setModalShow(true)} variant="gradient d-block w-75">
                    Add Habit
                  </Button>
                </div>
              </Card>
            </div>
          </Col>
          <Col lg={6}>
            <div className={classes.record}>
              <h1>Habit Tracker Records</h1>
              {loader == true ? (
                <div>
                  <Spinner animation="grow" />
                </div>
              ) : (
                userHabit.habits.map((habit) => {
                  let date = new Date(habit.updated_at);
                  let formattedDate = date.toLocaleDateString("en-US", dateOptions);
                  let formattedTime = date.toLocaleTimeString("en-US", timeOptions);
                  return (
                    <>
                      {habit.habit_type == pageType ? (
                        <div className={classes.habit_tracker_records}>
                          <Col md={6}>
                            <strong>
                              {" "}
                              <h4>{habit.habit_name}</h4>
                            </strong>
                            <p>
                              {formattedDate} <br /> {formattedTime}
                            </p>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex justify-content-end">
                              <a onClick={() => next(habit.habit_id)} className={classes.edit}>
                                <i class="far fa-pen"></i>
                              </a>
                              <a onClick={() => handleDelete(habit.habit_id)} className={classes.delete} href="#">
                                {" "}
                                <i class="far fa-trash-alt"></i>{" "}
                              </a>
                            </div>
                          </Col>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
        <PopUp
          show={modalShow}
          onHide={() => setModalShow(false)}
          popUpData={() => handleDataFromPopUp()}
          habit_type={pageType}
        />
      </section>
    </>
  );
};

export default ClickSection;
