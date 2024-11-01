"use client"
import React from 'react'
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap'
import Image from 'next/image'

const BlogsHero = () => {
    return (
        <Container
            fluid
            className="pt-5"
            style={{
                minHeight: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
            }}
        >
            <Carousel 
                fade 
                controls={false} 
                indicators={true} 
                interval={3000}
                style={{ width: '100%', height: '80vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            >
                <Carousel.Item>
                    <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                        <Image
                            src="/blogsbg.png"
                            alt="First slide"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                        <Image
                           src="/polls.png"
                            alt="Second slide"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                        <Image
                            src="/blogsbg.png"
                            alt="Third slide"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* Overlay content */}
            <Container>
                <Row className="align-items-center py-5" style={{ position: 'relative', zIndex: 2 }}>
                    <Col xs={12} lg={6} className="manage hero-text-responsive text-center text-lg-start pt-3">
                        <h1>Lorem ipsum dolor</h1>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim id est laborum.
                        </p>
                        <div className="d-flex gap-4 pt-2 justify-content-center justify-content-lg-start">
                            <Button className="greenbtn">Read More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {/* Background Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}
            ></div>
        </Container>
    )
}

export default BlogsHero
