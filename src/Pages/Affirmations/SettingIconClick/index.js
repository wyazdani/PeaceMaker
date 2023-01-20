import classes from "./index.module.scss";
import HeaderTop from 'Components/Header';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Time from "./Time";
import BloodPressure from "./BloodPressure";
import BodyTemperature from "./BodyTemperature";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LeftTabsExample() {
    const navigate = useNavigate();
    const TurnBack = () => {
        navigate('/affirmations');
    };
    return (
        <>
            <HeaderTop />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className='d-flex justify-content-start'>
                 
                </div>
                <div className={classes.main_tabs}>
                    <Row>
                        <Col sm={4} className={classes.border_line} >
                         <span onClick={TurnBack} className={classes.arrow_style}><i class="far fa-arrow-left"></i><h2>Settings</h2></span>
                            <Nav variant="pills" className="flex-column vertical-tabs">
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="first">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className={classes.icon_text}>
                                                <i class="icon-time"></i>
                                                <strong>Time</strong>
                                            </div>
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