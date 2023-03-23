import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import classes from "../../Journal/index.module.scss";
import Journal from "api/Journal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const JournalPopUp = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name };
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await Journal.createJournalList(user.user_id, data);
      if (res.status == 200) {
        toast.success("Journal list created successfully");
        setTimeout(() => {
          props.refreshList();
        }, 3000);
      }
    } catch (err) {
      // console.log(err.data.message[0]["message"]);
      toast.error(err.data.message[0]["message"]);
    }
  };
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
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Control type="text" placeholder="Enter Title" onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Button type="submit" className="btn btn-gradient me-2">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JournalPopUp;
