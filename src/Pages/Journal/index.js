import classes from "./index.module.scss";
import HeaderTop from "Components/Header";
import React, { useState, useEffect } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JournalAPI from "api/Journal";
import Spinner from "react-bootstrap/Spinner";

const Journal = () => {
  const navigate = useNavigate();
  const ButtonEnter = () => {
    navigate("/add-entry-button");
  };

  const [userJournal, setUserJournal] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchAll = async () => {
    const res = await JournalAPI.getJournals();
    console.log(res.data.message);
    if (res.data.message == "Unauthenticated.") {
      localStorage.clear();
      navigate("/login");
    }
    setUserJournal(res.data.data);
    setLoader(false);
  };

  const dataFormatter = (data) => {
    const date = new Date(data);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <HeaderTop />
      <section>
        <Card>
          <Card.Header>
            <Card.Title>
              <h2>Journal Entries</h2>
            </Card.Title>
            <div>
              <Form className="d-flex justify-content-end ">
                <InputGroup className="w-85 me-2">
                  <InputGroup.Text id="basic-addon1">
                    <i class="fal fa-search"></i>
                  </InputGroup.Text>
                  <Form.Control placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>
                <button onClick={ButtonEnter} className="btn btn-gradient d-block w-50 me-2">
                  Add Entry
                </button>
              </Form>
            </div>
          </Card.Header>
          {
            loader == true ? (
              <Spinner animation="grow" />
            ) : (
              userJournal.map((journalTitle) =>
                journalTitle.get_journals.map((journal) => (
                  <div className={classes.boxes_rounded}>
                    <div>
                      <p>{journalTitle.name}</p>
                      <h4>{journal.journal_to}</h4>
                    </div>
                    <div className="d-flex justify-content-end">
                      <p>{dataFormatter(journal.created_at)}</p>
                    </div>
                  </div>
                ))
              )
            )
            // <p>data loadeded</p>
          }
        </Card>
      </section>
    </>
  );
};

export default Journal;
