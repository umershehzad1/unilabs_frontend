"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const ManageTransactions = () => {
    const dragRef = useRef(null); // Ref for the draggable element
    const containerRef = useRef(null); // Ref for the container element
    const draggableInstance = useRef(null); // Ref to store the Draggable instance

    const [isSwiped, setIsSwiped] = useState(false); // State to track swipe status

    useEffect(() => {
        if (containerRef.current && dragRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const elementWidth = dragRef.current.offsetWidth;

            // Initialize Draggable
            draggableInstance.current = Draggable.create(dragRef.current, {
                type: "x",
                bounds: {
                    minX: 0,
                    maxX: containerWidth - elementWidth,
                },
                inertia: true,
                onDragEnd: function () {
                    // Check if the element is dragged to the end
                    if (this.endX >= containerWidth - elementWidth - 10) {
                        setIsSwiped(true); // Set state to true when swiped fully
                        this.disable(); // Disable further dragging
                    }
                },
            })[0];
        }

        // Cleanup function to kill the draggable instance if the component unmounts
        return () => {
            if (draggableInstance.current) {
                draggableInstance.current.kill();
            }
        };
    }, []);

    return (
        <Container className="py-5">
            <Row>
                <Col xs={12} lg={6}>
                    <Col xs={12} lg={6} className="mx-auto">
                        <div className="phone text-white p-3">
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
                                style={{ fontSize: "22px", display: "inline-block" }}
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
                    </Col>
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
