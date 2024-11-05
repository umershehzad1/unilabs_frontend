"use client";
import CopyableLink from '@/components/dashboard/CopyableLink';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const BuyToken = () => {

    return (
        <Container fluid className="px-md-4 text-white ">
            <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                <div className="page-bg bg-top">
                    <h1 className="fw-bold border-bottom border-success pb-2">My UNI Token</h1>


                    <Row className='py-4 page-bg  px-0'>

                        <Col md={6} xs={12}>


                            <Card className="p-sm-4 p-2 rounded-4 mb-4" style={{
                                color: "#DBDBDB",
                                background: "#589CFF38",
                            }}>
                                <h3 className='f-of'>My Wallet Address</h3>
                                <div
                                    className="border-top "
                                    style={{
                                        borderTop: "4px solid",
                                        borderImageSource: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <p className="mb-0 mt-3 f-of" style={{ color: "#DBDBDB80" }}>
                                        Add or update your Ethereum wallet address to receive your $UNI tokens.
                                    </p>
                                    <Col className="d-flex flex-column flex-md-row align-items-center">
                                        <small className="fs-5 mb-2 mb-md-0 f-of">
                                            <small style={{ color: "var(--color1)" }}>Receiving Wallet:</small>
                                            <Link href="#" className="ms-2 f-of small">Add Your Wallet Address</Link>
                                        </small>
                                        <Button
                                            size="sm"
                                            className="ms-md-3 mt-2 mt-md-0"
                                            style={{
                                                backgroundColor: "rgba(13, 110, 253, 0.7)",
                                                borderColor: "rgba(13, 110, 253, 0.7)"
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </Col>
                                </div>
                            </Card>
                            <Card className="p-sm-4 p-2 rounded-4 mb-4" style={{
                                color: "#DBDBDB",
                                background: "#589CFF38",
                            }}>
                                <h3 className='f-of'>Total Token Amount</h3>
                                <div
                                    className="border-top"
                                    style={{
                                        borderTop: "4px solid",
                                        borderImageSource: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <h4 className="text-white f-of">
                                        0
                                        <span style={{ color: "var(--color2)" }} className=" px-2">UNI</span>                                    </h4>

                                </div>
                            </Card>
                            <Card className="p-sm-4 p-2 rounded-4  " style={{
                                color: "#DBDBDB",
                                background: "#589CFF38",
                            }}>
                                <h3 className='f-of'>Refer a Friend</h3>
                                <div
                                    className="border-top pt-3"
                                    style={{
                                        borderTop: "4px solid",
                                        borderImageSource: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <h4 className="text-white f-of">
                                        Refer a friend and earn
                                        <span style={{ color: "var(--color2)" }} className=" px-2">UNI tokens.</span>
                                    </h4>
                                    <h4 className="text-white f-of">
My referral link:                                       </h4>

                                    <CopyableLink/>
                                    </div>
                            </Card>



                        </Col>


                    </Row>
                </div>


            </div>


        </Container>
    );
};

export default BuyToken;
