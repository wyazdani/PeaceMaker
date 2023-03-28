import classes from "./index.module.scss";
import HeaderTop from "Components/Header";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JournalPopUp from "../JournalPopUp";
import Journal from "api/Journal";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEntryButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const [journalList, setJournalList] = useState([]);
  const [journal_list_id, setJournalListId] = useState();
  const [journal_to, setJournalTo] = useState("");
  const [what_happened, setWhatHappened] = useState("");
  const [respond, setRespond] = useState("");
  const [goal_achived, setGoalAchived] = useState("yes");
  const [improvement, setImprovement] = useState("");
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const TurnBack = () => {
    navigate("/journal");
  };
  const handleGetJournalList = async () => {
    setModalShow(false);
    setLoader(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await Journal.getJournalList(user.user_id);
    if (res) {
      setJournalList(res.data.data.arrJournalList);
      setLoader(false);
    }
  };
  const handleSubmit = async () => {
    const data = { journal_list_id, journal_to, what_happened, improvement, respond, goal_achived };
    if (!journal_list_id) {
      toast.error("Please Selet one options");
    } else {
      try {
        const res = await Journal.createJournal(data);
        if (res.status == 200) {
          toast.success("Journal added successfully");
          setTimeout(() => {
            TurnBack();
          }, 2000);
        }
      } catch (err) {
        console.log(err.data.message);
        const error = err.data.message;
        error.map((e) => {
          console.log(e);
          toast.error(e.message);
        });
      }
    }
  };
  useEffect(() => {
    handleGetJournalList();
  }, []);
  if (loader == false)
    return (
      <>
        <ToastContainer />

        <HeaderTop />
        <section>
          <div className="d-flex justify-content-start mb-3">
            <span onClick={TurnBack} className={classes.arrow_style}>
              <i class="far fa-arrow-left"></i>
            </span>{" "}
            <h3>Add Journal</h3>
          </div>
          <Row className="d-flex justify-content-center">
            <Col md={10}>
              <Form className="mb-3">
                <Row className="mb-3">
                  <Col md={10}>
                    <Form.Label>
                      {" "}
                      <strong> Add Journal To</strong>{" "}
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(event) => setJournalListId(event.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- select an option --{" "}
                      </option>
                      {journalList.map((data) => (
                        <option value={data.journal_list_id}>{data.name}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2} className="mt-3">
                    <Button onClick={() => setModalShow(true)} className="btn btn-gradient mt-2">
                      Create
                    </Button>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    {" "}
                    <strong> Journal Heading</strong>{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="fight with my ex"
                    onChange={(event) => setJournalTo(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <strong>What Happened?</strong>{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter here"
                    onChange={(event) => setWhatHappened(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <strong>How did you respond?</strong>{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter here"
                    onChange={(event) => setRespond(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <strong>How will you improve next time?</strong>{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter here"
                    onChange={(event) => setImprovement(event.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={10} className="mb-5">
              <div className={classes.record}>
                <Col md={6}>
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
                        <h4>Did You Achieve Your Personal Goals?</h4>
                      </strong>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <div className={classes.btn_center}>
                    <Button
                      onClick={() => setGoalAchived("yes")}
                      className={goal_achived == "yes" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                    >
                      Yes, I am!
                    </Button>
                    <Button
                      onClick={() => setGoalAchived("no")}
                      className={goal_achived == "no" ? "btn btn-gradient w-50 me-2" : classes.btn_cancel}
                    >
                      {" "}
                      <strong>No</strong>{" "}
                    </Button>
                  </div>
                </Col>
              </div>
            </Col>
            <div className=" d-flex justify-content-center mb-5 pt-5">
              <Button className="btn btn-gradient w-25" onClick={handleSubmit}>
                Save
              </Button>
            </div>
          </Row>
        </section>
        <JournalPopUp show={modalShow} onHide={() => setModalShow(false)} refreshList={handleGetJournalList} />
      </>
    );
  else return <Spinner animation="grow" />;
};

export default AddEntryButton;
