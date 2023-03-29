import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SupportSideBar from "Components/SupportSection/SupportSideBar";
import MsgPreview from "Components/SupportSection/MsgPreview";
import Spinner from "react-bootstrap/Spinner";
import Chat from "api/Chat/index.js";

const Tickets = (props) => {
  const [supportLoader, setSupportLoader] = useState(true);
  const [msgPreviewLoader, setMsgPreviewLoader] = useState(false);
  const [supportSiderBar, setSupportSideBar] = useState([]);
  const [chat, setChat] = useState({});
  const fetchAllChats = async () => {
    try {
      const res = await Chat.viewAll();
      if (res) {
        setSupportSideBar(res.data.data.chat);
        setSupportLoader(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchChatById = async (id) => {
    setMsgPreviewLoader(true);
    const res = await Chat.get(id);
    console.log(res);
    if (res) {
      setChat(res.data.data.chat);
      setMsgPreviewLoader(false);
    }
  };
  useEffect(() => {
    fetchAllChats();
  }, []);
  if (supportLoader == false)
    return (
      <>
        <Row>
          <Col md={12} className="m-0 p-0">
            <div class="support-block">
              <SupportSideBar chats={supportSiderBar} getChat={fetchChatById} />
              <MsgPreview loader={msgPreviewLoader} chat={chat} />
            </div>
          </Col>
        </Row>
      </>
    );
  else
    return (
      <div className="loader">
        <Spinner animation="grow" />
      </div>
    );
};

export default Tickets;
