import React from "react";
import PageTitle from "../../Components/Pagetitle";
import {Col, Dropdown, Row, Card, Button} from "react-bootstrap";
import DataTable from "react-data-table-component";
import {Link} from "react-router-dom";
import UserImg from "../../Images/userImg.svg";
import Search from "../../Components/Search";

const Patient = (props) =>{
    const columns = [
        {
            name: "Select All",
            selector: (row) => row.select,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Phone",
            selector: (row) => row.phone,
        },

        {
            name: "Location",
            selector: (row) => row.location,
        },

        {
            name: "Status",
            selector: (row) => row.status,
        },

        {
            name: <strong></strong>,
            selector: row => row.action,
            cell: row => (
                <Dropdown align={"end"}>
                    <Dropdown.Toggle variant={'dropdownToggle'}>
                        <i className={'fal fa-ellipsis-v'}></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/patient/username">View Profile</Dropdown.Item>
                        <Dropdown.Item href="#">Disable Account</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ),
        },




    ];

    const data = [
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                            <div className={"overflow-hidden"}>
                                <h6>Jacob John</h6>
                                <div>jacobjohn@gmail.com</div>
                            </div>
                        </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
        {
            select:     <div className={"userImg"}><img src={UserImg} /></div>,
            name:       <div className={'userBlock p-0'}>

                <div className={"overflow-hidden"}>
                    <h6>Jacob John</h6>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
            phone:      <>+1 (127) 2123 212</>,
            location:   <>California City, USA</>,
            status:     <><span className={'text-success'}>Active</span></>,
        },
    ];


    return(
        <>
            <PageTitle title={'Users'} />
            <section>
                <Card>
                    <Card.Body>
                        <div className="tableHeader">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="filter"
                                >
                                    Filter
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Search placeholder={"Search"} />
                            <Button variant={'csv'}>Download CSV</Button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    selectableRows
                                    pagination
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default Patient;