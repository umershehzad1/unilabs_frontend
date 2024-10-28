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
        <Container className="py-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} className="d-flex justify-content-center">
                    <div className="phone-wrapper" style={{ position: "relative", width: "300px", height: "600px" }}>
                        <Image
                            src="/phoneframe.png"
                            alt="phone"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div
                            className="phone text-white p-3"
                            style={{
                                position: "absolute",
                                top: "10%",
                                left: "10%",
                                width: "80%",
                                height: "80%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>MANAGE YOUR TRANSACTIONS ON THE GO</h3>
                            <TypeAnimation
                                sequence={[
                                    "securely from your mobile device!",
                                    1000,
                                    "securely from your mobile device!",
                                    1000,
                                    "securely from your mobile device!",
                                    1000,
                                    "securely from your mobile device!",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: "18px", display: "inline-block" }}
                                repeat={Infinity}
                            />
                            <div className="text-center">
                                <h3 className="text-white">
                                    {isSwiped ? "SWIPED" : "SWIPE ME"}
                                </h3>
                            </div>
                            <div
                                ref={containerRef}
                                style={{
                                    width: "100%",
                                    height: "70px",
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "flex",
                                    alignItems: "center",
                                    background: isSwiped ? "#084f1c" : "#232a32",
                                    borderRadius: "60px",
                                }}
                            >
                                <div
                                    ref={dragRef}
                                    style={{
                                        width: "60px",
                                        height: "60px",
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
                </Col>
                <Col xs={12} lg={6}>
                    <div className="manage">
                        <h1 className="text-white">
                            Manage Your <span>Transactions</span> through UNILABS
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim
                            id est laborum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim
                            id est laborum.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageTransactions;
