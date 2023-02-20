import React, { useState } from 'react'
import { Accordion, Button, Dropdown, Form } from 'react-bootstrap';
import classes from '../MessageDetail/index.module.scss'
import profile from '../../Images/ImageTable.png'
import file1 from '../../Images/file1.svg'
import file2 from '../../Images/file2.svg'
import file3 from '../../Images/file3.svg'
import file4 from '../../Images/file4.svg'
import file5 from '../../Images/file5.svg'
import icon1 from '../../Images/icon1.svg'
import icon2 from '../../Images/icon2.svg'
import icon3 from '../../Images/icon3.svg'


const MessageDetail = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Button className='btn btn-alert' onClick={() => setShow(!show)} variant='light'>
                <i className='icon-alert'></i>
            </Button>
            <section id="aside" className={show ? `${classes.side_menu}` : `${classes.side_menu} ${classes.active}`}>
                <div onClick={() => setShow(!show)} className={classes.icon_back}><i class="fas fa-chevron-left"></i>
                </div>
                <div className={classes.img_box}>
                    <img src={profile} alt="" />
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> Shared Files</Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex'>
                                <div className={classes.imgbox}>
                                    <img src={file1} alt="" />
                                </div>
                                <div className={classes.imgbox}>
                                    <img src={file2} alt="" />
                                </div>
                                <div className={classes.imgbox}>
                                    <img src={file3} alt="" />
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className={classes.imgbox}>
                                    <img src={file4} alt="" />
                                </div>
                                <div className={classes.imgbox}>
                                    <img src={file5} alt="" />
                                </div>
                                <div className={classes.imgbox}>
                                    <img src={file1} alt="" />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr className={'my-5'} />
                <Form>
                    <div className='d-flex justify-content-between mx-4'>
                        <div className={classes.text}>Are you satisfied with your provider?</div>
                        <Form.Check className='px-5'
                            type={'checkbox'}
                            id={`default-${'checkbox'}`}
                        />
                    </div>
                </Form>
                <hr className={'my-5'} />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>  Privacy & Support</Accordion.Header>
                        <Accordion.Body>
                        <div className={classes.privacySupport}>
                                <div className={classes.imgBox} >
                                    <img src={icon1} alt="" />
                                </div>
                                <div className={classes.text}>Mute Notification</div>
                            </div>
                            <div className={classes.privacySupport}>
                                <div className={classes.imgBox}>
                                    <img src={icon2} alt="" />
                                </div>
                                <div className={classes.text}>Ignore Messages</div>
                            </div>
                            <div className={classes.privacySupport}>
                                <div className={classes.imgBox} >
                                    <img src={icon3} alt="" />
                                </div>
                                <div className={classes.text}>Block Provider</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </>
    )
}

export default MessageDetail