import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const LevelOne = () => {
    const navigate = useNavigate();
    const YellowButton = () => {
        navigate('/yellow-button');
    };
  return (
    <>
          <HeaderTop />
          <Row className='m-3'>
            <Col md={8}>
                <h2>Level One Challenges</h2>
            </Col>
            <Col md={4}>
            <Card >
                        <Card.Body>
                            <Row  className='inner_styling'>
                                <Col md={6} className='d-flex'>
                                    <i class="fas fa-pennant"></i>
                                    <p><strong>Challenge Points</strong></p>
                                </Col>
                                <Col md={6} className='d-flex justify-content-end'>
                                    <h3>20</h3>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Col>
            <Row>
                <Col md={4}>
                    <Card onClick={YellowButton}>
                        <Card.Body>
                            <h3>Find 7 Yellow Buttons</h3>
                            <p>Duration: <strong>1 Day</strong></p>
                            <p>Points: <strong>1 Day Point</strong></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Row>
    </>
  )
}

export default LevelOne