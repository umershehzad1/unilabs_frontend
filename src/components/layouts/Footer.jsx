"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { menuItems } from '../shared/MenuItems'

const Footer = () => {
    const firstHalf = menuItems.slice(0, 3);
    const secondHalf = menuItems.slice(3, 6);

    return (
        <>
            <div className="footerbg pt-5">


                <Container className='footer'>
                    <Row className='py-5 align-items-center'>
                        <Col xs={12} lg={2}>
                            <Col xs={12} md={8} className='mx-auto'>
                                <div>
                                    <Image src={"/logo.png"} width={0} height={0} layout="responsive" style={{ width: "50%", height: "50%" }} alt={"coin"} />
                                </div>
                            </Col>
                        </Col>

                        <Col xs={12} lg={3} className='text-lg-start text-center'>
                            {firstHalf.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className='text-decoration-none'
                                >
                                    <div className='text-black text-decoration-none pb-2 link-text'>
                                        {link.label}
                                    </div>
                                </Link>
                            ))}
                        </Col>

                        <Col xs={12} lg={3} className='text-lg-start text-center'>
                            {secondHalf.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className='text-decoration-none'
                                >
                                    <div className='text-black text-decoration-none pb-2 link-text'>
                                        {link.label}
                                    </div>
                                </Link>
                            ))}
                        </Col>

                        <Col xs={12} lg={4}>
                            <h5 className='text-white'>Newsletter</h5>
                            <Row>
                                <Col xs={8}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="Enter your email address" className='rounded-5 footer-input' />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={4}>
                                    <Button className="py-2 px-3 nav-button">Subscribe</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <hr className='mt-0 text-white' />
                    <div className='text-center d-flex gap-2 justify-content-center'>
                        <p className='copyright'>UNILABS © 2024, All rights reserved</p>
                        <Link
                            href={"/privacy&policy"}
                            className='text-decoration-none'
                            style={{fontSize:"16px",color:"white"}}
                        >
                                Privacy Policy
                        </Link>
                        <Link
                            href={"/terms&conditions"}
                            className='text-decoration-none'
                            style={{fontSize:"16px",color:"white"}}
                        >
                                Terms & Conditions
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
