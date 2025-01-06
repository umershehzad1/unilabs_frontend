import Link from 'next/link';
import { QRCodeCanvas } from 'qrcode.react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { LiaCcAmazonPay } from "react-icons/lia";
import { useAccount } from 'wagmi';


const BarCodeRow = ({
    amount, paymentId
}) => {
    const isConnected = useAccount()
    const url = `https://nowpayments.io/payment/?iid=${paymentId}`

    const code = isConnected?.address;

    return (
        <Container fluid className="py-4 text-center py-5">
            <Row>
                <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                    <p style={{ color: "#DBDBDB" }}>Amount After Fee: </p>
                    <p
                        className="fs-2 f-of rounded-3 fw-bold py-2 d-inline ps-2 pe-4"
                        style={{ background: "#589CFF38", color: "white" }}
                    >
                        <Image src="/f2.png" alt="Coins" className="mx-1 mb-2" width={35} height={35} />
                        {amount} USD
                    </p>

                    <p className="mt-3" style={{ color: "#DBDBDB" }}>To this Address: </p>
                    <p
                        className="fs-5 f-of rounded-3 fw-bold py-2 d-inline-block overflow-hidden px-2"
                        style={{ background: "#589CFF38", color: "white", wordBreak: "break-all" }}
                    >
                        {code}
                    </p>

                    <div className='d-flex justify-content-md-start justify-content-center'>
                        <Link href={url}
                            target="_blank"
                            className="rounded-pill btn d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: "#D9D9D933",
                                border: "none",
                                color: "white",
                                padding: "10px 20px",
                            }}
                        >
                            <LiaCcAmazonPay size={30} className="me-2" />
                            Pay Now
                        </Link>
                    </div>
                </Col>

                <Col md={6} className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <QRCodeCanvas className='bg-light py-2 px-2' value={url} size={200} />
                </Col>
            </Row>
        </Container>
    );
};

export default BarCodeRow;
