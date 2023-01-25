import React from "react";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";

const PageTitle = (prorps) => {
    return (
        <div className={`${classes.pageTitle}`}>
            <header id={classes.header}>
                <div className={classes.headerRight}>
                    <ul className={classes.headerIcons}>
                        <li><Link to="/"><i className="fal fa-bell"></i></Link></li>
                    </ul>
                </div>
                <div className={classes.headerRight}>
                    <h2>{prorps.title}</h2>
                </div>
            </header>
        </div>
    )
}

export default PageTitle;