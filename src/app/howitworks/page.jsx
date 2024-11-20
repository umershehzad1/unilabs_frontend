import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const HowItWorks = () => {
    return (
        <div>


            <Container className='text-white py-5'>
                <h1 className=' text-center fw-semibold'>How It Works</h1>

                <Row>
                    <Col md={6} xs={12}>


                        <Card className='bg-transparent text-white works1'>

                            <h1>Step 1</h1>
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 style={{ color: "var(--green)" }}>AI-Driven Insights</h2>
                                <hr
                                 className='rounded-pill '
                                    style={{
                                        flexGrow: 1,
                                        opacity:1,
                                        border: "5px solid var(--green)", // Bold green color
                                        marginLeft: "6rem", // Adds some spacing between the heading and the line
                                    }}
                                />
                            </div>

                    <Col lg={6}
                    >
                            <p>Our advanced AI algorithm scans the crypto market and reviews thousands of projects against our exclusive proprietary criteria to identify trends. By merging machine learning with advanced financial analysis, we determine the best insights for capital allocation.</p>
                    </Col>


                        </Card>


                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HowItWorks