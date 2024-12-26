import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Confetti from 'react-confetti';
import { GrCopy } from 'react-icons/gr';
import { useWindowSize } from 'react-use';
import { useAccount } from 'wagmi';
import { QRCodeCanvas } from 'qrcode.react';


const BarCodeRow = ({
    amount, paymentId
}) => {
    const [copied, setCopied] = useState(false);
    const { width, height } = useWindowSize();
    const isConnected = useAccount()
    const url = `https://nowpayments.io/payment/?iid=${paymentId}`
    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    const code = isConnected?.address;
    // console.log("code", isConnected.address)

    const value = 0.7654;

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
                        {amount} ETH
                    </p>

                    <p className="mt-3" style={{ color: "#DBDBDB" }}>To this Address: </p>
                    <p
                        className="fs-5 f-of rounded-3 fw-bold py-2 d-inline-block overflow-hidden px-2"
                        style={{ background: "#589CFF38", color: "white", wordBreak: "break-all" }}
                    >
                        {code}
                    </p>

                    {copied && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}

                    <Button
                        onClick={handleCopy}
                        className="ms-2 mt-3 rounded-pill d-flex align-items-center justify-content-center"
                        style={{
                            backgroundColor: "#D9D9D933",
                            border: "none",
                            color: "white",
                            padding: "10px 20px",
                        }}
                    >
                        <GrCopy className="me-2" color={copied ? "green" : "white"} />
                        Copy Link
                    </Button>
                </Col>

                <Col md={6} className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    {/* <Image src="/barcode.png" width={200} fluid alt="UniLabs" /> */}
                    <QRCodeCanvas className='bg-light py-2 px-2' value={url} size={200} />
                </Col>
            </Row>
        </Container>
    );
};

export default BarCodeRow;
