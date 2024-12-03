"use client"
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Fade, Zoom, Slide } from 'react-awesome-reveal'  // Importing animations
import WavyLineHero from '@/components/shared/WavyLineHero'

const HowItWorks = () => {
    return (
        <div className='py-md-5 position-relative howitworks roadmapspage overflow-hidden'>
            <div className="purple-bg-right"></div>
            <div className="wave1">
                <WavyLineHero />
            </div>
            <div className="wave2">
                <WavyLineHero />
            </div>
            <Container className='text-white pt-5'>
                <h1 className='display-5 fw-bold py-5 text-center'>
                    <span className="px-2 green">UNILABS</span> Roadmap
                </h1>

                <Row>
                    <Col md={6} xs={12} className='d-flex align-items-center pe-0'>
                        <Card className="bg-transparent text-white ms-auto works1 mb-4">
                            <div className="row">
                                <div className="col-lg-8 col-10 offset-lg-0 offset-1">
                                    <Slide left delay={200} triggerOnce>
                                        <h1>Phase 1: Genesis (Nov 2024 – Mar 2025)</h1>
                                        <h2 style={{ color: "var(--green)" }}>Laying the Foundation for Innovation</h2>  <Col>
                                            <ul>
                                                <li>Platform Launch: Deploy the core Unilabs platform with foundational AI features.</li>
                                                <li>Smart Contract Auditing Tool: Introduce the automated smart contract auditing feature.</li>
                                                <li>Token Presale and Distribution: Launch the token presale at $0.01 and distribute tokens.</li>
                                                <li>AI Integration with Market Pulse: Deploy the first version of the AI-powered Market Pulse.</li>
                                                <li>Community Building: Launch the Unilabs community hub for onboarding and education.</li>
                                            </ul>
                                        </Col>
                                    </Slide>

                                </div>

                                <div className="col-lg-4 mt-lg-5 pt-4">
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
                                <div className="col-lg-8 col-10 offset-lg-0 offset-1 d-lg-none d-block">
                                    <Slide right delay={200} triggerOnce>
                                        <h1 className=''>Phase 2: Ascent (Apr 2025 – Jul 2025)</h1>
                                        <h2 style={{ color: "var(--green)" }}>Scaling the Ecosystem</h2>
                                        <Col>
                                            <ul>
                                                <li>Portfolio Risk Management Engine: AI-powered risk management tool to balance investments.</li>
                                                <li>Enhanced On-Chain Monitoring: Implement real-time blockchain monitoring.</li>
                                                <li>Dynamic AI Governance Protocol: Launch a decentralized decision-making protocol.</li>
                                                <li>Early Access Scoring System (EASS) V2: Upgrade the scoring system with additional AI parameters.</li>
                                                <li>Partnership Development: Secure partnerships with emerging blockchain projects.</li>
                                            </ul>
                                        </Col>                                    </Slide>

                                </div>

                                <div className="col-lg-8 col-10 offset-lg-0 offset-1 d-lg-block d-none">
                                    <Slide right delay={200} triggerOnce>
                                        <h1>Phase 3: Apex (Aug 2025 – Nov 2025)</h1>
                                        <h2 style={{ color: "var(--green)" }}>Driving Innovation and Adoption</h2>
                                        <Col>
                                            <ul>
                                                <li>Decentralized Investment Pools: Community-driven investment pools for collective investments.</li>
                                                <li>Tokenomics Analyzer: In-depth tokenomics evaluation tool for sustainability.</li>
                                                <li>AI Scalability Upgrade: Optimize AI algorithms for larger datasets.</li>
                                                <li>Unilabs Mobile App: Release mobile app for seamless tracking and experience.</li>
                                                <li>Global Outreach Campaign: Execute marketing campaigns for international expansion.</li>
                                            </ul>
                                        </Col>                                    </Slide>

                                </div>

                                <div className="col-lg-4 col-10 offset-lg-0 offset-1 d-lg-block d-none mt-5 pt-4">
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
                        </Card>
                    </Col>

                    <Col md={6} xs={12} className='d-flex align-items-center ps-0'>
                        <Card className="bg-transparent text-white ms-auto works2 mb-4 pb-lg-5">
                            <div className="row py-5">
                                <div className="col-lg-4 mt-5 pt-4">
                                    <hr
                                        className="rounded-pill mt-3 mt-md-0"
                                        style={{
                                            flexGrow: 1,
                                            opacity: 1,
                                            border: "4px solid var(--green)",
                                            marginRight: "5rem",
                                        }}
                                    />
                                </div>

                                <div className="col-lg-8 col-10 offset-2 offset-lg-0 d-lg-block d-none">
                                    <Zoom delay={300} triggerOnce>
                                        <h1 className=''>Phase 2: Ascent (Apr 2025 – Jul 2025)</h1>
                                        <h2 style={{ color: "var(--green)" }}>Scaling the Ecosystem</h2>
                                        <Col>
                                            <ul>
                                                <li>Portfolio Risk Management Engine: AI-powered risk management tool.</li>
                                                <li>Enhanced On-Chain Monitoring: Real-time blockchain monitoring.</li>
                                                <li>Dynamic AI Governance Protocol: Decentralized decision-making protocol.</li>
                                                <li>Early Access Scoring System (EASS) V2: Enhanced with tokenomics and sentiment analysis.</li>
                                                <li>Partnership Development: New partnerships with emerging blockchain projects.</li>
                                            </ul>
                                        </Col>                                    </Zoom>

                                </div>

                                <div className="col-lg-8 col-10 offset-lg-0 offset-1 d-lg-none d-block">
                                    <Zoom delay={300} triggerOnce>
                                        <h1>Phase 3: Apex (Aug 2025 – Nov 2025)</h1>
                                        <h2 style={{ color: "var(--green)" }}>Driving Innovation and Adoption</h2>
                                        <Col>
                                            <ul>
                                                <li>Decentralized Investment Pools: Community investment pools.</li>
                                                <li>Tokenomics Analyzer: In-depth tokenomics evaluation tool.</li>
                                                <li>AI Scalability Upgrade: Optimize AI for larger datasets.</li>
                                                <li>Unilabs Mobile App: Release mobile app for tracking and seamless experience.</li>
                                                <li>Global Outreach Campaign: Expand to international markets.</li>
                                            </ul>
                                        </Col>                                    </Zoom>

                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowItWorks;
