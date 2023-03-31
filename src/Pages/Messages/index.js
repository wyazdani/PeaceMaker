import Chat from "api/Chat/index.js";
import SecondHeader from "Components/Header/SecondHeader/index.js";
import PageTitle from "Components/Pagetitle";
import React, { useEffect, useState } from "react";
import { Card, Row, Tab, Tabs } from "react-bootstrap";
import EndUserSupport from "./EndUser/index.js";
import Tickets from "./Ticket.js";

const Messages = () => {
  return (
    <>
      <SecondHeader />
      <Card className="mx-5">
        <Tickets />
        {/* <EndUserSupport/> */}
      </Card>
    </>
  );
};

export default Messages;
