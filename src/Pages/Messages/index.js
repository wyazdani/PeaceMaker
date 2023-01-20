import SecondHeader from "Components/Header/SecondHeader/index.js";
import PageTitle from "Components/Pagetitle";
import React from "react";
import { Card, Row, Tab, Tabs } from "react-bootstrap";
import EndUserSupport from "./EndUser/index.js";
import Tickets from "./Ticket.js";

const Messages = () => {
    return (
        <>
            <SecondHeader />
            <section>
                <Card className="">
                    <Tickets/>
                    {/* <EndUserSupport/> */}
                </Card>
            </section>
        </>
    );
};

export default Messages;
