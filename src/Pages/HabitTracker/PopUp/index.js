import TimerPicker from "Components/TimePicker";
import React, { useState } from "react";
import { Modal, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "../../HabitTracker/index.module.scss";
import HabitTracker from "api/HabitTracker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopUp = (props) => {
  const navigate = useNavigate();
  const AddHabit = async () => {
    const data = { habit_name, days, set_times, habit_type };
    try {
      const res = await HabitTracker.createHabit(data);
      if (res.status == 200) {
        props.popUpData();
        props.onHide();
      }
    } catch (err) {
      console.log(err.data.message);
      err.data.message.map((e) => {
        toast.error(e.message);
      });
    }
  };
  const [habit_name, sethabit_name] = useState("");
  const [days, setDays] = useState([]);
  const [set_times, setTime] = useState([]);
  const [habit_type, setHabitType] = useState("1");
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // Add or remove the value from the checkedValues array
    if (isChecked) {
      setDays([...days, value]);
    } else {
      setDays(days.filter((v) => v !== value));
    }
    console.log(days);
  };

  const handleDataFromChild = (data) => {
    setTime([data]);
  };
  return (
    <>
      <Modal show={props.show} size="md" centered>
        <Modal.Body>
          <h3 className={classes.habit_border_bottom}> Add Habit</h3>
          <Form className="mb-4">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                {" "}
                <strong>Habit Name</strong>{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="Habit Name" onChange={(e) => sethabit_name(e.target.value)} />
            </Form.Group>
          </Form>
          <h5>Repeat</h5>
          <div className={classes.boxes}>
            <div className={classes.mid_box}>
              <Form.Check
                id={"monday"}
                type="checkbox"
                label="M"
                value="Monday"
                checked={days.includes("Monday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"tuesday"}
                type="checkbox"
                label="T"
                value="Tuesday"
                checked={days.includes("Tuesday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"wednesday"}
                type="checkbox"
                label="W"
                value="Wednesday"
                checked={days.includes("Wednesday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"thursday"}
                type="checkbox"
                label="T"
                value="Thursday"
                checked={days.includes("Thursday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"friday"}
                type="checkbox"
                label="F"
                value="Friday"
                checked={days.includes("Friday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"saturday"}
                type="checkbox"
                label="S"
                value="Saturday"
                checked={days.includes("Saturday")}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"sunday"}
                type="checkbox"
                label="S"
                value="Sunday"
                checked={days.includes("Sunday")}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <h5>Set Time</h5>
          <TimerPicker onData={handleDataFromChild} />
        </Modal.Body>
        <div className="text-center mb-2">
          <Button onClick={AddHabit} className="btn btn-gradient w-25">
            Save
          </Button>
        </div>
        <div className="text-center mb-2">
          <Button onClick={props.onHide} className={classes.btn_cancel}>
            {" "}
            <strong>Cancel</strong>{" "}
          </Button>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default PopUp;
