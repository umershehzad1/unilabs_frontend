"use client"
import BlurShadowLayer from '@/components/BlurShadow';
import ParticlesBackground from '@/components/shared/Particles';
import { Slide, Zoom } from 'react-awesome-reveal';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const HowItWorks = () => {
    return (
        <div className='py-md-5 position-relative  howitworks roadmapspage overflow-hidden'>
            <ParticlesBackground particleColor={"#FFFFFF"} />;
            <BlurShadowLayer />
            <div className="iconRight">
                <Image src="/svg/leftIcon.svg" alt="Right Icon" />
            </div>
            <Container className='text-white pt-5'>
                <h1 className='display-6 fw-bold py-5 text-center '> A COMPREHENSIVE <span className="px-2 green">ROADMAP</span>
                    <br className="d-lg-block" />
                    TO
                    <span className="px-2 green">SUCCESS</span>
                </h1>

                <h1 className='display-6 fw-bold py-md-5 pb-4 text-center green'>ROAD MAP</h1>
                <Row>
                    <Col md={6} xs={12} className='d-flex align-items-center pe-0'>
                        <Card className="bg-transparent text-white ms-auto works1 mb-4">
                            <div className="row">
                                <div className="col-lg-8 col-10 offset-lg-0 offset-1">
                                    <Slide left delay={100} smooth triggerOnce>
                                        <h4 className='fw-bold'>Phase 1: Genesis (Nov 2024 – Mar 2025)</h4>
                                        <h5 className='fw-bold' style={{ color: "var(--green)" }}>Laying the Foundation for Innovation</h5>  <Col>
                                            <ul style={{ color: "#CECECE" }}>
                                                <li>Platform Launch: Deploy the core Unilabs platform with foundational AI features, including project scoring and opportunity identification.</li>
                                                <li>Smart Contract Auditing Tool: Introduce the automated smart contract auditing feature to vet projects.</li>
                                                <li>Token Presale and Distribution: Launch the token presale at $0.01 and distribute tokens to early investors.</li>
                                                <li>AI Integration with Market Pulse: Deploy the first version of the AI-powered Market Pulse for real-time trend analysis.</li>
                                                <li>Community Building: Launch the Unilabs community hub for onboarding, investor education, and early adopter engagement.</li>
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
                                        <h4 className='fw-bold'>Phase 2: Ascent (Apr 2025 – Jul 2025)</h4>
                                        <h5 className='fw-bold' style={{ color: "var(--green)" }}>Scaling the Ecosystem</h5>
                                        <Col>
                                            <ul style={{ color: "#CECECE" }}>
                                                <li>Portfolio Risk Management Engine: Introduce the AI-powered risk management tool to balance investments and manage market volatility.</li>
                                                <li>Enhanced On-Chain Monitoring: Implement real-time blockchain monitoring with automated alert notifications.</li>
                                                <li>Dynamic AI Governance Protocol: Launch a beta version of decentralized decision-making for project partnerships and token launches.</li>
                                                <li>Early Access Scoring System (EASS) V2: Upgrade the EASS with additional AI parameters for tokenomics and social sentiment analysis.</li>
                                                <li>Partnership Development: Secure partnerships with emerging blockchain projects to provide exclusive investment opportunities.</li>
                                            </ul>
                                        </Col>                                    </Slide>

                                </div>

                                <div className="col-lg-8 col-10 offset-lg-0 offset-1 d-lg-block d-none">
                                    <Slide right triggerOnce>
                                        <h4 className='fw-bold'>Phase 3: Apex (Aug 2025 – Nov 2025)</h4>
                                        <h5 className='fw-bold' style={{ color: "var(--green)" }}>Driving Innovation and Adoption</h5>
                                        <Col>
                                            <ul style={{ color: "#CECECE" }}>
                                                <li>Decentralized Investment Pools: Launch the community-driven investment pool feature to enable collective investments in vetted projects.</li>
                                                <li>Tokenomics Analyzer: Roll out the in-depth tokenomics evaluation tool to assess project sustainability and long-term viability.</li>
                                                <li>AI Scalability Upgrade: Optimize AI algorithms to analyze larger datasets for improved accuracy and predictive capabilities.</li>
                                                <li>Unilabs Mobile App: Release the mobile application for seamless user experience and on-the-go investment tracking.</li>
                                                <li>Global Outreach Campaign: Execute marketing initiatives to expand Unilabs’ reach into international markets.</li>
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
                                        <h4 className='fw-bold'>Phase 2: Ascent (Apr 2025 – Jul 2025)</h4>
                                        <h5 className='fw-bold' style={{ color: "var(--green)" }}>Scaling the Ecosystem</h5>
                                        <Col>
                                            <ul style={{ color: "#CECECE" }}>
                                                <li>Portfolio Risk Management Engine: Introduce the AI-powered risk management tool to balance investments and manage market volatility.</li>
                                                <li>Enhanced On-Chain Monitoring: Implement real-time blockchain monitoring with automated alert notifications.</li>
                                                <li>Dynamic AI Governance Protocol: Launch a beta version of decentralized decision-making for project partnerships and token launches.</li>
                                                <li>Early Access Scoring System (EASS) V2: Upgrade the EASS with additional AI parameters for tokenomics and social sentiment analysis.</li>
                                                <li>Partnership Development: Secure partnerships with emerging blockchain projects to provide exclusive investment opportunities.</li>
                                            </ul>
                                        </Col>                                    </Zoom>

                                </div>

                                <div className="col-lg-8 col-10 offset-lg-0 offset-1 d-lg-none d-block">
                                    <Zoom delay={300} triggerOnce>
                                        <h4 className='fw-bold'>Phase 3: Apex (Aug 2025 – Nov 2025)</h4>
                                        <h5 className='fw-bold' style={{ color: "var(--green)" }}>Driving Innovation and Adoption</h5>
                                        <Col>
                                            <ul style={{ color: "#CECECE" }}>
                                                <li>Decentralized Investment Pools: Launch the community-driven investment pool feature to enable collective investments in vetted projects.</li>
                                                <li>Tokenomics Analyzer: Roll out the in-depth tokenomics evaluation tool to assess project sustainability and long-term viability.</li>
                                                <li>AI Scalability Upgrade: Optimize AI algorithms to analyze larger datasets for improved accuracy and predictive capabilities.</li>
                                                <li>Unilabs Mobile App: Release the mobile application for seamless user experience and on-the-go investment tracking.</li>
                                                <li>Global Outreach Campaign: Execute marketing initiatives to expand Unilabs’ reach into international markets.</li>
                                            </ul>
                                        </Col>                                    </Zoom>

                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row className="py-5">
                    <Col lg={6} className="p-5 col-12 mb-4 d-flex align-items-center text-uppercase" style={{ backgroundColor: "#4CAF50" }}>
                        <h1 className='fw-bold'>Join <span style={{ color: "#151517" }}>Unilabs</span> today and simplify your crypto journey!</h1>
                    </Col>
                    <Col lg={6} className="col-12 px-0">
                        <Zoom triggerOnce>
                            <div className="w-100 d-flex justify-content-center mb-4 ">
                                {/* <Image className='ml-0' fluid src="/roadmap.png" /> */}
                                <video src='/ETH.mp4' autoPlay loop muted className='w-100' />
                            </div>
                        </Zoom>
                    </Col>
                </Row>
            </Container>

            <div className="iconLeft">
                <Image src="/svg/leftIcon.svg" alt="Left Icon" />
            </div>
        </div>
    )
}

export default HowItWorks;
