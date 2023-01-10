import HeaderTop from 'Components/Header'
import profile from "../../Images/background.jpg"
import daily from "../../Images/dailyimg.png"
import loginImg from "../../Images/login.png"
import flag from "../../Images/flag.png"
import challenges from "../../Images/challangeImg.png"
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  return (
    <>
      <HeaderTop />
      <Row className='p-4'>
        <Col lg={4}>
          <div className={classes.profile_img}>
            <img src={profile} alt="" />
            <div className={classes.img_text}>
              <p>Daily Affirmation</p>
              <h3>“I am God’s workmanship, created in Christ.”</h3>
              <a className='d-flex justify-content-end' href="#"><i class="fas fa-play"></i></a>
            </div>
          </div>
        </Col>
        <Col lg={8} className='mb-3'>
          <Row className='g-4'>
            <Col md={6} lg={4} xl={4} xxl={4}>
              <Card className={classes.card_inner}>
                <a href='#' className={classes.icon_box}>
                  <img src={flag} alt="" />
                </a>
                <Card.Body>
                  <h1>20</h1>
                  <p>challenges <br /> point</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} xl={4} xxl={4}>
              <Card className={classes.card_inner}>
                <a href='#' className={classes.icon_box}> <i class="far fa-smile"></i></a>
                <Card.Body>
                  <h1>60%</h1>
                  <p>average <br /> Happiness</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} xl={4} xxl={4}>
              <Card className={classes.card_inner}>
                <a href='#' className={classes.icon_box}> <i class="icon-target-black"></i></a>
                <Card.Body>
                  <h1>30%</h1>
                  <p>average <br /> Target</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Row >
          <Col lg={4}>
            <Card>
              <Card.Header className={classes.header_bg}>
                <Card.Title>User Activity</Card.Title>
                <Link to={"#"} className='text-green text-decoration-none'><span class="icon-alert1"></span></Link>
              </Card.Header>
              <Card.Body>
                <div className={classes.img_box}>
                  <img src={daily} alt="" />
                </div>
              </Card.Body>
            </Card>
              <Card className={classes.main_card}>
                <Card.Header className={classes.header_bg}>
                  <h2>Challenges</h2>
                </Card.Header>
                <Card.Body className='d-flex justify-content-center'>
                  <div className={classes.challenges}>
                  <a href="#"> <img src={challenges} alt="" /> </a>
                    <p>Total Points: <strong>2</strong></p>
                    <strong className='text-green'> 1 / 70</strong>
                  </div>
                  <div className={classes.login_img}>
                    <img src={loginImg} alt="" />
                  </div>
                </Card.Body>
              </Card>
          </Col>
          <Col md={8} lg={8}>
            <Card className={classes.main_card}>
              <Card.Header className={classes.header_bg}>
                <Card.Title>User Activity</Card.Title>
                <Link to={"#"} className='text-green text-decoration-none'>View Records</Link>
              </Card.Header>
              <Card.Body>
                <ul className={'activity_list col2'}>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className={'box'}>
                      <i className={'fas fa-plus'}></i>
                      Habit Tracker
                    </Link>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default HomePage
