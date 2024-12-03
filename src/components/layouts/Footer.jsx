"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { menuItems } from '../shared/MenuItems'

const Footer = () => {
    const firstHalf = menuItems.slice(0, 3);
    const secondHalf = menuItems.slice(3, 6);

    return (
        <div className="footerbg pt-5">
            <Container className="footer text-white">
                <Row className="py-5 align-items-center">
                    <Col xs={12} lg={2} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <div className="text-center">
                            <Image
                                src={"/logo.png"}
                                className="mx-auto"
                                width={0}
                                height={0}
                                layout="responsive"
                                style={{ maxWidth: "80%", height: "auto" }}
                                alt={"coin"}
                            />
                            <h1 className="fw-bold fs-4">UNILABS</h1>
                        </div>
                    </Col>

                    {/* Links Section */}
                    <Col xs={12} lg={5} className="d-flex justify-content-center">
                        <Row className="w-100">
                            <Col xs={12} md={6} className="text-center text-md-start">
                                {firstHalf.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-decoration-none d-block py-2  copyright">
                                        {link.label}
                                    </Link>
                                ))}
                            </Col>
                            <Col xs={12} md={6} className="text-center text-md-start">
                                {firstHalf.reverse().map((link, index) => (
                                    <Link key={index} href={link.href} className="text-decoration-none d-block py-2  copyright">
                                        {link.label}
                                    </Link>
                                ))}
                            </Col>
                        </Row>
                    </Col>

                    {/* Newsletter Section (Optional, if needed) */}
                    <Col xs={12} lg={5} className="text-center text-lg-start">
                        <h5 className="text-white mb-3 text-uppercase fs-6">Newsletter</h5>
                        <Row>
                            <Col md={8} className="mx-auto">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Enter your email address" className="footer-input rounded-pill " />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={4} className="mx-auto">
                                <Button className="greenbtn"><small>Subscribe</small></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Footer Bottom Section */}
                <hr className="mt-0 text-white" />
                <div className="text-center d-flex flex-column flex-sm-row justify-content-center gap-2 pb-2">
                    <p className="copyright mb-0">UNILABS © 2024, All rights reserved</p>
                    <div className="d-flex gap-2">
                        <Link
                            href="/terms&conditions"
                            className="text-decoration-none copyright"
                        >
                            Terms & Conditions
                        </Link>
                        <div className="vr"></div>
                        <Link
                            href="/privacy&policy"
                            className="text-decoration-none copyright"
                        >
                            Privacy Policy
                        </Link>

                        <div className="vr"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
