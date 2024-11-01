import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import GlobeComponent from './Globe';

const LaunchPadHero = () => {
    return (
        <Container className="content-container pb-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} className="text-start mb-4 mb-lg-0">
                    <div className="launch text-center text-lg-start">
                        <h1 className="text-white fw-bold">Influence the Future Direction of UNILABS</h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim id est laborum.
                        </p>
                        <div className="d-flex gap-4 justify-content-lg-start justify-content-center">
                            <Button className="greenbtn">Connect to Wallet</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={8} lg={6} className='mx-auto'>
                    <div className="globe-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <GlobeComponent />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LaunchPadHero;
