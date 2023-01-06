import HeaderTop from 'Components/Header'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import map from "../../../Images/map.png"
import MapPopUp from '../PopUp'

const MapShow = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
          <HeaderTop />
          <Row>
            <Col><img onClick={() => setModalShow(true)}  src={map} alt="" /></Col>
          </Row>
          <MapPopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    
    </>
  )
}

export default MapShow