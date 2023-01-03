import classNames from 'classnames'
import HeaderTop from 'Components/Header'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import profile from '../../../Images/nevi.jpg'

const YellowButton = () => {
  return (
    <>
         <HeaderTop />
         <Row className='justify-content-center text-center'>
            <Col md={10}>
            
             <p>Challenge 1</p>
             <h2>Find 7 Yellow Buttons</h2>
             <div className={classNames.main_body}>
             <img src={profile} alt="" />
             </div>
            </Col>
         </Row>
    </>
  )
}

export default YellowButton