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
        title: "Upto 122% APY in Staking Rewards",

    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Access to Exclusive Investment Insights",

    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Prioritized Access to dApps ",

    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Contribute to Governance Decisions",

    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Earn Referral Bonuses",

    },
    {
        id: 2,
        icon: <FaRegUser color={"#438446"} className=" mx-auto" size={50} />,
        title: "Eligible for Upcoming Airdrops",

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
                    <Col xs={8} className="mx-auto">
                        <Row>
                            {cardData.map((card) => (
                                <Col xs={12} lg={12} key={card.id}>
                                    <div className=" text-center mb-4 " style={{ borderRadius: "20px" }}>
                                    
                                        <div className="text-white text-center d-flex gap-2 align-items-center">
                                        <Image
                                        src={"/star.png"}
                                        alt={"star"}
                                        width={40}
                                        height={40}
                                        className='star'
                                    />
                                            <h3 className="mt-2">{card.title}</h3>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AllYouNeed;
