import React from "react";
import classes from "./index.module.scss";
import Logo from "../Logo";
import Nav from "../Nav/Nav";

const Sidebar = () => {
    return(
        <>
            <aside className={classes.sidebar}>
                <Logo />
                <Nav />
            </aside>
        </>
    )
}

export default Sidebar;