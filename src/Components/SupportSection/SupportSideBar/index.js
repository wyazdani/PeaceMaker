import React from 'react'
import user1 from "Images/unsplash.png";
import user2 from "Images/unsplash2.png";
import user3 from "Images/unsplash3.png";
import classes from "./index.module.scss";

const SupportSideBar = () => {
  return (
    <div className={classes.messageListSidebar}>
      <h1>Messages</h1>
      <ul>
        <li className={classes.active}>
          <div className="d-flex justify-content-between align-items-center">
            <div className={classes.icon_text}>
              <img src={user1} alt="" />
              <p><strong>Thomas Edison</strong> <br /> Thanks! I’ll get back to you...</p>
            </div>
            <time> 1:23 PM </time>
          </div>
        </li>
  
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <div className={classes.icon_text}>
              <img src={user2} alt="" />
              <p><strong>Thomas Edison</strong> <br /> Thanks! I’ll get back to you...</p>
            </div>
            <time> 1:23 PM </time>
          </div>
        </li>

        <li>
          <div className="d-flex justify-content-between align-items-center">
            <div className={classes.icon_text}>
              <img src={user3} alt="" />
              <p><strong>Thomas Edison</strong> <br /> Thanks! I’ll get back to you...</p>
            </div>
            <time> 1:23 PM </time>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default SupportSideBar