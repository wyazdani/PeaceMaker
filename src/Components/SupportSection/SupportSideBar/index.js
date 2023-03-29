import React, { useState } from "react";
import user1 from "Images/unsplash.png";
import user2 from "Images/unsplash2.png";
import user3 from "Images/unsplash3.png";
import classes from "./index.module.scss";

const SupportSideBar = (props) => {
  const [selected, setSelected] = useState();
  const handleSideBar = (id) => {
    setSelected(id);
    props.getChat(id);
  };
  return (
    <div className={classes.messageListSidebar}>
      <h1>Messages</h1>
      <ul>
        {props.chats.map((data) => (
          <li
            onClick={() => handleSideBar(data.id)}
            className={`${selected === data.id ? `${classes.active}` : ""}`}
            key={data.id}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className={classes.icon_text}>
                <img src={user1} alt="" />
                <p>
                  <strong>{data.name}</strong> <br /> Thanks! I’ll get back to you...
                </p>
              </div>
              <time> 1:23 PM </time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportSideBar;
