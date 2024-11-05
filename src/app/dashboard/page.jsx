import StageCom from '@/components/dashboard/StageCom';
import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const tick = '/dashboard/verified.png';

const Dashboard = () => {
    const verified = false;


    return (
        <Container fluid className="px-md-4 text-white">
            <div className="rounded-4 py-3 px-md-5 my-4" style={{ background: "#589CFF0A" }}>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={6} className="mb-3 mb-md-0">
                        <h2 className="fs-5 fw-bold">
                            <span className='me-1' style={{ color: "var(--color1)" }}>Account Status:</span>
                            {verified ? (
                                <span >
                                    <Image width={24} height={24} src={tick} alt="Check" className="mx-1" />
                                    Verified
                                </span>
                            ) : (
                                <span className="text-danger">Not Verified</span>
                            )}
                        </h2>
                    </Col>


                </Row>
                <div className="border-bottom  my-4"></div>
                <Row>
                    <div className="d-flex flex-md-row flex-column align-items-center justify-content-lg-end   gap-3">
                        <h2 className='mb-0'>My Token Balance</h2>
                        <p className=' mb-0 f-of rounded-3 ms-md-3 fw-bold ' style={{ padding: "15px", background: "var(--color2)", color: "var(--color3)" }}>
                            <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={20} height={20} />
                            100
                        </p>
                    </div>

                </Row>
                <StageCom  />


                    <h2 className="border-top border-bottom py-4 border-white">
                        Balance in Other Countries:
                    </h2>

                <Row className="flex-row mt-3">
                    <Col xs={4} md={3} className="text-center mb-2 mb-sm-0">
                        <p className="mb-0">USD</p>
                        <p>-</p>
                    </Col>
                    <Col xs={4} md={3} className="text-center mb-2 mb-sm-0">
                        <p className="mb-0">BTC</p>
                        <p>-</p>
                    </Col>
                    <Col xs={4} md={3} className="text-center">
                        <p className="mb-0">ETH</p>
                        <p>-</p>
                    </Col>
                </Row>

            </div>
        </Container>
    );
};

export default Dashboard;
