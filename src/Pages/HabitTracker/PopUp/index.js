import React from 'react'
import { Modal, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import classes from '../../HabitTracker/index.module.scss'
const PopUp = (props) => {
    const navigate = useNavigate();
    const AddHabit = () => {
        navigate('/add-habit-next');
    };
    return (
        <>

            <Modal
                show={props.show}
                size='md'
                centered
            >
                <Modal.Body>
                    <h3 className={classes.habit_border_bottom} > Add Habit</h3>
                    <Form className='mb-4'>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label> <strong>Habit Name</strong> </Form.Label>
                            <Form.Control type="text" placeholder="Habit Name" />
                        </Form.Group>
                    </Form>
                    <Row className={classes.boxes}>
                    <h5>Repeat</h5>
                        <Col className={classes.mid_box}><span> M </span>  </Col>
                        <Col className={classes.mid_box}><span> T</span> </Col>
                        <Col className={classes.mid_box}><span> W </span>  </Col>
                        <Col className={classes.mid_box}><span> T </span> </Col>
                        <Col className={classes.mid_box}><span> F </span> </Col>
                        <Col className={classes.mid_box}><span> S </span>  </Col>
                        <Col className={classes.mid_box}><span> S</span>  </Col>
                    </Row>
                    <h5>Set Time</h5>
                   <div className='text-center'>
                    <Button onClick={AddHabit} className='btn btn-gradient'>Save</Button>
                    <Button className={classes.btn_cancel} onClick={props.onHide}> <strong>Cancel</strong> </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PopUp
