import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import Globe from './Globe'

const LaunchPadHero = () => {
    return (
        <>
            <Container className="content-container pb-5">
                <Col xs={12} lg={6} className=' text-start'>
                    <div className="launch">
                        <h1 className="text-white fw-bold">Influence the Future Direction of UNILABS</h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.

                        </p>
                        <div className="d-flex gap-4 justify-content-start">
                            <Button className="greenbtn">Connect to Wallet</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6} className=' text-start'>
                   <Globe/>
                </Col>
            </Container>
        </>
    )
}

export default LaunchPadHero