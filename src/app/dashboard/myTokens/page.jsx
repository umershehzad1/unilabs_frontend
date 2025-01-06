"use client";
import { wagmiContractConfig } from '@/contract/tokenContract';
import TextEllipsis from '@/libs/TextOverflow';
import { BalanceFormater } from '@/utils/BalanceFormater';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useAccount, useReadContract } from 'wagmi';
const MyToken = () => {
    const isConnected = useAccount();
    const walletAddress = isConnected.address;
    const totalData = [
        { label: "Token Amount", value: 0 },
        { label: "Purchase Token:", value: 0 },
        { label: "Referral Token:", value: 0 },
        { label: "Bonuses Token:", value: 0 },
        { label: "Total Contributed", value: 0 },
    ];

    const [tokenBalance, setTokenBalance] = useState(0);

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
            <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                <div className="page-bg bg-top">
                    <h1 className="fw-bold border-bottom border-success pb-2">My UNI Token</h1>

                    <Row className='py-4 px-0'>
                        <Col xl={6} xs={12}>
                            <Card className="p-3 rounded-4 mb-4" style={{
                                color: "#DBDBDB",
                                background: "#589CFF38",
                            }}>
                                <h3 className='f-of'>My Wallet Address</h3>
                                <div
                                    className="border-top mt-3"
                                    style={{
                                        borderTop: "4px solid",
                                        borderImageSource: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <p className="mt-3 mb-0 f-of" style={{ color: "#DBDBDB80" }}>
                                        Add or update your Ethereum wallet address to receive your $UNI tokens.
                                    </p>
                                    <Col className="d-flex flex-column flex-md-row align-items-center">
                                        {walletAddress ?
                                            <small className="fs-5 f-of mb-2 mb-md-0">
                                                <small className="text-info">Receiving Wallet: </small>
                                                <p style={{
                                                    wordWrap: "break-word",
                                                    overflowWrap: "break-word",
                                                    whiteSpace: "normal",
                                                    wordBreak: "break-word",
                                                }}
                                                    className="ms-0 small f-of mb-0">{walletAddress}</p>
                                            </small>
                                            :
                                            <>

                                                <small className="fs-5 f-of mb-2 mb-md-0">
                                                    <small style={{ color: "var(--color1)" }}>Receiving Wallet:</small>
                                                    <Link href="#" className="ms-2 small f-of">Connect your wallet to view your wallet address</Link>
                                                </small>
                                                <Button
                                                    size="sm"
                                                    className="ms-md-3 mt-2 mt-md-0 f-of"
                                                    style={{
                                                        backgroundColor: "rgba(13, 110, 253, 0.4)!important",
                                                        borderColor: "rgba(13, 110, 253, 0.7)"
                                                    }}
                                                >
                                                    Add
                                                </Button>
                                            </>

                                        }


                                    </Col>
                                </div>
                            </Card>

                            <Card className="p-3 rounded-4 mb-4" style={{
                                color: "#DBDBDB",
                                background: "#589CFF38",
                            }}>
                                <h3 className='f-of'>Total Token Amount</h3>
                                <div
                                    className="border-top mt-3"
                                    style={{
                                        borderTop: "4px solid",
                                        borderImageSource: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <h5 className="text-white mt-2 f-of">
                                        <TextEllipsis value={BalanceFormater(tokenBalance)} />
                                        <span style={{ color: "var(--color2)" }} className="px-1 f-of">UNI</span>
                                    </h5>
                                </div>
                            </Card>

                            {/* <Card className="p-3 rounded-4"
                                style={{
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
                                    <h6 className="text-white f-of">Refer a friend and earn 

                                        <span style={{color:"var(--color2)"
                                        }} className="px-2">UNI tokens.</span>

                                    </h6>
                                    <h5 className="text-white ">My referral link:</h5>
                                    <CopyableLink />
                                </div>
                            </Card> */}
                        </Col>

                        {/* <Col className='offset-xl-1 mt-xl-0 mt-4' xl={5} xs={12}>
                            <Row className="mb-3">
                                <div className="d-flex flex-md-row flex-column align-items-center justify-content-lg-end gap-3">
                                    <h2 className='mb-0 f-of'>My Token Balance</h2>
                                    <p className='mb-0 f-of rounded-3 ms-md-3 fw-bold' style={{ padding: "15px", background: "var(--color2)", color: "var(--color3)" }}>
                                        <Image src="/dashboard/coin.png" alt="Coins" className='mx-1 mb-1' width={20} height={20} />
                                        100,00
                                    </p>
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <div className="d-flex flex-md-row flex-column align-items-center justify-content-lg-end gap-3">
                                    <h4 className='mb-0 f-of'>Equivalent to:</h4>
                                    <p className='mb-0 f-of rounded-3 ms-md-3 fw-bold' style={{ padding: "15px", border: "2px solid #EFD396", color: "var(--color3)" }}>
                                        <Image src="/dashboard/MoneyBag.png" alt="Coins" className='mx-1 mb-1' width={20} height={20} />
                                        100,00
                                    </p>
                                </div>
                            </Row>

                            <Card className='p-5  rounded-4' style={{
                                color: "white",
                                background: "#589CFF38",
                            }}>
                                {totalData?.map((data, index) => (
                                    <div key={index} className="d-flex justify-content-between fs-5 py-2" style={{ color: "#DBDBDB" }}>
                                        <small>{data.label}</small>
                                        <small>
                                            <Image src="/dashboard/coin.png" alt="Coins" className='mx-2 mb-1' width={15} height={15} />
                                            {data.value} UNI
                                        </small>
                                    </div>
                                ))}
                                <div className="text-center mt-2">
                                    <Button className='shadow-button-lg mt-4 mb-0 f-of btn-lg   fw-bold' style={{ background: 'var(--color4)' }}>
                                        <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={20} height={20} />
                                        Buy Token Now
                                    </Button>
                                </div>
                            </Card>

                        </Col> */}
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default MyToken;
