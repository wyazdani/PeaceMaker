import HeaderTop from "Components/Header";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import profile from "Images/background.jpg";
import classes from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AffirmationAPI from "api/Affirmation";
import SavePopUp from "./SavePopUp";

const Affirmations = () => {
  const navigate = useNavigate();
  const IconClick = () => {
    navigate("/setting-icon-click");
  };

  const [affirmation, setAffirmation] = useState([]);
  const [loader, setloader] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const fetchAllAffirmation = async () => {
    const res = await AffirmationAPI.getAffirmations();
    if (res) {
      setAffirmation(res.data.data);
      setloader(false);
      console.log(JSON.stringify(affirmation));
    }
  };
  useEffect(() => {
    fetchAllAffirmation();
  }, []);

  if (loader == false)
    return (
      <>
        <HeaderTop />
        <section>
          <Row>
            <Col lg={6}>
              <div className={classes.profile_img}>
                <img src={profile} alt="" />
                <div className={classes.img_text}>
                  <div className="d-flex justify-content-between p-3">
                    <p> Daily Affirmation</p>
                   
                    <Link to="#">
                      <i class="fas fa-play"></i>
                    </Link>
                  </div>
                  <h1>“I am God’s workmanship, created in Christ.”</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={classes.scrollBox}>
                <div className={classes.Affirmations_header}>
                  <div>
                    
                      <h2>Daily Affirmation</h2>
                    
                    <p>How do you want us to give you a nice 5 minutes cool down?</p>
                  </div>
                 
                    <div className={classes.setting_icon}>
                    <Button onClick={() => setModalShow(true)}  variant="gradient">Save</Button>
                      <Link to={"/setting-icon-click"} onClick={IconClick} href="#">
                        <i class="far fa-cog"></i>
                      </Link>
                    </div>
                  
                </div>
                <Card.Body>
                  <ul className={"activity_list col1"}>
                    {affirmation.map((data) => (
                      <li>
                        <Accordion className={"box_accordian"}>
                          <Accordion.Header>
                            <i className={"fas fa-plus"}></i>
                            {data.type_name}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ListGroup variant="flush">
                              {data.affirmations.map((affirmation) => (
                                <ListGroup.Item>{affirmation.affirmation_content}</ListGroup.Item>
                              ))}
                              {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item> */}
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion>
                      </li>
                    ))}
                    {/* <li>
                      <Accordion className={"box_accordian"}>
                        <Accordion.Header>
                          <i className={"fas fa-plus"}></i>Identity
                        </Accordion.Header>
                        <Accordion.Body>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Body>
                      </Accordion>
                    </li> */}
                  </ul>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} className="my-3">
              <h1>Playlist</h1>
              <div className={classes.playlist}>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className={classes.playlist_record}>
                  <div>
                    <h4>Affirmations for Nightmare</h4>
                    <p>Created last Feb 2, 2022</p>
                  </div>
                  <div>
                    <Link to={"#"} className={classes.edit}>
                      <i class="far fa-pen"></i>
                    </Link>
                    <Link to={"#"} className={classes.delete} href="#">
                      {" "}
                      <i class="far fa-trash-alt"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <SavePopUp show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  else return <div></div>;
};

export default Affirmations;
