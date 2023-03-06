import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";

const HeaderTop = (props) => {
  // console.log(props.user.name)
  const data = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <header id={classes.header}>
          <div className={classes.headerRight}>
            <ul className={classes.headerIcons}>
              <li> <Link to="/"><i class="fal fa-share-alt"></i></Link> </li>
              <li> <Link to="/"><i class="fal fa-calendar-alt"></i></Link> </li>
              <li> <Link to="/"><i class="fal fa-bell"></i></Link></li>
            </ul>
          </div>
          <div className={classes.headerRight}>
            <div className={classes.title}>Hello {data.name},</div>
            <h2>Welcome Back!</h2>
          </div>
      </header>
    </>
  );
};

export default HeaderTop;
