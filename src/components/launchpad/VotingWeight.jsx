"use client";
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const VotingWeight = () => {
    const votingData = [
        { id: 1, tier: "Tier 1 Subscribers", votes: 2 },
        { id: 2, tier: "Tier 2 Subscribers", votes: 3 },
        { id: 3, tier: "Tier 3 Subscribers", votes: 4 },
        { id: 4, tier: "Minimum 100 UNILABS Coins on Wallet", votes: 5 },
        { id: 5, tier: "Transaction VOlume on Wallet", votes: 5 },
    ];

    return (
        <>
       
            <Row className='py-4'>
            <h1 className='text-white fw-bold'>Voting Weight</h1>
                {votingData.map((item) => (
                    <Col key={item.id}>
                        <Card className='mb-3 text-center text-white rounded-5 py-3' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                            <Card.Body>
                                <h4 className='d-flex align-items-center justify-content-center' style={{minHeight:"70px"}}>{item.tier}</h4>
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
