import React from 'react'
import { Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "../../Pages/Review/index.module.scss";
import Profile from "../../Images/s2.jpg"
import DataTable from 'react-data-table-component';

const ProfilePage = () => {
    const columns = [
        {
            name:
                <>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div><span>Select all</span>
                </>,
            selector: row => row.name_subAdmin,
            cell: row => (
                <ul className={classes.table_image}>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                        <div className={classes.img_box}>
                            <img src={Profile} alt="" />
                        </div>
                    </li>
                </ul>
            )



        },
        {
            name: <span>Patient Name</span>,
            selector: row => row.email_address,
            sortable: true,
        },






    ];
    const data = [
        {
            name_subAdmin: "",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',

        },

    ]
    return (

        <div className={classes.top_header}>
            <Row className='p-3'>
                <Col md={6}>
                    <h1>Profile</h1>
                </Col>
                <Col md={6}>
                    <Row className="mb-3 align-items-center">


                        <Col md={6}>
                            <Form>
                                <InputGroup className="">
                                    <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search.."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                            </Form>
                        </Col>
                        <Col md={6}>
                            <div className="">
                                <span><i class="far fa-bell"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col md={4} className=''>
                        <Card className={classes.left_card}>
                            <Card.Header>
                                <div className={classes.img_box}>
                                    <img src={Profile} alt="" />
                                    <h3>Thomas Edison</h3>
                                </div>

                            </Card.Header>

                            <Card.Body>

                                <ul>
                                    <li>
                                        <p>Email:</p>
                                        <strong>thomas_edison@gmail.com</strong>
                                    </li>
                                    <li>
                                        <p>Phone Number:</p>
                                        <strong>+1 (127) 2123 212</strong>
                                    </li>
                                    <li>
                                        <p>Location:</p>
                                        <strong>Ontario, Canada</strong>
                                    </li>
                                    <li>
                                        <p>Profession:
                                        </p>
                                        <strong>Psychologist</strong>
                                    </li>
                                    <li>
                                        <p>Bio:</p>
                                        <strong>This is Thomas Edison’s Bio, kindly change this.</strong>
                                    </li>
                                    <li>
                                        <p>Uploaded IDs:</p>
                                    </li>

                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <Row className={classes.card_body_left}>
                                    <Col md={6} className={classes.img_box2}>
                                        <img src={Profile} alt="" />
                                    </Col>
                                    <Col md={6} className={classes.img_box3}>
                                        <img src={Profile} alt="" />
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={8}>

                        <Card className="">
                            <Row  >
                                <Col md={6}>
                                    <h1>Reviews</h1>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-end">
                                        <span><i class="far fa-bell"></i></span>
                                    </div>
                                </Col>

                            </Row>
                            <DataTable
                                columns={columns}
                                data={data}
                                striped
                            />
                        </Card>
                    </Col>
                </Row>
            </Row>
        </div>

    )
}

export default ProfilePage