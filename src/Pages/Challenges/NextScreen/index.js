import HeaderTop from 'Components/Header'
import classes from "../../Challenges/index.module.scss";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Counter from 'Components/Counter';
import img from "../../../Images/flag.png"

const NextScreen = () => {

    return (
        <>
            <HeaderTop />
            <section>
            <Row>
                <Col md={4}>
                    <Card className='p-0'>
                        <Card.Body>
                            <div className={classes.inner_styling}>
                                <div className={classes.img_box}><img src={img} alt="" /></div>
                                <p>Challenge Points</p>
                                <h3>20</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </section>
            <Counter />
       

        </>
    )
}

export default NextScreen