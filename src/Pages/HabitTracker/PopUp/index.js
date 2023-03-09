import TimerPicker from "Components/TimePicker";
import React from "react";
import { Modal, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "../../HabitTracker/index.module.scss";
const PopUp = (props) => {
  const navigate = useNavigate();
  const AddHabit = () => {
    navigate("/add-habit-next");
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
              <Form.Control type="text" placeholder="Habit Name" />
            </Form.Group>
          </Form>
          <h5>Repeat</h5>
          <div className={classes.boxes}>
            <div className={classes.mid_box}>
              <Form.Check id={"monday"} type="checkbox" label="M" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"tuesday"} type="checkbox" label="T" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"wednesday"} type="checkbox" label="W" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"thursday"} type="checkbox" label="T" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"friday"} type="checkbox" label="F" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"saturday"} type="checkbox" label="S" />
            </div>
            <div className={classes.mid_box}>
              <Form.Check id={"sunday"} type="checkbox" label="S" />
            </div>
          </div>
          <h5>Set Time</h5>
          <TimerPicker />
        </Modal.Body>
        <div className="text-center mb-2">
          <Button onClick={AddHabit} className="btn btn-gradient w-25">
            Save
          </Button>
        </div>
        <div className="text-center mb-2">
          <Button className={classes.btn_cancel} onClick={props.onHide}>
            {" "}
            <strong>Cancel</strong>{" "}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PopUp;
