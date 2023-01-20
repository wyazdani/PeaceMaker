import React from 'react'
import user1 from "Images/unsplash.png";
import userlogo from "Images/ImageTable.png";
import profile from "Images/ImageTable.png";
import { Form } from 'react-bootstrap';
import classes from "./index.module.scss";
const MsgPreview = () => {
  return (
    <div className={classes.msgPreview}>
      <div className={classes.chat_header}>
        <div className={classes.userInfo}>
          <div className={classes.description}>
            <div className={classes.icon_img}>
              <i className='icon-envelop'></i><div className={classes.img_box}><img src={userlogo} alt="" /></div>
            </div>
            <div className={classes.text1}>
              <h6>Thomas Edison</h6>
              <div className={classes.text}>Psychologist</div>
            </div>
          </div>
        </div>
        <div className={classes.description}>
          <i className='icon-alert'></i>

        </div>
      </div>
      <div className={classes.mesgs}>
        <div className={classes.msg_history}>
          <div className={classes.incoming}>
            <div className={classes.userImg}>
              <img src={userlogo} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.outgoing}>
            <div className={classes.userImg}>
              <img src={user1} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.incoming}>
            <div className={classes.userImg}>
              <img src={userlogo} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.outgoing}>
            <div className={classes.userImg}>
              <img src={user1} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.incoming}>
            <div className={classes.userImg}>
              <img src={userlogo} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.outgoing}>
            <div className={classes.userImg}>
              <img src={user1} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.incoming}>
            <div className={classes.userImg}>
              <img src={userlogo} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.outgoing}>
            <div className={classes.userImg}>
              <img src={user1} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.incoming}>
            <div className={classes.userImg}>
              <img src={userlogo} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
          <div className={classes.outgoing}>
            <div className={classes.userImg}>
              <img src={user1} alt="username" />
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to have all solutions
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.text}>
                Test which is a new approach to have all solutions. Test
                which is a new approach to
                <div className={classes.time}> 11:01 AM</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.type_msg}>

          <button type="button" className={classes.btn}>
            <i class="fal fa-plus"></i>{" "}
          </button>
          <div className={classes.position_relative}>
            <input
              type="text"
              className={classes.form_control}
              placeholder="Type a message"
            />
            <div>
              <i class='icon-black-smile'></i>
            </div>
          </div>
          <button className={`${classes.btn_next} ${classes.btnSend}`} type="button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MsgPreview