import profile from "../../../Images/s2.jpg";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "../../ExploreProvider/index.module.scss";
import classes from "../index.module.scss";

const MapPopUp = (props) => {
  const [provider, setProvider] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    setProvider(props.data);
    const baseImagePath = "https://dev.api.peacemakerapp.com/storage/user_profile/";
    const profile_image = provider.profile_picture != "" ? baseImagePath + provider.profile_picture : profile;
    setUserProfile(profile_image);
  });
  return (
    <div>
      <Modal show={props.show} size="medium" centered>
        <Modal.Body className={classes.main_popup}>
          <div className="main_div text-center  ">
            <div className={classes.profile_img2}>
              <img src={userProfile} alt="" />
            </div>
            <h1>{provider.name}</h1>
            <strong>{provider.profession}</strong>
            <p className="text-muted mb-2">{provider.email}</p>
            <div>
              <Button className="btn btn-gradient w-75 my-4">Message Now</Button>
            </div>
            <div className="text-center mb-2">
              <Button onClick={props.onHide} className={classes.btn_cancel}>
                {" "}
                <strong>Cancel</strong>{" "}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MapPopUp;
