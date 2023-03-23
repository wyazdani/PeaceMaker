import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import classes from "../../Journal/index.module.scss";

const JournalPopUp = (props) => {
  return (
    <div>
      <Modal show={props.show} size="medium" centered>
        <Modal.Body>
          <div className={classes.heading_popup}>
            <h3>Create New Journal</h3>
            <Button onClick={props.onHide} variant="cancel">
              <i class="fas fa-times"></i>
            </Button>
          </div>
          <Form className="text-center">
            <Form.Group className="mb-3 ">
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            <Button className="btn btn-gradient me-2">Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JournalPopUp;
