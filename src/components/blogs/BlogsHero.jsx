import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const BlogsHero = () => {
    return (
        <Container
            fluid
            className="pt-5"
            style={{
                backgroundImage: `url(/blogsbg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                minHeight: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
            }}
        >
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
            <Container>



                <Row className="align-items-center py-5" style={{ position: 'relative', zIndex: 2 }}>
                    <Col xs={12} lg={6} className="manage">
                        <h1>
                            <span>Lorem ipsum dolor</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                        </p>
                        <div className="d-flex gap-4 pt-2">
                            <Button className="greenbtn">Read More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BlogsHero
