import profile from "../../../Images/s2.jpg"
import React from 'react'
import { Button, Card, Form, Modal, Row } from 'react-bootstrap'
import "../../ExploreProvider/index.module.scss"
import classes from "../../Messages/index.module.scss";

const MessagePopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='medium'
                centered
            >
                <Modal.Body className={classes.main_popup}>

                    <h3>Checklist</h3>
                    {['checkbox'].map((type) => (
                        <div key={type} className={classes.checkbox_background}>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge One (Find 7 Yellow Buttons)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Two (Find 2 Wind Chimes)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Three (Find a Red Door)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Four (Find 3 Cracked CP..)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Five (Find 3 Seasonally...)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Six (Find 7 Yellow Buttons)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Seven (Find a Red Door)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Eight (Find 3 Cracked CP..)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Nine (Find 2 Wind Chimes)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Ten (Find 3 Cracked CP..)</Form.Check.Label>

                            </Form.Check>
                            <Form.Check type={type} className='mb-3' id={`check-api-${type}`}>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label className='d-block font-weight-normal font-16'>Challenge Eleven (Find 3 Cracked CP..)</Form.Check.Label>

                            </Form.Check>
                        </div>
                    ))}
                    <div className="w-100 text-center">
                        <Button className='btn btn-gradient'>Send Challenge</Button>
                    </div>
                    <div className="w-100 text-center">
                        <Button className={classes.btn_cancel} onClick={props.onHide}> <strong>Cancel</strong> </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MessagePopUp