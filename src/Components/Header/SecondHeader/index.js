import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from '../../Header/index.module.scss'
import bellicon from '../../../Images/bellicon.png'

const SecondHeader = (props) => {
  return (
    <>
      <div id={classes.header}>
        <Row className='m-3'>
          <Col md={6} >
            <p>Hello Jacob ,</p>
            <strong><h2>Welcome Back!</h2></strong>
          </Col>
          <Col md={6}>
            <div className={classes.icons}>
                 <img src={bellicon} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SecondHeader;
