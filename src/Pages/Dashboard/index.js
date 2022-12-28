import React from "react";
import classes from "./index.module.scss";
import PageTitle from "../../Components/Pagetitle";
import {Col, Row, Card, Button, Tab, Tabs} from "react-bootstrap";
import Cards from "../../Components/Cards/Cards";
import MapWinners from "./DashboardTabs/mapWinners";
import AddNewSubAdmins from "./AddNewSubAdmins/AddNewSubAdmins";
import {useNavigate} from "react-router-dom";


const Dashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();
    const AllSubAdmins = () => {
        navigate('/all-sub-admins');
    };

  return (
    <>
        <PageTitle title={"Dashboard"} />
        <section>
            <Row>
                <Col md={3}>
                    <Cards
                        icon={"fas fa-download"}
                        title={"213,600"}
                        text={"Total Downloads"}
                        bg={"purple"}
                    />
                </Col>
                <Col md={3}>
                    <Cards
                        icon={"fas fa-users"}
                        title={"213,600"}
                        text={"Total Downloads"}
                        bg={"success"}
                    />
                </Col>
                <Col md={6}>
                    <div className={"text-right"}>
                        <Button className={"m-1"} onClick={AllSubAdmins}>SEE ALL SUB ADMIN</Button>
                        <Button className={"m-1"} onClick={() => setModalShow(true)}>ADD SUB ADMIN</Button>
                    </div>
                </Col>
            </Row>
        </section>
        <section>
            <Tabs
                defaultActiveKey="MapWinners"
                className=""
            >
                <Tab eventKey="MapWinners" title="Map Winners">
                    <MapWinners />
                </Tab>
            </Tabs>

        </section>

        <AddNewSubAdmins
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
  );
};

export default Dashboard;
