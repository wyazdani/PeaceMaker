import React, {useState, useEffect} from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import unsplash from "../../Images/unsplash.png"
import unsplash3 from "../../Images/unsplash2.png"
import unsplash4 from "../../Images/unsplash3.png"
import unsplash5 from "../../Images/unsplash4.png"
import unsplash6 from "../../Images/unsplash5.png"
import unsplash2 from "../../Images/unsplash6.png"
import { Link, useNavigate } from 'react-router-dom';
import SecondHeader from 'Components/Header/SecondHeader';
import Spinner from 'react-bootstrap/Spinner';
import exploreProviderApi from 'api/ExploreProvider/exploreProviderApi';



const ExploreProvider = () => {
    const navigate = useNavigate();
    const MapSec = () => {
        navigate('/map-show');
    };
    const [providers, setProviders] = useState([]);
    const [loader, setLoader] = useState(true)
    const IMG_URL = "https://dev.api.peacemakerapp.com/storage/user_profile/";
    // console.log(providers);
    // console.log(providers);
    const fetchData = async () => {
        const res = await exploreProviderApi()
        if(res)
        {
            console.log(res.data.data);
            setProviders(res.data.data);
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    if(loader != true)
    return (
        <>
          
            <section className='m-3'>
            <SecondHeader />
            <Card>
                <Card.Body>
                    <Row className='text-center justify-content-center '>
                        <h2> Explore a Provider</h2>
                        <Col md={6}  className='align-items-center'>
                            <Form>
                                <InputGroup className="mb-3">
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
                    <div className={classes.providerRow}>
                        {providers.map((provider) => (
                            <Card className={`${classes.inner_body}`} key={provider.user_id}>
                                <div className={classes.profile_img}  onClick={MapSec}>
                                    <img src={`${IMG_URL}${provider.profile_picture}`} alt="" />
                                </div>
                                <h5 className={'m-0'}  onClick={MapSec}>{provider.name}</h5>
                                <Button className={classes.chatBtn} to ={"/" }><i class="fal fa-comment-alt-lines"></i></Button>
                            </Card>
                        ))}
                    </div>

                </Card.Body>
            </Card>
            </section>
        </>
    )
    else return(
    <div>
        <Spinner animation="grow" />
    </div>
    )
}

export default ExploreProvider