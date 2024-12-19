"use client";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { FaPlus, FaMinus, FaArrowDown, FaArrowRight } from "react-icons/fa";

const faqItems = [
    {
        key: "0",
        header: "What is the price for Unilabs tokens during the presale?",
        body: "Unilabs is an AI-powered DeFi launchpad that identifies and supports early-stage cryptocurrency projects, offering retail traders access to high-potential investment opportunities.",
    },
    {
        key: "1",
        header: "What is the price for Unilabs tokens during the presale?",
        body: "Unilabs is designed for retail traders who want access to professional-grade investment insights in the cryptocurrency space.",
    },
    {
        key: "2",
        header: "What payment methods are accepted in the presale?",
        body: "The presale price for Unilabs tokens is set at $0.01 per token, offering an exclusive early entry opportunity for investors before the official launch.",
    },
    {
        key: "3",
        header: "How long until we deliver your first Phase post?",
        body: "We accept various cryptocurrencies for presale purchases, including Bitcoin (BTC), Ethereum (ETH), and USDT.",
    },
    {
        key: "4",
        header: "Who can benefit from Unilabs?",
        body: "We accept various cryptocurrencies for presale purchases, including Bitcoin (BTC), Ethereum (ETH), and USDT.",
    },
];

const Faqs = () => {
    const [openKey, setOpenKey] = useState(null);

    const handleToggle = (key) => {
        setOpenKey(openKey === key ? null : key);
    };

    return (
        <div className="faq">
            <Container className="py-5 text-white  ">
                <Row>
                    <Col lg={5}>
                        <h4 className="display-3 fw-bold mt-xl-5">FAQs</h4>
                        <p  className="fs-4 col-xl-9 gray">Didn’t find an answer to your question? Drop us a line here. </p>
                        <Button className="transparentBtn rounded-0">Ask A Question
                            <span className="ms-2">
                                <FaArrowRight />
                            </span>
                        </Button>
                    </Col>
                    <Col lg={7}>
                        <Accordion activeKey={openKey}>
                            {faqItems.map((item, index) => (
                                <Accordion.Item
                                    className="my-3 bg-transparent border-0 text-white"
                                    eventKey={item.key}
                                    key={item.key}
                                >
                                    <Accordion.Header
                                        className={`custom-header  fs-6 ${openKey === item.key ? "active" : ""}`}
                                        onClick={() => handleToggle(item.key)}
                                    >
                                        <span>
                                            {index + 1}. {item.header}
                                        </span>
                                        <span className="custom-icon">
                                            {openKey === item.key ? (
                                                <FaMinus />
                                            ) : (
                                                <FaPlus />
                                            )}
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body>{item.body}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>

                <style jsx>{`
                .custom-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: transparent;
                    color: white;
                    border: none;
                    width: 100%;
                    padding: 0;
                    font-size: 1.1rem;
                }

                .custom-icon {
                    margin-left: auto;
                    font-size: 1.2rem;
                    transition: transform 0.3s ease-in-out;
                }

             
            `}</style>
            </Container>
        </div>

    );
};

export default Faqs;
