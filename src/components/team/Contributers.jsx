import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'
import Link from 'next/link'
import { GrLinkedinOption } from "react-icons/gr";
import Image from 'next/image';

const Contributers = () => {
    return (
        <>
        <div className="py-5">

    
            <div className="py-5">
                <Container className='py-3 ' >
                    <SectionHeading heading={"UNILABS NETWORK CONTRIBUTORS"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nemo, quia ullam ea odio deleniti ducimus! Ab, distinctio itaque. Voluptatibus."} />
                    
                    <div className='linebg'>
                    <Row className="align-items-center py-5 " >
                        <Col xs={12} lg={6} className="">

                            <Col xs={7} className='mx-auto text-center'>
                                <Image
                                    src={"/ceo.png"}
                                    width={0}
                                    height={0}
                                    layout="responsive"
                                    style={{ width: "100%", height: "100%" }}
                                    alt={"image"}
                                    className='ceo-shadow'
                                />
                                <SectionHeading heading={"NICKNAME"} />
                                <div>

                                    <p className='fs-1' style={{ color: "#50af51" }}>CEO & CO-FOUNDER</p>

                                </div>
                            </Col>
                        </Col>
                        <Col xs={12} lg={6} className='manage text-center text-lg-start'>
                            <h1 className="text-white">
                                NAME
                            </h1>
                            <p className='text-white fs-5 fs-lg-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quae similique recusandae eveniet quis temporibus! Repudiandae non explicabo quisquam, aperiam, expedita dolorum aliquam reprehenderit dignissimos libero maiores sint, sunt magni! Ipsum deleniti quam nisi voluptas! Animi quidem distinctio neque totam cupiditate, beatae nam, doloremque nisi commodi unde magni. Dolore architecto, porro modi tenetur quaerat autem, temporibus iure quibusdam recusandae saepe esse. Earum enim ipsam dolor at blanditiis ratione culpa voluptate temporibus! Consequuntur, facere! Consequatur laboriosam, provident qui mollitia officiis, quasi nesciunt possimus cupiditate, ipsum accusamus facere! Ratione nam quod unde similique necessitatibus, magnam labore eius exercitationem fugiat, omnis corrupti doloremque!
                            </p>
                            <Link href={"#"} className="d-flex align-items-center gap-2 text-decoration-none text-white fs-4 justify-content-center justify-content-lg-start">
                                <div className='d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", borderRadius: "60%", background: "#2d81b9" }}>
                                    <GrLinkedinOption />
                                </div>
                                <div>
                                    Linkedin
                                </div>
                            </Link>

                        </Col>

                    </Row>
                    <Row className="align-items-center">
                        <Col xs={12} lg={6} className="order-lg-2">
                            <Col xs={7} className="mx-auto text-center">
                                <Image
                                    src="/cso.png"
                                    width={0}
                                    height={0}
                                    layout="responsive"
                                    style={{ width: '100%', height: '100%' }}
                                    alt="Chief Security Officer"
                                    className="ceo-shadow"
                                />
                            </Col>
                        </Col>

                        <Col xs={12} lg={6} className="manage text-center text-lg-start order-lg-1">
                            <h1 className="text-white">NAME</h1>
                            <div>
                                <p className="fs-1" style={{ color: "#50af51" }}>CHIEF SECURITY OFFICER</p>
                            </div>
                            <p className="text-white fs-5 fs-lg-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quae similique recusandae eveniet quis temporibus! Repudiandae non explicabo quisquam, aperiam, expedita dolorum aliquam reprehenderit dignissimos libero maiores sint, sunt magni! Ipsum deleniti quam nisi voluptas! Animi quidem distinctio neque totam cupiditate, beatae nam, doloremque nisi commodi unde magni. Dolore architecto, porro modi tenetur quaerat autem, temporibus iure quibusdam recusandae saepe esse. Earum enim ipsam dolor at blanditiis ratione culpa voluptate temporibus! Consequuntur, facere! Consequatur laboriosam, provident qui mollitia officiis, quasi nesciunt possimus cupiditate, ipsum accusamus facere! Ratione nam quod unde similique necessitatibus, magnam labore eius exercitationem fugiat, omnis corrupti doloremque!
                            </p>
                            <Link href={"#"} className="d-flex align-items-center gap-2 text-decoration-none text-white fs-4 justify-content-center justify-content-lg-start">
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        borderRadius: "60%",
                                        background: "#2d81b9"
                                    }}
                                >
                                    <GrLinkedinOption />
                                </div>
                                <div>LinkedIn</div>
                            </Link>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
            </div>
        </>
    )
}

export default Contributers