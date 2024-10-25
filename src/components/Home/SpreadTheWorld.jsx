"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

const SpreadTheWorld = () => {


    return (
        <Container className="py-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} className="">
                    
                     <Image src="/touch.png" width={0} height={0} layout="responsive" style={{ width: "100%", height: "100%" }} alt={"coin"} />
                </Col>
                <Col xs={12} lg={6}>
                    <div className="manage">
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
                       
                    </div>
                </Col>
                <Col xs={12} lg={6} className="">
                    
                     <Image src="/touch.png" width={0} height={0} layout="responsive" style={{ width: "100%", height: "100%" }} alt={"coin"} />
                </Col>
            </Row>
        </Container>
    );
};

export default SpreadTheWorld;
