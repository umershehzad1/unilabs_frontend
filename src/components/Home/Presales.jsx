import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaCopy } from 'react-icons/fa6';

const Presales = () => {
    const presaleStages = [
        { stage: "Tokens remaining in stage:", remaining: "5,151,000" },
        { stage: "$ALGT price in current stage:", remaining: "0.08" },
        { stage: "Token price in the next stage:", remaining: "0.15" },
        { stage: "Tokens Sold In Total:", remaining: "196,033,066" },
        { stage: "Total Raised:", remaining: "$10,970,717.920", highlight: true }, // Add highlight flag here
    ];

    return (
        <Container className='py-5'>
            <Col xs={11} lg={5} className='m-auto py-5'>
                <Card className='border-0 p-lg-5 p-4 presales'>
                    <div>
                        <div className="text-center">
                            <h1>PRESALES</h1>
                        </div>
                        <hr />
                        {presaleStages.map((stageData, index) => (
                            <Row className='py-3' key={index}>
                                <Col xs={8}>
                                    <div>
                                        <h4>{stageData.stage}</h4>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <h4 className={stageData.highlight ? "text-success fw-bold" : " text-white"}>
                                            {stageData.remaining}
                                        </h4>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                        <Row className='mt-4'>
                            <Col xs={8}>
                                <div style={{
                                    background: "#D9D9D921",
                                    borderRadius: "30px",
                                    minHeight: "45px",
                                    display: "flex", alignItems: "center"
                                }}>
                                    <div>
                                        <Button className='bg-white border-0 ms-1' style={{borderRadius:"60px"}}>
                                            <FaCopy color='#2E7D32E5' />
                                        </Button>

                                        </div>
                                    <div>

                                        <Form>
                                            <Form.Control className='w-100 bg-transparent border-0 text-white shadow-none' type="text" />
                                        </Form>

                                    </div>
                                </div>

                            </Col>
                            <Col xs={4}>
                                <Button className="py-2 nav-button w-100">Apply Code</Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Container>
    );
}

export default Presales;
