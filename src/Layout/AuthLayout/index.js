import React from "react";
import classes from "./index.module.scss";
import {Col, Row} from "react-bootstrap";
import Logo from "../../Components/Logo";


const AuthLayout = ({ children }) => {
  return (
    <div className={classes.login}>
      <div className={"container-fluid"}>
          <div className={classes.loginholder}>
              <div className={classes.rightCol}>
                  <div className={classes.fromHolder}>
                      <Logo />
                      {children}
                  </div>
              </div>
              <div className={classes.leftCol}>

              </div>
          </div>

      </div>
    </div>
  );
};

export default AuthLayout;
