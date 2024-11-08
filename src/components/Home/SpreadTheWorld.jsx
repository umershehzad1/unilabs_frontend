"use client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { MdOutlineAutoGraph } from "react-icons/md";

const SpreadTheWorld = () => {


    return (
        <Container className="py-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} className="">
                <Col xs={12} lg={9} className="position-relative">

                    <Image className="phone-wrapper" src="/spread-img.png" width={0} height={0} layout="responsive" style={{ width: "100%", height: "100%" }} alt={"coin"} />

                    <Image className="position-absolute" style={{right:"40px",top:"20px"}} src="/horn.gif" width={150} height={150}  alt={"coin"} />
                </Col>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="manage ">
                        <h1 className="text-white">
                            <span>SPREAD</span> THE WORD
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est.
                        </p>
                        <div className="d-flex gap-4 justify-content-start">
                            <Button className="greenbtn">Share Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center">

                <Col xs={12} lg={6}>
                    <div className="manage">
                        <h1 className="text-white">
                            <span>Marketplace</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tristique sed semper feugiat dolor. Amet sit viverra proin ac. Est blandit faucibus ut urna. Sit id vulputate cras vulputate ut quam risus quisque.
                        </p>
                        <div className="d-flex gap-3">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "50px", width: "80px", backgroundColor: "#12407b", borderRadius: "8px" }}>
                                <MdOutlineAutoGraph size={20} className="text-white" />
                            </div>
                            <div>
                                <h5 className="text-white">Lorem ipsum dolor sit amet consectetur.</h5>
                                <p className="fs-5">
                                    Lorem ipsum dolor sit amet consectetur. Tristique sed semper feugiat dolor. Amet sit viverra proin ac. Est blandit faucibus ut urna. Sit id vulputate cras vulputate ut quam risus quisque.
                                </p>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xs={12} lg={6} className="">

                    <Col xs={12} lg={9} className="mx-auto">
                        <Image className="blueToggle" src="/cards.png" width={0} height={0} layout="responsive" style={{ width: "100%", height: "100%" }} alt={"coin"} />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default SpreadTheWorld;
