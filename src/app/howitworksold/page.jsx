import WavyLineHero from '@/components/shared/WavyLineHero'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const HowItWorks = () => {
    return (
        <div className='position-relative py-5 custom-overflow howitworks'>


            <Container className='text-white py-5'>
                <h1 className=' text-center fw-semibold'>How It Works</h1>

                <Row>

                    <Col md={6} xs={12} className='d-flex align-items-center pe-0'>
                        <Card className="bg-transparent text-white ms-auto works1 mb-4  ">
                            <div className="row">

                                <div className="col-lg-6 col-10 offset-lg-0 offset-1    " >
                                    <h1>Step 1</h1>

                                    <h2 style={{ color: "var(--green)" }}>AI-Driven Insights</h2>
                                    <Col>
                                        <p>
                                            Our advanced AI algorithm scans the crypto market and reviews thousands
                                            of projects against our exclusive proprietary criteria to identify
                                            trends. By merging machine learning with advanced financial analysis,
                                            we determine the best insights for capital allocation.
                                        </p>
                                    </Col>

                                </div>

                                <div className="col-lg-6      mt-lg-5 pt-4">
                                    <hr
                                        className="rounded-pill mt-3 mt-md-0"
                                        style={{
                                            flexGrow: 1,
                                            opacity: 1,
                                            border: "4px solid var(--green)",
                                            marginLeft: "5rem",

                                        }}
                                    />
                                </div>


                            </div>

                            <div className="row pt-5 mt-3">
                                <div className="col-lg-6 col-10 offset-lg-0 offset-1  d-lg-none d-block">
                                    <h1 className=''>Step 2</h1>

                                    <h2 style={{ color: "var(--green)" }}>Launchpad Review</h2>
                                    <Col>
                                        <p>
                                            After identifying promising opportunities, the Unilabs team enters the due diligence phase to review crypto projects, teams, and tokenomics. The review process is comprehensive and backed with advanced data to determine the next generation of decentralized solutions before they become mainstream.
                                        </p>
                                    </Col>
                                </div>
                                <div className="col-lg-6 col-10 offset-lg-0 offset-1 d-lg-block d-none ">
                                    <h1>Step 3</h1>

                                    <h2 style={{ color: "var(--green)" }}>
                                        Consistent Profits  With Transparency
                                    </h2>                                    <Col>
                                        <p>
                                            With integrated blockchain technology, our traders are able to make
                                            consistent profits from our investments. Our profit pool automatically
                                            distributes gains from capital positions, staking returns, and
                                            arbitrage opportunities across the market.
                                        </p>
                                    </Col>

                                </div>
                                <div className="col-lg-6 col-10  offset-lg-0 offset-1   d-lg-block d-none mt-5 pt-4"><hr
                                    className="rounded-pill mt-3 mt-md-0"
                                    style={{
                                        flexGrow: 1,
                                        opacity: 1,
                                        border: "4px solid var(--green)",
                                        marginLeft: "5rem",


                                    }}
                                />
                                </div>

                            </div>
                        </Card>



                    </Col>
                    <Col md={6} xs={12} className='d-flex align-items-center ps-0 '>
                        <Card className="bg-transparent text-white ms-auto works2 mb-4 pb-lg-5 ">
                            <div className="row py-5">
                                <div className="col-lg-6   mt-5 pt-4">
                                    <hr
                                        className="rounded-pill   mt-3 mt-md-0"
                                        style={{
                                            flexGrow: 1,
                                            opacity: 1,
                                            border: "4px solid var(--green)",
                                            marginRight: "5rem",

                                        }}
                                    /></div>
                                <div className="col-lg-6 col-10 offset-2 offset-lg-0  d-lg-block d-none">
                                    <h1 className=''>Step 2</h1>

                                    <h2 style={{ color: "var(--green)" }}>Launchpad Review</h2>
                                    <Col>
                                        <p>
                                            After identifying promising opportunities, the Unilabs team enters the due diligence phase to review crypto projects, teams, and tokenomics. The review process is comprehensive and backed with advanced data to determine the next generation of decentralized solutions before they become mainstream.
                                        </p>
                                    </Col>
                                </div>
                                <div className="col-lg-6 col-10 offset-lg-0 offset-1  d-lg-none d-block">
                                    <h1>Step 3</h1>

                                    <h2 style={{ color: "var(--green)" }}>
                                        Consistent Profits  With Transparency
                                    </h2>                                    <Col>
                                        <p>
                                            With integrated blockchain technology, our traders are able to make
                                            consistent profits from our investments. Our profit pool automatically
                                            distributes gains from capital positions, staking returns, and
                                            arbitrage opportunities across the market.
                                        </p>
                                    </Col>

                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <WavyLineHero />
        </div>
    )
}

export default HowItWorks