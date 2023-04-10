import TimerPicker from "Components/TimePicker";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import classes from "../../../../HabitTracker/index.module.scss";

const AddAlaramPopUp = (props) => {
  return (
    <div>
      <Modal show={props.show} size="md" centered>
        <Modal.Body>
          <h3 className={classes.habit_border_bottom}> Set Time</h3>
          <TimerPicker />
          <h5>Repeat</h5>
          <div className={classes.boxes}>
            <div className={classes.mid_box}>
              <Form.Check
                id={"monday"}
                type="checkbox"
                label="M"
                value="Monday"
                // checked={days.includes("Monday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"tuesday"}
                type="checkbox"
                label="T"
                value="Tuesday"
                // checked={days.includes("Tuesday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"wednesday"}
                type="checkbox"
                label="W"
                value="Wednesday"
                // checked={days.includes("Wednesday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"thursday"}
                type="checkbox"
                label="T"
                value="Thursday"
                // checked={days.includes("Thursday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"friday"}
                type="checkbox"
                label="F"
                value="Friday"
                // checked={days.includes("Friday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"saturday"}
                type="checkbox"
                label="S"
                value="Saturday"
                // checked={days.includes("Saturday")}
              />
            </div>
            <div className={classes.mid_box}>
              <Form.Check
                id={"sunday"}
                type="checkbox"
                label="S"
                value="Sunday"
                // checked={days.includes("Sunday")}
              />
            </div>
          </div>
         
         
        </Modal.Body>
        <div className="text-center mb-2">
          <Button className="btn btn-gradient w-25">Save</Button>
        </div>
        <div className="text-center mb-2">
          <Button onClick={props.onHide} className={classes.btn_cancel}>
            {" "}
            <strong>Cancel</strong>{" "}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddAlaramPopUp;
