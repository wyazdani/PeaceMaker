import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import classes from "../../Affirmations/index.module.scss";
import box from "../../../Images/bro.png";

const SavePopUp = (props) => {
  return (
    <div>
      <Modal show={props.show} size="medium" centered>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <Button onClick={props.onHide} variant="cancel">
              <i class="fas fa-times"></i>
            </Button>
          </div>
          <div className={classes.imgBox}>
            <img src={box} alt="" />
          </div>
          <div className={classes.text}>Affirmation Created!</div>
          <Form className="text-center">
            <Form.Group className="mb-3 ">
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            <Button type="submit" className="btn  btn-gradient me-2 my-3 w-100">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SavePopUp;
