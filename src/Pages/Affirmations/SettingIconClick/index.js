import classes from "./index.module.scss";
import HeaderTop from 'Components/Header';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Time from "./Time";
import BloodPressure from "./BloodPressure";
import BodyTemperature from "./BodyTemperature";

// import Sonnet from '../../components/Sonnet';

function LeftTabsExample() {
    return (
        <>
            <HeaderTop />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className={classes.main_tabs}>
                    <Row className="m-5">

                        <Col sm={3} >
                            <h2>Settings</h2>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className={classes.tabs}>
                                    <Nav.Link className={classes.nav_styling} eventKey="first">
                                        <div className="d-flex justify-content-between">
                                            <div className={classes.icon_text}>
                                                <span className={classes.clock}><i class="fal fa-clock"></i></span>
                                            </div>
                                            <strong> <p>Time</p></strong>
                                            <span><i class="far fa-chevron-right"></i></span>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="second">Blood Pressure</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={classes.nav_styling} eventKey="third">Body Temperature</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {/* <div class="d-flex" style="height: 200px;">
                            <div class="vr"></div>
                        </div> */}
                        </Col>

                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Time />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                     <BloodPressure/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                     <BodyTemperature/>
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