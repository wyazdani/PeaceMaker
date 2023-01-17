import profile from "../../../Images/s2.jpg"
import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import "../../ExploreProvider/index.module.scss"
import classes from "../index.module.scss";

const MapPopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='medium'
                centered
            >
                <Modal.Body className={classes.main_popup}>
                    <div className="main_div text-center  ">
                        <div className={classes.profile_img2}>
                            <img src={profile} alt="" />
                        </div>
                        <h1>Thomas Edison</h1>
                        <strong>Psychologist</strong>
                        <p className="text-muted mb-2">thomas_edison@gmail.com</p>
                        <div>
                            <Button className='btn btn-gradient w-75 my-4'>Save</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MapPopUp