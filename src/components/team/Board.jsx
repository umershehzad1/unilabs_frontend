"use client";
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedinOption } from "react-icons/gr";

const Board = () => {

    return (
        <>
            <Container className='pb-5'>
                <SectionHeading heading={"ADVISORY BOARD"} />
                <Row className='py-4 justify-content-around'>
                    {/* Use 'd-flex' to make the columns equal height */}
                    <Col xs={12} lg={4} className="d-flex">
                        <Card
                            className="rounded-4 mb-3 w-100"
                            style={{ background: "rgba(41, 96, 41,0.3)" }}
                        >
                            <Card.Body className="d-flex flex-column">
                                <div className='text-center' style={{ background: "#3e8e5e" }}>
                                    <Image
                                        src={"/cso.png"}
                                        width={200}
                                        height={300}
                                        alt="Blog Image"
                                        className='mx-auto'
                                    />
                                </div>

                                <h1 className="text-white mb-0 fw-bold">
                                    NAME
                                </h1>
                                <div>
                                    <p className='fs-1 mb-0' style={{ color: "#50af51" }}>SENIOR ADVISOR</p>
                                </div>
                                <p className="text-white" style={{ color: "#818ea3" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe impedit assumenda unde atque consequuntur voluptatibus maxime id consequatur quo quia, nulla facere corporis, quaerat deleniti. Dignissimos, quis officiis harum, eligendi exercitationem facere deleniti minima optio sit ipsa molestias consequatur libero reprehenderit nisi. Reprehenderit, ducimus asperiores praesentium maxime excepturi ad adipisci.
                                </p>
                                <Link href={"#"} className="d-flex align-items-center gap-2 text-decoration-none text-white fs-4">
                                    <div className='d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", borderRadius: "60%", background: "#2d81b9" }}>
                                        <GrLinkedinOption />
                                    </div>
                                    <div>
                                        Linkedin
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} lg={4} className="d-flex">
                        <Card
                            className="rounded-4 mb-3 w-100"
                            style={{ background: "rgba(41, 96, 41,0.3)" }}
                        >
                            <Card.Body className="d-flex flex-column">
                                <div className='text-center' style={{ background: "#3e8e5e" }}>
                                    <Image
                                        src={"/cso.png"}
                                        width={200}
                                        height={300}
                                        alt="Blog Image"
                                        className='mx-auto'
                                    />
                                </div>

                                <h1 className="text-white mb-0 fw-bold">
                                    NAME
                                </h1>
                                <div>
                                    <p className='fs-1 mb-0' style={{ color: "#50af51" }}>SENIOR ADVISOR</p>
                                </div>
                                <p className="text-white" style={{ color: "#818ea3" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, provident animi! Rerum voluptatem repellendus dolor sit vitae cum, fugiat minus molestias impedit nobis placeat officia omnis eveniet ad. Ex, aspernatur? Autem adipisci excepturi dolorem laudantium, aspernatur nulla blanditiis amet nihil molestiae provident voluptate quo cum deserunt maiores dolores ea rem?
                                </p>
                                <Link href={"#"} className="d-flex align-items-center gap-2 text-decoration-none text-white fs-4">
                                    <div className='d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", borderRadius: "60%", background: "#2d81b9" }}>
                                        <GrLinkedinOption />
                                    </div>
                                    <div>
                                        Linkedin
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Board;
