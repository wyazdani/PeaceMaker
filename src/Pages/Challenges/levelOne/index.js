import classes from '../../Challenges/index.module.scss'
import HeaderTop from 'Components/Header'
import LevelOneComponent from 'Components/LevelOneComponent';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import img from "../../../Images/flag.png"

const LevelOne = () => {

  return (
    <>
      <HeaderTop />
      <section>
      <Row>
        <Col md={8}>
          <h2>Level One Challenges</h2>
        </Col>
        <Col md={4}>
          <Card className='p-0'>
            <Card.Body>
              <div className={classes.inner_styling}>
                <div className={classes.img_box}><img src={img} alt="" /></div>
                <p>Challenge Points</p>
                <h3>20</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <LevelOneComponent />
      </Row>
      </section>
    </>
  )
}

export default LevelOne