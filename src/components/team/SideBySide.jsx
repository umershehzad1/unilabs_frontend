"use client";
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ReactPlayer from 'react-player';

const SideBySide = () => {
    const [activePhaseIndex, setActivePhaseIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#202731",
            },
            links: {
                color: "#202731",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

   

    return (
        <>
            <div className="position-relative pt-5 teambg">
                {isClient && (
                    <Particles
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                        }}
                        id="tsparticles"
                        init={particlesInit}
                        options={particlesOptions}
                    />
                )}

                <Container className='py-5' style={{ zIndex: 9999 }}>
                    <Row className="align-items-center py-5">
                        <Col xs={12} lg={6}>
                            {isClient && (
                                <Col xs={12} lg={12} className="mx-auto">
                                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={"100%"} />
                                </Col>
                            )}
                        </Col>
                        <Col xs={12} lg={6} className='manage mt-3 mt-lg-0'>
                            <h1 className="text-white">
                                <span>Team </span>Video
                            </h1>
                            <p className='text-white'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                            </p>
                            <div className="d-flex flex-md-row flex-column p-md-auto px-4 gap-4 pt-2">
                                <Button className="greenbtn">Share It</Button>
                                <Button className="transparentbtn">How To Buy</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-5">
                        <Col xs={12} lg={6} className="order-lg-2">
                            {isClient && (
                                <Col xs={12} lg={12} className="mx-auto">
                                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={"100%"} />
                                </Col>
                            )}
                        </Col>
                        <Col xs={12} lg={6} className='manage order-lg-1 mt-3 mt-lg-0'>
                            <h1 className="text-white">
                                <span>Keynote </span>1
                            </h1>
                            <p className='text-white'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                            </p>
                            <div className="d-flex flex-md-row flex-column p-md-auto px-4 gap-4 pt-2">
                                <Button className="greenbtn">Share It</Button>
                                <Button className="transparentbtn">DA Gpaper V2</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-5">
                        <Col xs={12} lg={6}>
                            {isClient && (
                                <Col xs={12} lg={12} className="mx-auto">
                                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={"100%"} />
                                </Col>
                            )}
                        </Col>
                        <Col xs={12} lg={6} className='manage mt-3 mt-lg-0'>
                            <h1 className="text-white">
                                <span>Keynote </span>2
                            </h1>
                            <p className='text-white'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                            </p>
                            <div className="d-flex flex-md-row flex-column p-md-auto px-4 gap-4 pt-2">
                                <Button className="greenbtn">Learn More</Button>
                                <Button className="transparentbtn">DA Gpaper V2</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SideBySide;
