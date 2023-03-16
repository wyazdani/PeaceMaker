import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          {localStorage.getItem("role_id") == 2 ? (
            <>
              <li>
                <Link to={"/home"}>
                  <i class="icon-Home"></i>Home
                </Link>
              </li>
              <li>
                <Link to={"/explore-provider"}>
                  <i class="icon-Search"></i> Explore Providers
                </Link>
              </li>

              <li>
                <Link to={"/messages"}>
                  {" "}
                  <i class="icon-envelop"></i>Messages
                </Link>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle>
                    <i class="icon-Chart "></i> Habit Tracker
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link to={"/habit-tracker"}>Habits I want to develop</Link>
                    <Link to={"/habit-tracker-next"}>Habits I want to get rid of</Link>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Link to={"/journal"}>
                  {" "}
                  <i class="icon-Calender"></i> Journal
                </Link>
              </li>

              <li>
                <Link to={"/affirmations"}>
                  {" "}
                  <i class="icon-Heart"></i> Affirmations
                </Link>
              </li>

              <li>
                <Link to={"/challenges"}>
                  {" "}
                  <i class="icon-Star"></i> Challenges
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          {localStorage.getItem("role_id") == 3 ? (
            <>
              <li>
                <Link to={"/provider-userprofile"}>
                  {" "}
                  <i class="icon-Login"></i>Patients
                </Link>
              </li>

              <li>
                <Link to={"/review"}>
                  {" "}
                  <i class="icon-Login"></i>Messages
                </Link>
              </li>

              <li>
                <Link to={"/notification"}>
                  {" "}
                  <i class="icon-Login"></i>Reviews
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <li>
            <Link to={"/log-out"}>
              {" "}
              <i class="icon-Login"></i> Log out
            </Link>
          </li>

          {/* <li>
                        <Dropdown>
                            <Dropdown.Toggle>
                                Provider
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to={"/provider-userprofile"}>Users Profile</Link>
                                <Link to={"/review"}>Reviews</Link>
                                <Link to={"/notification"}>Notification</Link>
                                <Link to={"/patient"}>Users</Link>
                                <Link to={"#"}></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
