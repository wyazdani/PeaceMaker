import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import bellicon from '../../Images/bellicon.png'

const HeaderTop = (props) => {
  return (
    
      <div id={classes.header}>
        <Row className='m-4'>
          <Col md={6} >
            <p>Hello Jacob ,</p>
            <strong><h2>Welcome Back!</h2></strong>
          </Col>
          <Col md={6}>
            <ul className={classes.icons}>
              <li> <a href="/"><i class="far fa-share-alt"></i></a> </li>
              <li> <a href="/"><i class="far fa-calendar-alt"></i></a> </li>
              <li> <a href="/"><img src={bellicon} alt="" /></a></li>
            </ul>
          </Col>
        </Row>
      </div>
    
  );
};

export default HeaderTop;
