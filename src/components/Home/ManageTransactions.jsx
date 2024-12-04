"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import WavyLine from "../shared/WavyLineHero";
import Confetti from "react-confetti"; // Import the react-confetti package

const ManageTransactions = () => {
    const dragRef = useRef(null);
    const containerRef = useRef(null);
    const phoneRef = useRef(null); // Reference for the mobile frame
    const [isSwiped, setIsSwiped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [confettiTriggered, setConfettiTriggered] = useState(false); // state to trigger confetti
    const [confettiWidth, setConfettiWidth] = useState(0); // State to control confetti width
    const [confettiHeight, setConfettiHeight] = useState(0); // State to control confetti height

    useEffect(() => {
        // Update confetti size when the phone frame size changes
        if (phoneRef.current) {
            setConfettiWidth(phoneRef.current.offsetWidth);
            setConfettiHeight(phoneRef.current.offsetHeight);
        }

        let initialX = 0;
        let currentX = 0;
        let isMouseDown = false;

        // Ensure dragRef and containerRef are available
        const slideMovementTotal = containerRef?.current?.offsetWidth - dragRef?.current?.offsetWidth;

        const handleMouseDown = (e) => {
            isMouseDown = true;
            initialX = e.clientX || e.touches[0].pageX;
        };

        const handleMouseMove = (e) => {
            if (!isMouseDown || !dragRef.current) return; // Safety check for dragRef
            currentX = e.clientX || e.touches[0].pageX;
            let diff = currentX - initialX;

            if (diff < 0) diff = 0;

            dragRef.current.style.left = `${diff}px`;

            if (diff >= slideMovementTotal - 10) {
                setIsSwiped(true);
                setIsAnimating(true);
                setConfettiTriggered(true); // Trigger the confetti on swipe
                setTimeout(() => setIsAnimating(false), 1000);
                isMouseDown = false;
            }
        };

        const handleMouseUp = () => {
            if (isMouseDown && dragRef.current) {
                if (currentX - initialX < slideMovementTotal) {
                    dragRef.current.style.left = "0px";
                }
                isMouseDown = false;
            }
        };

        // Attach events for mouse or touch
        const events = {
            mousedown: handleMouseDown,
            mousemove: handleMouseMove,
            mouseup: handleMouseUp,
            touchstart: handleMouseDown,
            touchmove: handleMouseMove,
            touchend: handleMouseUp,
        };

        for (const [event, handler] of Object.entries(events)) {
            document.addEventListener(event, handler);
        }

        return () => {
            for (const [event, handler] of Object.entries(events)) {
                document.removeEventListener(event, handler);
            }
        };
    }, []);

    return (
        <div className="position-relative manage-transactions custom-overflow">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={12} lg={5} className="d-flex justify-content-center justify-content-lg-start position-relative">
                        <div className="purple-bg-right"></div>
                        <div className="phone-wrapper" style={{ position: "relative", width: "300px", height: "600px", overflow: "hidden" }}>
                            <Image
                                src="/phoneframe.png"
                                alt="phone"
                                layout="fill"
                                objectFit="cover"
                                style={{ zIndex: "3", overflow: "hidden" }}
                            />
                            <div
                                ref={phoneRef}
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
                                {confettiTriggered && (
                                    <Confetti
                                        gravity={0.6}
                                        width={confettiWidth}
                                        height={confettiHeight}
                                        numberOfPieces={100}
                                        recycle={false}
                                    />
                                )}                                <div>
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
                                        {isSwiped ?
                                            <h3 className="text-white mx-auto mb-0 fs-4">
                                                UNILAB
                                            </h3> :
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
                                                    transition: isAnimating ? "left 0.3s ease-out" : "none",
                                                }}
                                            ></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={7}>
                        <div className=" mt-3 mt-lg-0 text-center text-lg-start">
                            <h1 className="text-white display-2">
                                Get In Early On The Hottest Opportunities In Crypto -
                                <span className="fw-semibold" style={{ color: "var(--green)" }}>
                                    The Unilab Launchpad
                                </span>
                            </h1>
                            <p className="text-white fs-5">
                                Unilabs is ushering a future where every investor can capitalize on the most promising opportunities in the crypto world. Access opportunities typically inaccessible for retail traders with our AI-powered launchpad. Our enterprise AI evaluates the market for early backing opportunities and makes them accessible for global investors.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>


            <WavyLine />
        </div>
    );
};

export default ManageTransactions;
