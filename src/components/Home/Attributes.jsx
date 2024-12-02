"use client"
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'
import Divider from '../shared/Divider'

const Attributes = () => {
    const attributes = [
        {
            id: 1,
            title: "Unilabs Insights",
            text: "Cutting-edge insights and research for enterprise-grade clients to determine capital allocation plans with integrated risk management. ",
            colSize: 5
        },
        {
            id: 2,
            title: "AI-Powered Portfolio Management",
            text: "Our advanced AI tool scouts markets for opportunities and determines portfolio management based on market shifts and risk preferences. ",
            colSize: 7
        },
        {
            id: 3,
            title: "Decentralized Application Suite",
            text: "The Unilabs development wing focuses on supporting the next generation of decentralized applications across fintech and web3 infrastructure.",
            colSize: 7
        },
        {
            id: 4,
            title: "Mining Pool",
            text: "We support a comprehensive mining infrastructure with H1000 GPUs and cutting-edge hardware to generate stable yield for investors.",
            colSize: 5
        }
    ];

    return (
        <div className='presales-page custom-overflow   '>
            <Container className='position-relative'>
                <h1 className='display-4 text-center fw-bold text-white mb-4'>
                    The UNILABS Application Range - <span className="px-2" style={{ color: "var(--green)" }}>Our Core Offerings</span>
                </h1>
                <div className="purple-bg-right"></div>


                <Row className='py-4'>
                    {attributes.map(attribute => (
                        <Col key={attribute.id} xs={12} lg={attribute.colSize}>
                            <Card className="bg-dark py-3 px-3 presales mb-5" style={{ borderRadius: "20px" }}>
                                <Card.Body className="text-white mt-3">
                                    <h3>{attribute.title}</h3>
                                    <Card.Text style={{ color: "#aaaaaa" }}>{attribute.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='text-center mb-4'>
                    <Button className="greenbtn ">

                        <small>


                            Join Presales
                        </small>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Attributes
