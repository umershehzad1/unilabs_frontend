"use client";
import StageCom from '@/components/dashboard/StageCom';
import { wagmiContractConfig } from '@/contract/tokenContract';
import { useAccount, useReadContract } from 'wagmi';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tick = '/dashboard/verified.png';

const Dashboard = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount");
    const [usdAmount, setUsdAmount] = useState(amount || 0);
    const isConnected = useAccount();
    // console.log("Received amount: ", usdAmount);

    const [verified, setVerified] = useState(false);

    const [tokenBalance, setTokenBalance] = useState(0);

    useEffect(() => {
        if (verified) {
            setVerified(true);
        }
    }, [verified]);

    const { data: balance, error } = useReadContract({
        ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: [isConnected.address],
    });

    useEffect(() => {
        if (balance) {
            setTokenBalance(Number(balance) / 10 ** 18);
        }

    }, [balance]);

    return (
        <Container fluid className="px-md-4 text-white">
            <div className="rounded-4 py-3 px-md-5 my-4" style={{ background: "#589CFF0A" }}>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={6} className="mb-3 mb-md-0">
                        {/* <h2 className="fs-5 fw-bold">
                            <span className='me-1 text-white'>Account Status:</span>
                            {User ? (
                                <span >
                                    <Image width={24} height={24} src={tick} alt="Check" className="mx-1" />
                                    Verified
                                </span>
                            ) : (
                                <span className="text-danger">Not Verified</span>
                            )}
                        </h2> */}
                    </Col>
                </Row>
                <div className="border-bottom  my-4"></div>
                <Row>
                    <div className="d-flex flex-md-row flex-column align-items-center justify-content-lg-end gap-3">
                        <h2 className='mb-0'>My Token Balance</h2>
                        <p className='mb-0 f-of rounded-3 ms-md-3 fw-bold ' style={{ padding: "15px", background: "var(--color2)", color: "var(--color3)" }}>
                            <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={20} height={20} />
                            {tokenBalance}
                        </p>
                    </div>
                </Row>
                <StageCom />
            </div>
        </Container>
    );
};

export default Dashboard;
