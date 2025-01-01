import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import MovingIcons from '../MovingIcon';
const Hero = () => {
    const icons = [
        '/svg/git.svg',
        '/svg/binance.svg',
        '/svg/tether.svg',
        '/svg/tether.svg',
        '/svg/git.svg',
        '/svg/binance.svg',
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [icons.length]);
    return (
        <div className="position-relative py-lg-5 py-0 custom-overflow">
            <Container className="hero py-5">
                <Row className="align-items-center pt-3 mt-5">
                    <Col xs={12} lg={7}>
                        <Slide>
                            <div>
                                <h1 className="text-white display-4 mb-3 text-uppercase fw-bold">
                                    The World’s First AI-Backed DeFi Asset Manager With Over{' '}
                                    <span className="fw-bold" style={{ color: 'var(--green)' }}>
                                        $50M AUM
                                    </span>
                                </h1>
                                <div>
                                    <TypeAnimation
                                        sequence={[
                                            "Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency.",
                                        ]}
                                        wrapper="p"
                                        className="text-white fs-5"
                                        cursor={false}
                                        repeat={5}
                                    />
                                </div>
                                <div className="d-flex flex-md-row flex-column my-4 gap-md-4 gap-3 px-md-0 px-2 py-3">
                                    <Button className="greenBtn px-5 py-3">
                                        <small>Join Presales</small>
                                    </Button>
                                    <Button className="transparentBtn rounded-0 px-5 py-3">
                                        <small>How to Buy</small>
                                    </Button>
                                </div>
                                <Col lg={9}>
                                    <div className="d-flex flex-wrap py-3">
                                        {icons.map((icon, index) => (
                                            <div key={index} className={`col-4 mb-4`}>
                                                <Image
                                                    src={icon}
                                                    className={`hero-image ${index === activeIndex ? 'move' : ''}`}
                                                    alt="Icon Image"
                                                    style={{ width: '50%' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </div>
                        </Slide>
                    </Col>
                    <Col xs={12} lg={5} className="position-relative d-lg-flex d-none" style={{ scrollBehavior: 'smooth' }}>
                        <div className="animated-earth">
                            <Image src="/earth.png" alt="Earth" fluid />
                        </div>
                        <MovingIcons />
                        {/* <GlobeVisualization /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
