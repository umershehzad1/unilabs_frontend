"use client"
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';  
import WavyLineHero from '@/components/shared/WavyLineHero';

const page = () => {
    const sideByside = [
        {
            img: "/core1.png",
            heading: "AI Market Pulse",
            text: "Unilabs’ Market Pulse relies on advanced AI to scout the market for opportunities. Use the Pulse for analysis on market trends, key token movements, and other pressing opportunities in the market. We’re constantly evaluating on-chain and off-chain data to deliver actionable insights and generate returns for your portfolio."
        },
        {
            img: "/core2.png",
            heading: "Early Access Scoring System (EASS)",
            text: "Our proprietary Early Access Scoring System ranks projects based on a combination of factors, including team credibility, use-case potential, tokenomics, and market sentiment. This dynamic scoring system simplifies decision-making by presenting clear, data-backed ratings for upcoming crypto projects, giving you the confidence to act quickly."
        },
        {
            img: "/core3.png",
            heading: "Meme-coin Identification Tool",
            text: "The most promising growth opportunities are found today in the memecoin segment. For high-risk investors, our risk allocation tool utilizes an advanced memecoin identification algorithm. We monitor liquidity, listing chances, and virality metrics to help you leverage growth from the most promising projects in the market."
        },
    ];

    return (
        <div className='position-relative py-5 my-5 corefeatures'>
            <div className="purple-bg-right"></div>
            <div className="wave1">
                <WavyLineHero />
            </div>
            <div className="wave2">
                <WavyLineHero />
            </div>
            <Container className='text-white text-center'>
                <h1 className='display-5 fw-bold py-5'>
                    Core <span className="px-2 green">UNILABS</span> Features
                </h1>

                {sideByside.map((item, index) => (
                    <Row
                        key={index}
                        className={`mb-5 d-flex align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <Col xs={12} md={6} className="text-center">
                            <Zoom delay={100} duration={1000} triggerOnce>
                                <img src={item.img} alt={item.heading} className="img-fluid" />
                            </Zoom>
                        </Col>

                        <Col xs={12} md={6} className='text-start'>
                            <Fade delay={200} duration={1000} triggerOnce>
                                <h1 className="fw-bold green border-bottom pb-2 me-5" style={{ borderColor: "var(--green)!important" }}>
                                    {item.heading}
                                </h1>
                                <p className="fs-4">{item.text}</p>
                            </Fade>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default page;
