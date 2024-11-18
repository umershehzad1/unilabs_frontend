import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import GlobeComponent from '../launchpad/Globe';

const Hero = () => {
    return (
        <div className="heroouter">
            <Container className="content-container">
                <Row className='align-items-center'>
                    <Col xs={12} lg={6} className=''>
                        <div className="hero pt-5">
                            <h1 className="text-white">The World’s First AI-Backed DeFi Asset Manager With Over <span>$50M AUM </span> </h1>
                            <p className="text-white">
                                Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency.
                            </p>
                            <div className="d-flex gap-4">
                                <Button className="greenbtn">Join Presale</Button>
                                <Button className="transparentbtn">Whitepaper</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <GlobeComponent/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Hero;
