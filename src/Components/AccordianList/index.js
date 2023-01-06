import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from '../../Pages/HomePage/index.module.scss'

const List = () => {
  return (
    <>
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
    </>
  )
}

export default List