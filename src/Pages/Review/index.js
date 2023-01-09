import classes from "./index.module.scss";
import { Card, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Profile from "../../Images/s2.jpg"
import filterImg from "../../Images/Filter-icon.png";

const Review = () => {

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
        {
            name: <span>Rating</span>,
            selector: row => row.phone,
            cell: row => (
                <ul className={classes.table_stars}>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                </ul>
            )
        },
        {
            name: <span>Reviews</span>,
            selector: row => row.temporary_password,
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
            temporary_password: '“Mr. Thomas is such a professional to talk to, he gave me advices about how I can conquer the aspect of my life that I find difficult.” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: '“Highly recommended!” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: '“Mr. Thomas is such a professional to talk to, he gave me advices about how I can conquer the aspect of my life that I find difficult.” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: '“Highly recommended!” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },

    ]

    return (
        
            <div className={classes.top_header}>
            <div >
                <Row className="px-5" >
                    <Col md={6}>
                        <h1>Reviews</h1>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-end">
                            <span><i class="far fa-bell"></i></span>
                        </div>
                    </Col>

                </Row>
                </div>
                    <Card className="m-3">
                        <Row className="m-3">
                            <Col md={6}>
                                <Row className="mb-3 align-items-center">

                                    <Col md={4}>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                id="filterDropDown"
                                                variant="outline-light"
                                                className="drop-btn w-100"
                                            >
                                                Filter <img src={filterImg} alt="img" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col md={8}>
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
                                </Row>
                            </Col>
                        </Row>
                        <DataTable
                            columns={columns}
                            data={data}
                            striped
                        />
                    </Card>
              
            </div>
    
    )
}

export default Review;