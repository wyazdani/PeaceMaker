import React from "react";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Header id={"header"}>
        <ul className={classes.headerIcons}>
          <li><Link to={"#"}>abc </Link></li>
        </ul>
      </Header>
    </>
  );
};

export default Header;
