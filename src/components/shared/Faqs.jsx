"use client";
import React from 'react';
import { Accordion, Col, Container } from 'react-bootstrap';
import SectionHeading from './SectionHeading';

const faqItems = [
    {
        key: "0",
        header: "What is Unilabs, and how does it work?",
        body: "Unilabs is an AI-powered DeFi launchpad that identifies and supports early-stage cryptocurrency projects, offering retail traders access to high-potential investment opportunities. By leveraging advanced AI algorithms and financial insights, Unilabs brings institutional-grade analysis and investment support to the broader crypto community."
    },
    {
        key: "1",
        header: "Who can benefit from Unilabs?",
        body: "Unilabs is designed for retail traders who want access to professional-grade investment insights in the cryptocurrency space. Whether you are a new or seasoned investor, Unilabs provides tools and resources that empower you to make strategic investment decisions typically available only to institutional investors."
    },
    {
        key: "2",
        header: "What is the price for Unilabs tokens during the presale?",
        body: "The presale price for Unilabs tokens is set at $0.01 per token, offering an exclusive early entry opportunity for investors before the official launch. This will increase in every round until the listing price of $0.20."
    },
    {
        key: "3",
        header: "What payment methods are accepted in the presale?",
        body: "We accept various cryptocurrencies for presale purchases, including Bitcoin (BTC), Ethereum (ETH), and USDT. More details can be found on our presale page, where we provide specific instructions for each payment option."
    },
];

const Faqs = () => {
    return (
        <Container className="py-5">
            <SectionHeading heading={"Frequently Asked Questions"} />

            <Col xs={12} lg={9} className='mx-auto py-4'>
            <Accordion className='bg-transparent' defaultActiveKey="0">
                {faqItems.map((item,index) => (
                    <Accordion.Item className='my-3  bg-transparent border-0 shadow-none  text-white' eventKey={item.key} key={item.key}>
                        <Accordion.Header className=' fw-bold text-white px-0 border-0 shadow-none '>{index+1}. {item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            </Col>
        </Container>
    );
};

export default Faqs;
