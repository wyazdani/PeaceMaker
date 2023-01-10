import classes from "./index.module.scss";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Button, Card } from "react-bootstrap";
import SecondHeader from "Components/Header/SecondHeader";
import Time from "Pages/Affirmations/SettingIconClick/Time";
import BloodPressure from "Pages/Affirmations/SettingIconClick/BloodPressure";
import BodyTemperature from "Pages/Affirmations/SettingIconClick/BodyTemperature";
import profile from '../../Images/unsplash.png'

// import Sonnet from '../../components/Sonnet';

function LeftTabsExample() {
    return (
        <>
            <SecondHeader />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className={classes.main_tabs}>
                    <Row>
                        <Col sm={4} className={classes.border_line} >

                            <h2>Messages</h2>
                            <Nav variant="pills" className="flex-column vertical-tabs">
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="first">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className={classes.icon_text}>
                                                <img src={profile} alt="" />
                                                   <strong>Thomas Edison</strong> 
                                                   </div>
                                                   <p> Thanks! I’ll get back to you...</p>
                                           
                                            <div>
                                                <i class="far fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="second">
                                        <div className="d-flex justify-content-between">
                                            <div className={classes.icon_text}>
                                                <i class="icon-HeartPressure1"></i>
                                                <strong> Blood Pressure</strong>
                                            </div>
                                            <span><i class="far fa-chevron-right"></i></span>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="third">
                                        <div className="d-flex justify-content-between">
                                            <div className={classes.icon_text}>
                                                <i class="icon-Thermometer1"></i>
                                                <strong>Body Temperature</strong>
                                            </div>
                                            <span><i class="far fa-chevron-right"></i></span>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className={classes.btn_bottom}>
                                <button className='btn btn-gradient d-block w-50'>Add Habit</button>
                            </div>
                        </Col>

                        <Col sm={8} className='position-relative'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Time />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <BloodPressure />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <BodyTemperature />
                                </Tab.Pane>
                            </Tab.Content>

                        </Col>

                    </Row>
                </div>
            </Tab.Container>
        </>
    );
}

export default LeftTabsExample;