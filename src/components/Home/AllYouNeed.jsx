"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../shared/SectionHeading";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";

const cardData = [
    {
        id: 1,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Free Trial Account",
        description:
            "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute mollit anim id est laborum sad to veniam nostrud quis exercition laboris.",
    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Premium Account",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Premium Account",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Premium Account",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const AllYouNeed = () => {
    return (
        <>
            <Container className="py-5">
                <SectionHeading
                    heading={"All You Need"}
                    subHeading={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum."
                    }
                />
                <Row className="py-5 align-items-center">
                    <Col xs={10} lg={6} className="mx-auto mb-3">
                        <Image src={"/coin.png"} className="coin-image" width={0} height={0} layout="responsive" style={{ width: "80%", height: "100%" }} alt={"coin"} />
                    </Col>
                    <Col xs={11} lg={6} className="mx-auto">
                        <Row>
                            {cardData.map((card) => (
                                <Col xs={12} lg={6} key={card.id}>
                                    <Card className="bg-black py-5 text-center presales mb-5" style={{ borderRadius: "20px" }}>
                                       <div className="need-icons">{card.icon}</div> 
                                        <Card.Body className="text-white text-center mt-3">
                                            <h3>{card.title}</h3>
                                            <Card.Text style={{ color: "#aaaaaa" }}>{card.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AllYouNeed;
