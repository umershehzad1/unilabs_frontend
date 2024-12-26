import WavyLineHero from '@/components/shared/WavyLineHero'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const HowItWorks = () => {
    const howitworks = [
        { heading: "AI-Driven Insights", text: "Our advanced AI algorithm scans the crypto market and reviews thousands of projects against our exclusive proprietary criteria to identify trends. By merging machine learning with advanced financial analysis, we determine the best insights for capital allocation." },
        { heading: "Launchpad Review", text: "After identifying promising opportunities, the Unilabs team enters the due diligence phase to review crypto projects, teams, and tokenomics. The review process is comprehensive and backed with advanced data to determine the next generation of decentralized solutions before they become mainstream." },
        { heading: "Consistent Profits With Transparency", text: "With integrated blockchain technology, our traders are able to make consistent profits from our investments. Our profit pool automatically distributes gains from capital positions, staking returns, and arbitrage opportunities across the market. " }
    ]
    return (
        <div className='py-lg-5 py-0 howitworks'>
            <Container className='text-white py-lg-5 py-0'>
                <Row className='shadows'>
                    <Col md={4} xs={12} className='d-flex align-items-center pe-0 position-relative d-lg-flex d-none'>
                        <div className="image-container">
                            <div className="moving-shadow"></div>
                            <Image src="/howitworks.png" fluid alt="How It Works" />
                        </div>
                    </Col>
                    <Col md={3} xs={12} className='d-flex align-items-center pe-0 position-relative d-lg-flex d-none'>
                        <div className="image-container">
                            <Image src="/howitworkGlobe.png" fluid alt="How It Works Globe" className='howitworksGlobe' />
                        </div>
                    </Col>
                    <Col md={5} xs={12}>
                        <h1 className='fw-semibold ps-5'>How It Works</h1>
                        <div className="custom-border  position-relative ">
                            {howitworks.map((item, i) => {
                                return <div className='ps-5' key={i}>
                                    <h2 className='fw-bold'>
                                        <span className="dot me-3"></span>
                                        {item?.heading}                                </h2>
                                    <p style={{ color: "#CECECE" }}>{item?.text}</p>
                                </div>
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowItWorks