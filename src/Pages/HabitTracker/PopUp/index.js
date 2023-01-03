import React from 'react'
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import classes from "./index.module.scss";
const PopUp = (props) => {
    const navigate = useNavigate();
    const AddHabit = () => {
        navigate('/add-habit-next');
    };
    return (
        <>
          <Row className='m-5'>
                        <Col>
                            <h2>Add Habit</h2>
                            <hr />
                        </Col>
                    
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> <strong>Habit Name</strong> </Form.Label>
                                <Form.Control type="text" placeholder="Habit Name" />
                            </Form.Group>
                        </Form>
                       
                        <Row className={classes.boxes}>
                            <Col className={classes.mid_box}><span> M <br /></span>  </Col>
                            <Col className={classes.mid_box}><span> T <br /></span> </Col>
                            <Col className={classes.mid_box}><span> W <br /></span>  </Col>
                            <Col className={classes.mid_box}><span> T <br /></span> </Col>
                            <Col className={classes.mid_box}><span> F <br /></span> </Col>
                            <Col className={classes.mid_box}><span> S <br /></span>  </Col>
                            <Col className={classes.mid_box}><span> S <br /></span>  </Col>
                        </Row>
                        <Row>
                            <Col>  <h2>Set Time</h2></Col>
                        </Row>
                       <div className="text-center  m-2">
                      
                        <div>
                        <Button onClick={AddHabit} className='btn btn-gradient px-5 '>Save</Button>
                        </div>
                        <div >
                        <Button className={classes.btn_cancel} onClick={props.onHide}> <strong>Cancel</strong> </Button>
                        </div>
                        </div>
                    </Row>
            <Modal
                show={props.show}
                size='md'
                centered
            >
                <Modal.Body>
              
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PopUp
