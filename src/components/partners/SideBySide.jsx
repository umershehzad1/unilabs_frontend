"use client";
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const contentData = [
    {
        title: "Team Video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.",
        buttonText: "Details",
        imageSrc: "/wing.png",
        shadowColor: "rgb(242, 140, 60)",
    },
    {
        title: "FOORTMUND",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.",
        buttonText: "Details",
        imageSrc: "/foortmund.png",
        shadowColor: "rgb(46, 107, 57)",
    },
    {
        title: "TILAN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.",
        buttonText: "Details",
        imageSrc: "/tilan.png",
        shadowColor: "rgb(83, 156, 140)",
    },
];

const SideBySide = () => {
    return (
        <>

            <div className="position-relative pt-5">
                
                <Container className="py-5">
                    {contentData.map((item, index) => (
                        <Row
                            className={`align-items-center py-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                            key={index}
                        >
                            <Col xs={10} lg={6} className="mx-auto mb-3">
                                <Image
                                    src={item.imageSrc}
                                    width={0}
                                    height={0}
                                    layout="responsive"
                                    style={{
                                        width: "80%",
                                        height: "100%",
                                        filter: `drop-shadow(0px 0px 100px ${item.shadowColor})`,
                                    }}
                                    alt={item.title}
                                    className='moving'
                                />
                            </Col>
                            <Col xs={12} lg={6} className="manage text-center text-lg-start">
                                <h1 className="text-white">
                                    <span>{item.title}</span>
                                </h1>
                                <p className="text-white">{item.description}</p>
                                <div className="d-flex gap-4 pt-2 justify-content-center justify-content-lg-start">
                                    <Button className="transparentBtn rounded-0">{item.buttonText}</Button>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </>
    );
};

export default SideBySide;
