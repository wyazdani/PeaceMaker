import classes from "./index.module.scss";
import { Button, Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Profile from "../../Images/s2.jpg"
// import { useNavigate } from "react-router-dom";
const Review = () => {
    //     const navigate = useNavigate();
    // const back = () => {
    //     navigate('/dashboard');
    // };
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
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: '“Mr. Thomas is such a professional to talk to, he gave me advices about how I can conquer the aspect of my life that I find difficult.” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: '“Highly recommended!” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: '“Mr. Thomas is such a professional to talk to, he gave me advices about how I can conquer the aspect of my life that I find difficult.” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: '“Highly recommended!” ',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone: 'Sept. 12, 2022',
            temporary_password: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque blandit pharetra ut vitae tristique leo.',
        },

    ]

    return (
        <div className={classes.top_header}>
            <div className='p-5'>
                <Row >
                    <Col md={6}>
                        <h1>Reviews</h1>
                    </Col>
                    <Col md={6}>
                        <div>
                            <span><i class="far fa-bell"></i></span>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        striped
                    // subHeader
                    // subHeaderComponent={subHeaderComponentMemo}
                    />

                </Row>
            </div>
        </div>
    )
}

export default Review;