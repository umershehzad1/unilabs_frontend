"use client"
import BlurShadowLayer from '@/components/BlurShadow';
import MovingIcons from '@/components/MovingIcon';
import Subscribe from '@/components/shared/Subscribe';
import WaterDrops from '@/components/shared/WaterFall';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Col, Container, Image, Row } from 'react-bootstrap';

const page = () => {
    const sideByside = [
        {
            img: "/feature1.png",
            heading: "AI Market Pulse",
            text: "Unilabs’ Market Pulse relies on advanced AI to scout the market for opportunities. Use the Pulse for analysis on market trends, key token movements, and other pressing opportunities in the market. We’re constantly evaluating on-chain and off-chain data to deliver actionable insights and generate returns for your portfolio."
        },
        {
            img: "/feature2.png",
            heading: "Early Access Scoring System (EASS)",
            text: "Our proprietary Early Access Scoring System ranks projects based on a combination of factors, including team credibility, use-case potential, tokenomics, and market sentiment. This dynamic scoring system simplifies decision-making by presenting clear, data-backed ratings for upcoming crypto projects, giving you the confidence to act quickly."
        },
        {
            img: "/feature3.png",
            heading: "Meme-coin Identification Tool",
            text: "The most promising growth opportunities are found today in the memecoin segment. For high-risk investors, our risk allocation tool utilizes an advanced memecoin identification algorithm. We monitor liquidity, listing chances, and virality metrics to help you leverage growth from the most promising projects in the market."
        },
    ];
    return (
        <div className='position-relative py-5 my-5 corefeatures'>
            <BlurShadowLayer />

            <MovingIcons />
            <Container className='text-white text-center py-3'>
                <div fluid className="FeatureContent text-white text-center">
                    <div className="p-4">
                        <p className="text-uppercase green mt-4 mb-2">
                            We are currently in the Presale of the UNIL Token. Log-In or Create an account to buy.
                        </p>
                        <h1 className="display-5 fw-bold">
                            CORE <span className="px-2 green">UNILABS</span>FEATURES
                        </h1>
                    </div>
                </div>
                <div className="mx-auto">
                    <WaterDrops />
                </div>
                <h1 className="display-4  fw-bold py-5">FEATURES</h1>

                {sideByside.map((item, index) => (
                    <Row
                        key={index}
                        className={`mb-5 d-flex align-items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <Col xs={12} md={6} className="text-center">
                            <Zoom delay={100} duration={1000} triggerOnce>
                                <Image src={item.img} alt={item.heading} className="img-fluid" style={{ height: "400px", width: "400px" }} />
                            </Zoom>
                        </Col>

                        <Col xs={12} md={6} className='text-md-start text-center'>
                            <Fade delay={200} duration={1000} triggerOnce>
                                <h2 className="fw-bold display-5 pb-2 me-md-5 px-md-auto px-3" style={{ borderColor: "var(--green)!important" }}>
                                    {item.heading}
                                </h2>
                                <p className='text-secondary small pe-lg-5' >{item.text}</p>
                            </Fade>
                        </Col>
                    </Row>
                ))}
            </Container>
            <Subscribe />

        </div>
    );
};

export default page;
