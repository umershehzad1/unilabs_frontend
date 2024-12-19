"use client"

import Subscribe from '@/components/shared/Subscribe';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const PayWithCard = () => {
    return (
        <Container className="text-secondary news">
            <div className="py-5">
                {/* Heading Section */}
                <Fade >
                    <h1 className="fw-bold text-uppercase mx-auto text-center text-white">
                        Pay with card
                    </h1>
                    <p className="text-center text-secondary pb-4">
                        Purchase UNILABS tokens through card.
                    </p>
                </Fade>

                {/* Getting Started Section */}
                <Zoom>
                    <h2 className="fw-bold mb-5 text-white">Getting started</h2>
                </Zoom>
                <Slide direction="left">
                    <hr className="py-1" style={{ color: "#4CAF50" }}></hr>
                </Slide>
                <Fade direction="up">
                    <h2 className="fw-bold" style={{ color: "#4CAF50" }}>
                        Step 1: Buy ETH Using Your Card
                    </h2>
                    <p>
                        Head to one of these trusted platforms to purchase Ethereum (ETH):
                    </p>
                </Fade>
                <Fade cascade damping={0.2}>
                    <ul className="py-4 pb-0" style={{ textDecoration: "underline" }}>
                        <li>UNIL Network</li>
                        <li>Transak</li>
                        <li>MoonPay</li>
                    </ul>
                    <p>
                        Follow the platform’s instructions to buy ETH and send it directly to your wallet. <br />
                        <b>Tip:</b> To cover all costs, including gas fees for buying UNILABS, we recommend purchasing at least $50 worth of ETH.
                    </p>
                </Fade>

                {/* Step 2 Section */}
                <Slide direction="right">
                    <hr className="mt-5 py-1" style={{ color: "#4CAF50" }}></hr>
                </Slide>
                <Zoom>
                    <h2 className="fw-bold" style={{ color: "#4CAF50" }}>
                        Step 2: Swap ETH for UNILABS
                    </h2>
                </Zoom>
                <Fade direction="up">
                    <p>
                        Once ETH is in your wallet, use it to purchase Unilabs.
                    </p>
                </Fade>
                <Fade cascade damping={0.2}>
                    <ul className="py-4 pb-0">
                        <li>Connect your wallet to the Unilabs website.</li>
                        <li>Follow the steps outlined in the “How to Buy Unilabs (UNIL)” guide.</li>
                    </ul>
                </Fade>
                <Slide direction="up">
                    <p className="py-5">
                        <b>Note:</b> Make sure your wallet has enough ETH to cover both the Unilabs purchase and any gas fees.
                    </p>
                </Slide>
            </div>

            {/* Subscribe Section */}
            <Subscribe />
        </Container>
    );
};

export default PayWithCard;