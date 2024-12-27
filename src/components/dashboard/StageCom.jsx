"use client"
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CustomChart from './CustomChart'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const data = { stage: "1", remaining: "210,921", price: "1", nextStagePrice: 10, total: "204042", sold: 15030340 }

const StageCom = () => {
    const router = useRouter()
    return (
        <Row className='py-4 page-bg  px-0'>
            <Col md={6} xs={12}
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ textAlign: 'center', }}
            >
                <CustomChart percentage={30} />
                <p className='mt-4'>
                    <span
                        className="mx-2"
                        style={{
                            height: "8px",
                            width: "8px",
                            background: "linear-gradient(180deg, #4CAF50 0%, #204921 100%)",
                            display: 'inline-block',
                            borderRadius: '50%' // Make it a circle
                        }}
                    ></span>
                    Total Tokens Sold
                </p>
            </Col>
            <Col md={6} xs={12}>


                <Card className='p-sm-4 p-2 rounded-4' style={{
                    color: "white",
                    background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.1) 100%)"
                }}>

                    <h2 >Stage {data?.stage}</h2>
                    <div className="border-top border-white">


                        <div className="d-flex justify-content-between fs-4 my-2">

                            <span>
                                tokens remaining in stage:

                            </span>
                            <span>  {data?.remaining}</span>
                        </div>
                        <div className="d-flex justify-content-between fs-4 my-2">

                            <span>
                                UNI price in current stage:
                            </span>
                            <span>  {data?.price} USD</span>
                        </div>
                        <div className="d-flex justify-content-between fs-4 my-2">

                            <span>
                                The next stage price:
                            </span>
                            <span>  {data?.nextStagePrice} USD</span>
                        </div>
                    </div>


                </Card>
                <Card className='p-sm-4 p-2 py-2 rounded-4 my-4' style={{
                    color: "white",
                    background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.1) 100%)"
                }}>



                    <div className="d-flex justify-content-between fs-4 my-1    ">

                        <span>
                            Tokens Sold in Total:
                        </span>
                        <span>  {data?.sold}</span>
                    </div>
                    <div className="d-flex justify-content-between fs-4 my-1    ">

                        <span>
                            Total Raised:                            </span>
                        <span>  {data?.total} USD</span>
                    </div>



                </Card>

                <div className="d-flex justify-content-end">

                    <Button onClick={() => router.push("/dashboard/makepayment")} className='shadow-button mb-0 f-of rounded-3 ms-md-3 fw-bold' style={{ background: 'var(--color4)' }}>
                        <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={20} height={20} />
                        Buy New Token
                    </Button>
                </div>
            </Col>

        </Row>
    )
}

export default StageCom