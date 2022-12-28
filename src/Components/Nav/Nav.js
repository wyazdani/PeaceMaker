import React from  "react";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={"/maps"}>Maps</Link>
                    </li>
                    <li>
                        <Link to={"/build-map"}>Build a map</Link>
                    </li>
                    <li>
                        <Link to={"/users"}>Users</Link>
                    </li>
                    <li>
                        <Link to={"/tools"}>Tools</Link>
                    </li>
                    <li>
                        <Link to={"/assets"}>Assets</Link>
                    </li>
                    <li>
                        <Link to={"/prize-info"}>Prize Info</Link>
                    </li>
                    <li>
                        <Link to={"/winner"}>Winner</Link>
                    </li>
                    <li>
                        <Link to={"/leader-board"}>Leaderboard</Link>
                    </li>
                    <li>
                        <Link to={"/music"}>Music</Link>
                    </li>
                    <li>
                        <Link to={"/notifications"}>Notifications</Link>
                    </li>
                    <li>
                        <Link to={"/exchange"}>Exchange</Link>
                    </li>
                    <li>
                        <Link to={"/tutorial"}>Tutorial</Link>
                    </li>
                    <li>
                        <Link to={"/ads"}>Ads</Link>
                    </li>
                    <li>
                        <Link to={"/guidelines"}>Guidelines</Link>
                    </li>
                    <li>
                        <Link to={"/support"}>Support</Link>
                    </li>
                    <li>
                        <Link to={"/log-out"}>Log out</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;