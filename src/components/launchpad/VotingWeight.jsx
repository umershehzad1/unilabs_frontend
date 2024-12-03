"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Card, Col, Row } from 'react-bootstrap';

const VotingWeight = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const votingData = [
        { id: 1, tier: "Tier 1 Subscribers", votes: 2 },
        { id: 2, tier: "Tier 2 Subscribers", votes: 3 },
        { id: 3, tier: "Tier 3 Subscribers", votes: 4 },
        { id: 4, tier: "Minimum 100 UNILABS Coins on Wallet", votes: 5 },
        { id: 5, tier: "Transaction Volume on Wallet", votes: 5 },
    ];

    return (
        <>
            <Row className='pb-4 d-flex align-items-stretch'>
                <h1 className='text-white fw-bold'>Voting Weight</h1>
                {votingData.map((item) => (
                    <Col key={item.id} className="col-10 mx-auto col-lg mb-3">
                        <Card
                            data-aos="fade-up"
                            className='h-100 text-center text-white rounded-5 py-3'
                            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <h4 className='d-flex align-items-center justify-content-center mb-0' style={{ minHeight: "70px" }}>
                                    {item.tier}
                                </h4>
                                <h3>{item.votes} VOTES</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default VotingWeight;
