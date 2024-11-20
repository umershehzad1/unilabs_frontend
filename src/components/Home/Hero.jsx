import React from 'react';
import { Button, Col, Container,  Image,  Row } from 'react-bootstrap';
import GlobeComponent from '../launchpad/Globe';

const Hero = () => {
    return (<div className='position-relative py-5'>
            <Container className='hero py-5'>
                <Row className='align-items-center pt-5 mt-5'>
                    <Col xs={12} lg={7}>
                        <div>
                            <h1 className="text-white display-4 mb-3">The World’s First AI-Backed DeFi Asset Manager With Over <span className='fw-bold' style={{color:"var(--green)"}}>$50M AUM </span> </h1>
                            <p className="text-white fs-5">
                                Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency.
                            </p>
                            <div className="d-flex flex-md-row flex-column my-4 gap-md-5 gap-3 px-md-0 px-2">
                            <Button className="greenbtn ">
                                
                                <small>
                                    
                                
                                Join Presales
                                </small>
                                </Button>
                            <Button className="transparentbtn ">
                                
                                
                                <small>
                                    
                                How to Buy
                                </small>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5} className="position-relative">
                    <div className="d-lg-block d-none purple-bg-right"></div>
                        <GlobeComponent/>                        
                    </Col>
                </Row>
            </Container>
            <Image src='/MilkyWay.png' alt="Stars" className='starts-bg'  />
    </div>

    );
}

export default Hero;
