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
                <Row className='py-4 justify-content-around'>

                    <Col xs={12} lg={4}>

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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe impedit assumenda unde atque consequuntur voluptatibus maxime id consequatur quo quia, nulla facere corporis, quaerat deleniti. Dignissimos, quis officiis harum, eligendi exercitationem facere deleniti minima optio sit ipsa molestias consequatur libero reprehenderit nisi. Reprehenderit, ducimus asperiores praesentium maxime excepturi ad adipisci. Quisquam ratione repellat quibusdam non, quis voluptas incidunt quo quasi alias totam recusandae ducimus dolorem dolorum eos praesentium officiis voluptatibus ut. Debitis numquam enim officiis vel ad eligendi autem dolor, nostrum, pariatur voluptatibus quis quaerat dolores saepe impedit! In quod exercitationem perspiciatis reprehenderit sapiente enim atque, distinctio numquam molestias.
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
                    <Col xs={12} lg={4}>

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, provident animi! Rerum voluptatem repellendus dolor sit vitae cum, fugiat minus molestias impedit nobis placeat officia omnis eveniet ad. Ex, aspernatur? Autem adipisci excepturi dolorem laudantium, aspernatur nulla blanditiis amet nihil molestiae provident voluptate quo cum deserunt maiores dolores ea rem? Assumenda fugit numquam fugiat consequuntur ullam at doloremque unde amet reiciendis inventore illum error, explicabo id voluptatum. Exercitationem perferendis porro quibusdam sunt vitae unde quis reiciendis nostrum nesciunt eaque assumenda quae ullam, molestiae enim sapiente illo dolorum voluptatem vel omnis! Voluptates reiciendis repudiandae recusandae commodi eligendi sapiente accusantium nam dolore.
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