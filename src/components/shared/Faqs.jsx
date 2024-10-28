"use client";
import React from 'react';
import { Accordion, Col, Container } from 'react-bootstrap';
import SectionHeading from './SectionHeading';

const faqItems = [
    {
        key: "0",
        header: "What is the Wafee Token?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        key: "1",
        header: "What is the Wafee Token?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
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
