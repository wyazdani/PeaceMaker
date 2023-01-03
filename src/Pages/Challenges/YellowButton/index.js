import classes from "./index.module.scss";
import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import profile from '../../../Images/nevi.jpg'

const YellowButton = () => {
  return (
    <>
      <HeaderTop />
      <Row className='justify-content-center text-center'>
        <Col md={8}>
          <p>Challenge 1</p>
          <h2>Find 7 Yellow Buttons</h2>
          <div className={classes.main_body}>
            <img src={profile} alt="" />
          </div>
        </Col>
      </Row>
      <div className="m-5">
        <div className={classes.main_card}>
          <Row className="g-3 my-2">
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>Duration: <strong>1 Day</strong></p>
                    <p>Challenge Point Level: <strong>1 Day Point</strong></p>
                    <p>7 Day Challenge: <strong> 1 Day</strong></p>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>Find 7 different yellow buttons anywhere you see them throughout the day.</p>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>You may forget or get distracted. That is the entire point of today’s training. Be mindful throughout the day looking for the buttons.</p>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>“Training the mind and the body leads to awareness of the soul.”</p>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>Recommend two reminder times, first, just before you leave for your coffee break or lunch.</p>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col md={6} sm={12} lg={4} xl={4} xxl={4}>
              <div className=" h-100">
                <Card.Body className={classes.card_background}>
                  <div className={classes.btn_background}>
                    <button className={classes.btn_card} >Days Of Challenge</button>
                  </div>
                  <div className={classes.text_body}>
                    <p>Train the mind off of self and focus it on what’s going on now.</p>
                  </div>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center m-5 ">
            <button className='btn btn-gradient d-block w-50'>Add Habit</button>
          </div>
      </div>
    </>
  )
}

export default YellowButton