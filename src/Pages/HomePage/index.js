import HeaderTop from 'Components/Header'
import profile from "../../Images/background.jpg"
import loginImg from "../../Images/sign-in-left-img.png"
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import classes from "./index.module.scss";

const HomePage = (props) => {
  return (
    <>
      <HeaderTop />
      <Row className='p-4'>
        <Col lg={4}>
          <div className={classes.profile_img}>
            <img src={profile} alt="" />
          </div>
        </Col>
        <Col lg={8}>
          <Row>
            <Col xl={4} md={6} className=' mb-xl-0 mb-3'>
              <Card className={classes.inner_card}>
                <i class="fas fa-pennant"></i>
                <Card.Body className='flex-unset'>
                  <Card.Title> <h1>20</h1> </Card.Title>
                  <Card.Text>
                    Challenge Points
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} md={6} className=' mb-xl-0 mb-3'>
              <Card className={classes.inner_card}>
                <i class="far fa-smile"></i>
                <Card.Body>
                  <Card.Title> <h1>60%</h1> </Card.Title>
                  <Card.Text>
                    Challenge Points
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} >
              <Card className={classes.inner_card}>
                <i class="fas fa-bullseye-arrow"></i>
                <Card.Body>
                  <Card.Title> <h1>30%</h1> </Card.Title>
                  <Card.Text>
                    Challenge Points
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Row>
          <Col lg={4}>
            <div className={classes.left_bottom}>
              <Row>
                <Col lg={6} >
                  <strong> <h4>Daily State</h4></strong>
                </Col>
                <Col lg={6} className='text-end'>
                  <span><i class="far fa-exclamation-circle"></i></span>
                </Col>
                <hr />
              </Row>
            </div>
            <Col>
              <Row className='m-2'>
              <Card className={classes.challenges_section}>
                <h2>Challenges</h2>
                <hr />
                <Row>
                <Col lg={6}>
                  <div className={classes.challenges}>
                    <i class="fas fa-pennant"></i>
                    <p>Total Points: <strong>2</strong></p>
                    <span> 1 / 70</span>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={classes.login_img}>
                    <img src={loginImg} alt="" />
                  </div>
                </Col>
                </Row>
                </Card>
                <Row >
                </Row>
              </Row>
            </Col>
          </Col>
          <Col lg={8} className='text-center' >

            <Card className={classes.right_bottom}>
              <Row>
                <Col lg={6}>
                  <h2>User Activity</h2>
                </Col>
                <Col lg={6}>
                  <p>View Records</p>
                </Col>

                <hr />
                <Row >
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} >
                    <Card className={classes.card_background}>
                      <Card.Body>
                        <span><i class="fal fa-plus-square"></i></span><strong>Habit Tracker</strong>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Card>

          </Col>


        </Row>

      </Row>
    </>
  )
}

export default HomePage
