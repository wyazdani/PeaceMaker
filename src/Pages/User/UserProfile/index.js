import HeaderTop from "Components/Header";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import classes from "../../User/index.module.scss";
import profile from "../../../Images/unsplash.png";
import User from "..";
import { BarChart } from "Components/Chart/BarChart";
import CSV from "Components/CSV";
import DateSet from "Components/DatePicker";

const UserProfile = (props) => {
  const baseImagePath = "https://staging.api.peacemakerapp.com/storage/user_profile/";
  const [user, setUser] = useState([]);
  const profile_image = user.profile_picture != "" ? baseImagePath + user.profile_picture : profile;
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  });
  return (
    <>
      <HeaderTop />
      <section>
        <Card>
          <Row className={classes.user_sec}>
            <Col md={4}>
              <div className="d-flex align-items-center">
                <div className={classes.img_box}>
                  <img src={profile_image} alt="" />
                </div>
                <div className={classes.profile_info}>
                  <div className={"fw-bold mb-2 font-20"}>{user.name}</div>
                  <div className={"font-16"}>{user.email}</div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className={"text-muted mb-2"}>Phone Number:</div>
              <div className={"font-16"}>{user.phone}</div>
            </Col>
            <Col md={4}>
              <div className={"text-muted mb-2"}> Location:</div>
              <div className={"font-16"}>Los Angeles, Canada</div>
            </Col>
          </Row>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>User’s Record</Card.Title>
            <div className="d-flex justify-content-end">
              <DateSet />
              <CSV />
            </div>
          </Card.Header>
          <Tabs defaultActiveKey="Results" className="second-tab" justify transition={false}>
            <Tab eventKey="Results" title="Results">
              <User />
            </Tab>
            <Tab eventKey="Nutrition" title="Nutrition">
              <BarChart />
            </Tab>
            <Tab eventKey="Digital Footprint" title="Digital Footprint"></Tab>
          </Tabs>
        </Card>
      </section>
    </>
  );
};

export default UserProfile;
