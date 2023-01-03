import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/home"}><i class="fas fa-home-lg-alt"></i>Home</Link>
                    </li>

                    <li>
                        <Link to={"/explore-provider"}><i class="fas fa-search" ></i> Explore Providers</Link>
                    </li>

                    <li>
                        <Link to={"/build-map"}> <i class="fas fa-envelope"></i>Messages</Link>
                    </li>

                    <li>
                    
                     <Dropdown>
                     <Link to ={"/add-habit-next"}>
                            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                                <i class="fas fa-file-chart-line "></i> Habit Tracker

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Link>
                        </Dropdown>
                    </li>

                    <li>
                        <Link to={"/journal"}> <i class="fas fa-book"></i> Journal</Link>
                    </li>

                    <li>
                        <Link to={"/affirmations"}> <i class="fas fa-heart"></i> Affirmations</Link>
                    </li>

                    <li>
                        <Link to={"/challenges"}> <i class="fas fa-star"></i> Challenges</Link>
                    </li>


                    <li>
                        <Link to={"/log-out"}> <i class="fas fa-arrow-alt-from-left"></i> Log out</Link>
                    </li>


                </ul>
            </nav>
        </>
    )
}

export default Nav;