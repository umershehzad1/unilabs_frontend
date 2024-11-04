import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const WalletInfo = () => {
    const votingData = [
        { id: 1, title: "BTC" },
        { id: 2, title: "USDT" },
        { id: 3, title: "USDC" },
        { id: 4, title: "BUSD" },
        { id: 5, title: "BNB" },
        { id: 6, title: "OTHER CRYPTO" },
    ];



    return (
        <>
            <Container>
                <Col xs={12} lg={8} className={"mx-auto py-4"} >
                    <div className="d-flex align-items-center gap-2 justify-content-center mb-3">
                        <div>
                            <p className='text-white fs-3 m-0'>My Token Balance:</p>
                        </div>

                        <div style={{ backgroundColor: "#4CAF50", padding: "10px 30px", borderRadius: "20px" }}>
                            <h2 className='text-white m-0'>100.0009</h2>
                        </div>
                    </div>

                    <Col xs={12} lg={8} className='mx-auto'>
                        <Card className='my-4  text-white rounded-5 py-2 px-4' style={{ background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.1) 100%)" }}>
                            <Card.Body>
                                <h1 className='m-0'>Stage 4</h1>
                                <hr className='text-white' />
                                <div className="d-flex justify-content-between mb-3">
                                    <h3>tokens remaining in stage:</h3>
                                    <h3>73,734,075</h3>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <h3>UNI price in current stage:</h3>
                                    <h3>73,734,075</h3>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <h3>The next stage price:</h3>
                                    <h3>73,734,075</h3>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card className='my-4  text-white rounded-5 py-2 px-4' style={{ background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.1) 100%)" }}>
                            <Card.Body>

                                <div className="d-flex justify-content-between mb-3">
                                    <h3>Tokens Sold in Total:</h3>
                                    <h3>73,734,075</h3>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <h3>Total Raised:</h3>
                                    <h3>73,734,075</h3>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Row>
                        {votingData.map((item, index) => (
                            <Col xs={6} lg={4} key={index}>
                                <Card className='my-4  text-white rounded-4 py-1 px-4' style={{ background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.1) 100%)" }}>
                                    <Card.Body className='text-center'>
                                        <h2 className='m-0'>{item?.title}</h2>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}

                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default WalletInfo