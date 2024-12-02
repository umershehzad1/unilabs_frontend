import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CustomPieChart from '../CustomPieChart'

const UnilToken = () => {
    const cards = [
        "Upto 122% APY in Staking Rewards",
        "Access to Exclusive Investment Insights",
        "Prioritized Access to dApps",
        "Contribute to Governance Decisions",
        "Earn Referral Bonuses",
        "Eligible for Upcoming Airdrops"
    ]
    return (
        <div className='text-white py-5'>
            <Container>
                <h1 className='display-4 fw-bold text-center border-bottom pb-2 mb-4' >
                    The
                    <span style={{ color: "var(--green)" }} className="px-2 ">
                        $UNIL
                    </span>
                    Token
                </h1>
                <p className='text-center'>The $UNIL token is built on the ERC-20 token standard to support seamless liquidity, and comprehensive security. By holding the $UNIL token, you get:</p>

                <Row className='gy-4 py-4'>
                    {
                        cards?.map(
                            (text, index) => <Col lg={4} md={6} xs={12} key={index} >
                                <Card className='text-white text-center text-white p-3 unil-card'>
                                    {text}
                                </Card>
                            </Col>
                        )
                    }

                </Row>

                <CustomPieChart />
            </Container>

        </div>
    )
}

export default UnilToken