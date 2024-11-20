"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
gsap.registerPlugin(Draggable);

const ManageTransactions = () => {
    const dragRef = useRef(null);
    const containerRef = useRef(null);
    const draggableInstance = useRef(null);

    const [isSwiped, setIsSwiped] = useState(false);

    useEffect(() => {
        if (containerRef.current && dragRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const elementWidth = dragRef.current.offsetWidth;
            draggableInstance.current = Draggable.create(dragRef.current, {
                type: "x",
                bounds: {
                    minX: 0,
                    maxX: containerWidth - elementWidth,
                },
                inertia: true,
                onDragEnd: function () {
                    if (this.endX >= containerWidth - elementWidth - 10) {
                        setIsSwiped(true);
                        this.disable();
                    }
                },
            })[0];
        }
        return () => {
            if (draggableInstance.current) {
                draggableInstance.current.kill();
            }
        };
    }, []);

    return (
        <div className="position-relative manage-transactions">
            <img src='/MilkyWay.png' alt="Stars" className='starts-bg img-fluid' />
            <Container className="py-5">

                <Row className="align-items-center">
                    <Col xs={12} lg={5} className="d-flex justify-content-center justify-content-lg-start position-relative">
                        <div className="d-lg-block d-none purple-bg-right"></div>
                        <div className="phone-wrapper" style={{ position: "relative", width: "300px", height: "600px", overflow: "hidden" }}>
                            <Image
                                src="/phoneframe.png"
                                alt="phone"
                                layout="fill"
                                objectFit="cover"
                                style={{ zIndex: "3", overflow: "hidden" }}
                            />
                            <div
                                className="phone text-white px-3 py-5"
                                style={{
                                    position: "absolute",
                                    top: "2%",
                                    left: "6%",
                                    width: "89%",
                                    height: "97%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    overflow: "hidden",
                                    backgroundColor: !isSwiped ? "black" : "transparent"
                                }}
                            >
                                <div>
                                    <div className="d-flex justify-content-center align-items-center my-4" style={{ width: "100%" }}>
                                        <Image
                                            src="/logo.png"
                                            width={100}
                                            height={50}
                                            className="rounded"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            alt="logo"
                                        />
                                    </div>

                                    <h3 className="display-6" style={{ overflow: 'hidden' }}>

                                        {isSwiped ? "YOUR TRANSACTIONS ARE MANAGED." : "The UNILABS Launchpad"}

                                    </h3>
                                    <TypeAnimation
                                        sequence={[
                                            "Securely from your mobile device!",
                                            1000,
                                            "Make payments and transfers with just a few taps!",
                                            1000,
                                            "Securely from your mobile device!",
                                            1000,
                                            "Make payments and transfers with just a few taps!",
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{
                                            fontSize: "18px",
                                            display: "inline-block",
                                            whiteSpace: 'wrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                        repeat={Infinity}
                                    />
                                </div>
                                <div>

                                    <div className="text-center">
                                        <h3 className="text-white fs-4">
                                            {isSwiped ? "" : "SWIPE ME"}
                                        </h3>
                                    </div>
                                    <div
                                        ref={containerRef}
                                        style={{
                                            width: "100%",
                                            height: "50px",
                                            position: "relative",
                                            overflow: "hidden",
                                            display: "flex",
                                            alignItems: "center",
                                            background: isSwiped ? "#084f1c" : "#232a32",
                                            borderRadius: "60px",
                                            zIndex: "9999",
                                        }}
                                    >
                                        <div
                                            ref={dragRef}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundImage: "url('/slide.svg')",
                                                backgroundSize: "cover",
                                                cursor: "pointer",
                                                position: "absolute",
                                                left: "0px",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={7}>
                        <div className=" mt-3 mt-lg-0 text-center text-lg-start">
                            <h1 className="text-white  display-2">
                                Get In Early On The Hottest Opportunities In Crypto -
                                <span className="fw-semibold " style={{ color: "var(--green)" }}>
                                    The Unilab Launchpad
                                </span>
                            </h1>
                            <p className="text-white fs-5">
                                Unilabs is ushering a future where every investors can capitalize on the most promising opportunities in the crypto world. Access opportunities typically inaccessible for retail traders with our AI powered launchpad. Our enterprise AI evaluates market for early backing opportunities and makes them accessible for global investors.

                            </p>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim
                            id est laborum.
                        </p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default ManageTransactions;
