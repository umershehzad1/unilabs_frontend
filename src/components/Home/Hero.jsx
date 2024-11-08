import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="heroouter">
            <video
                className="video-background" 
                autoPlay
                loop
                muted
                playsInline
            >
               
                <source src={" https://res.cloudinary.com/dn0dm4fzf/video/upload/v1729689407/video.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay" /> 
            <Container className="content-container">
                <Col xs={12} lg={10} className='mx-auto text-center'>
                    <div className="hero pt-5">
                        <h1 className="text-white">The World’s First AI-Backed DeFi Asset Manager With Over $50M AUM </h1>
                        <p className="text-white">
                        Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency. 
                        </p>
                        <div className="d-flex gap-4 justify-content-center">
                            <Button className="greenbtn">Join Presale</Button>
                            <Button className="transparentbtn">Whitepaper</Button>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Hero;
