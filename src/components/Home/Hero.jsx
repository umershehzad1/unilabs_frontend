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
                        <h1 className="text-white">BEST PLACE TO BUY AND SELL CRYPTO CURRENCY</h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                        </p>
                        <div className="d-flex gap-4 justify-content-center">
                            <Button className="greenbtn">Join Presale</Button>
                            <Button className="transparentbtn">How To Buy</Button>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Hero;
