import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from '../../Header/index.module.scss'
import bellicon from '../../../Images/bellicon.png'
import { Link } from "react-router-dom";

const SecondHeader = (props) => {
  const data = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div id={classes.header}>
      <div className={classes.headerRight}>
            <ul className={classes.headerIcons}>
              {/* <li> <Link to="/"><i class="fal fa-share-alt"></i></Link> </li>
              <li> <Link to="/"><i class="fal fa-calendar-alt"></i></Link> </li> */}
              <li> <Link to="/"><i class="fal fa-bell"></i></Link></li>
            </ul>
          </div>
          <div className={classes.headerRight}>
            <div className={classes.title}>Hello {data.name} ,</div>
            <h2>Welcome Back!</h2>
          </div>
      </div>
    </>
  );
};

export default SecondHeader;
