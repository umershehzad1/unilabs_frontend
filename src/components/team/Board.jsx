"use client"
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
                <Row className='py-4'>

                    <Col xs={6}>

                        <Card
                            className="rounded-4 mb-3"
                            style={{ background: "rgba(41, 96, 41,0.3)" }}
                        >
                            <Card.Body>

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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quos voluptates accusantium vitae nulla quidem enim id! Enim veniam odit ipsum neque aspernatur consequuntur atque laboriosam nesciunt eos animi. Deserunt dolorem facere nihil voluptatibus. Aliquid nisi facere vel, expedita nam laudantium modi. Corporis illo sint, facere illum beatae odio, quo, ratione officia maxime expedita alias dolore quos quis ducimus nesciunt velit fugit saepe similique quas? Magni optio reprehenderit maiores dolorum? Est ullam repudiandae officiis architecto iste expedita atque! Eligendi assumenda doloremque, ex ut neque in quo quod rerum ullam autem, ad suscipit. Beatae in cumque hic dolor totam numquam, praesentium nemo quas unde nesciunt eveniet accusantium voluptatem aperiam placeat mollitia porro! Facilis nihil nulla, fugiat enim quia error vero, autem animi corporis nesciunt, possimus numquam. Culpa aliquam, quasi dignissimos minus eligendi doloremque ex itaque, non totam perferendis quas cum? Omnis distinctio sunt rerum veritatis recusandae, reprehenderit odio optio qui in.
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
                    <Col xs={6}>

                        <Card
                            className="rounded-4 mb-3"
                            style={{ background: "rgba(41, 96, 41,0.3)" }}
                        >
                            <Card.Body>

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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quos voluptates accusantium vitae nulla quidem enim id! Enim veniam odit ipsum neque aspernatur consequuntur atque laboriosam nesciunt eos animi. Deserunt dolorem facere nihil voluptatibus. Aliquid nisi facere vel, expedita nam laudantium modi. Corporis illo sint, facere illum beatae odio, quo, ratione officia maxime expedita alias dolore quos quis ducimus nesciunt velit fugit saepe similique quas? Magni optio reprehenderit maiores dolorum? Est ullam repudiandae officiis architecto iste expedita atque! Eligendi assumenda doloremque, ex ut neque in quo quod rerum ullam autem, ad suscipit. Beatae in cumque hic dolor totam numquam, praesentium nemo quas unde nesciunt eveniet accusantium voluptatem aperiam placeat mollitia porro! Facilis nihil nulla, fugiat enim quia error vero, autem animi corporis nesciunt, possimus numquam. Culpa aliquam, quasi dignissimos minus eligendi doloremque ex itaque, non totam perferendis quas cum? Omnis distinctio sunt rerum veritatis recusandae, reprehenderit odio optio qui in.
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

export default Board