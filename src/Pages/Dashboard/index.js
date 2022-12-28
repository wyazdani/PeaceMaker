import React from "react";
import classes from "./index.module.scss";
import PageTitle from "../../Components/Pagetitle";
import {Col, Row, Card, Button, Tab, Tabs} from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";


const Dashboard = () => {
    const navigate = useNavigate();


    return (
        <>
            <Header />
        </>
    );
};

export default Dashboard;
