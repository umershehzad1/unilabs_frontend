"use client"
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaCopy } from 'react-icons/fa6';
import SectionHeading from '../shared/SectionHeading';
import { CircularProgressbar } from 'react-circular-progressbar';

const Presales = () => {
    const presaleStages = [
        { stage: "Tokens remaining in stage", remaining: "5,151,000" },
        { stage: "$ALGT price in current stage", remaining: "0.08" },
        { stage: "Token price in the next stage", remaining: "0.15" },
    ];
    const percentage = 60;
    const totalRaised = "10,970,717";
    return (
        <Container className='pt-5 pb-2'>
            <SectionHeading heading={"PRESALES"} />

            <Row className='py-5 align-items-center'>
                <Col xs={12} lg={3}>
                    <Col xs={10} lg={9} className='mx-auto'>
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                            <svg style={{ height: 0 }}>
                                <defs>
                                    <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4CAF50" />
                                        <stop offset="100%" stopColor="#204921" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <CircularProgressbar
                                value={percentage}
                                text={`$${totalRaised}`}
                                styles={{
                                    path: {
                                        stroke: "url(#gradientColor)",
                                    },
                                    text: {
                                        fill: "#fff",
                                        fontSize: "14px",
                                    },
                                }}
                            />
                            <div style={{
                                position: "absolute",
                                top: "40%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                color: "#000",
                            }}>
                                <h5 className='text-white' style={{ fontWeight: "bold" }}>Total Raised</h5>
                            </div>
                        </div>
                    </Col>
                </Col>

                <Col xs={12} lg={9}>
                    <h5 className='text-white'>Tokens Sold In Total</h5>
                    <div className="progress-bar-wrapper mb-4">
                        <progress value={50} max={100} className='w-100 d-flex'></progress>
                    </div>
                    <div>
                        <div className='py-4 px-3 presalesstats'>
                            <Row>
                                {presaleStages.map((stageData, index) => (
                                    <Col xs={12} lg={4} key={index}>
                                        <div className='text-center'>
                                            <h5 className='text-white'>{stageData.stage}</h5>
                                            <h2 className={"text-white fw-bold"}>
                                                {stageData.remaining}
                                            </h2>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <Col xs={12} lg={6} className='ms-auto mt-2'>
                            <div>
                                <Row className="mt-2 mx-0 w-100">
                                    <Col xs={12} lg={8} className="mt-2">
                                        <div
                                            style={{
                                                background: "#D9D9D921",
                                                borderRadius: "30px",
                                                minHeight: "45px",
                                                display: "flex",
                                                alignItems: "center",
                                                width: "100%"
                                            }}>
                                            <Button className="bg-white border-0 ms-1" style={{ borderRadius: "60px" }}>
                                                <FaCopy color='#2E7D32E5' />
                                            </Button>
                                            <Form className="w-100">
                                                <Form.Control
                                                    className="bg-transparent border-0 text-white shadow-none"
                                                    type="text"
                                                />
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={4} className="mt-2">
                                        <Button className="py-2 nav-button w-100">Apply Code</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Presales;
