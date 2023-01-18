import HeaderTop from 'Components/Header'
import profile from "../../Images/background.jpg"
import daily from "../../Images/dailyimg.png"
import loginImg from "../../Images/loginImg.svg"
import flag from "../../Images/flag.svg"
import challenges from "../../Images/challangeImg.svg"
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  return (
    <>
      <HeaderTop />
      <section>
        <Row className='mb-3'>
          <Col lg={4}>
            <div className={classes.profile_img} style={{ backgroundImage: `url(${profile})`,}}>
              <div className={classes.img_text}>
                Daily Affirmation
                <h3>“I am God’s workmanship, created in Christ.”</h3>
                <a className='d-flex justify-content-end' href="#"><i class="fas fa-play"></i></a>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col md={6} lg={4} xl={4} xxl={4}>
                <Card className={classes.card_inner}>
                  <Card.Body>
                    <a href='#' className={classes.icon_box}>
                      <img src={flag} alt="" />
                    </a>
                    <h1>20</h1>
                    <h4>challenges <br /> point</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4} xl={4} xxl={4}>
                <Card className={classes.card_inner}>
                  <Card.Body>
                    <a href='#' className={classes.icon_box}> <i class="far fa-smile"></i></a>
                    <h1>60%</h1>
                    <h4>average <br /> Happiness</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4} xl={4} xxl={4}>
                <Card className={classes.card_inner}>
                  <Card.Body>
                    <a href='#' className={classes.icon_box}> <i class="icon-target-black"></i></a>
                    <h1>30%</h1>
                    <h4>average <br /> Target</h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={4} >
            <Card>
              <Card.Header >
                <Card.Title>User Activity</Card.Title>
                <Link to={"#"} className='text-decoration-none'><span class="icon-alert1"></span></Link>
              </Card.Header>
              <Card.Body>
                <div className={classes.img_box}>
                  <img src={daily} alt="" />
                </div>
              </Card.Body>
            </Card>
            <Card className='bg-bottom-right' style={{ backgroundImage: `url(${loginImg})`,}}>
              <Card.Header >
              <Card.Title>Challenges</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                  <img src={challenges} alt="" />
                  <h5 className='text-muted'>Total Points:2</h5>
                  <h5 className='text-green'> 1 / 70</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card>
              <Card.Header>
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
      </section>
    </>
  )
}

export default HomePage
