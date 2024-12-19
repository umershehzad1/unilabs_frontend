import { Slide } from 'react-awesome-reveal';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import GlobeVisualization from '../Earth';
const Hero = () => {
    const icons = [
        '/svg/git.svg',
        '/svg/binance.svg',
        '/svg/tether.svg',
        '/svg/tether.svg',
        '/svg/git.svg',
        '/svg/binance.svg',
    ];

    return (
        <div className="position-relative py-5 custom-overflow">
            <Container className="hero py-5">
                <Row className="align-items-center pt-5 mt-5">
                    <Col xs={12} lg={7}>
                        <Slide >
                            <div>
                                <h1 className="text-white display-4 mb-3 text-uppercase fw-bold">
                                    The World’s First AI-Backed DeFi Asset Manager With Over{' '}
                                    <span className="fw-bold" style={{ color: 'var(--green)' }}>
                                        $50M AUM
                                    </span>
                                </h1>
                                <p className="text-white fs-5">
                                    Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency.
                                </p>
                                <div className="d-flex flex-md-row flex-column my-4 gap-md-5 gap-3 px-md-0 px-2">
                                    <Button className="greenBtn">
                                        <small>Join Presales</small>
                                    </Button>
                                    <Button className="transparentBtn rounded-0">
                                        <small>How to Buy</small>
                                    </Button>
                                </div>

                                <div className="d-flex flex-wrap">
                                    {icons.map((icon, index) => (
                                        <div key={index} className='col-4'>
                                            <Image src={icon} alt="Icon Image" style={{ width: "70%" }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Slide >
                    </Col>
                    <Col xs={12} lg={5} className="position-relative" style={{ scrollBehavior: 'smooth' }}>

                        <div className="animated-earth">
                                <Image src="/earth.png" alt="Earth" fluid />
                            </div>
                        {/* <GlobeVisualization/>                     */}
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Hero;
