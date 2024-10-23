"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'

const ManageTransactions = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col xs={6}>

                        <Col xs={6} className='mx-auto'>
                            <div className="phone text-white p-3">
                                <h3>MANAGE YOUR TRANSACTIONS ON THE GO</h3>
                                <TypeAnimation
                                    sequence={[
                                        'securely from your mobile device!',
                                        1000,
                                        'securely from your mobile device!',
                                        1000,
                                        'securely from your mobile device!',
                                        1000,
                                        'securely from your mobile device!',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '22px', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                                <div className='text-center'>
                                    <h3 className='text-white'>SWIPE ME</h3>

                                </div>

                            </div>

                        </Col>

                    </Col>
                    <Col xs={6}>
                        <div className='manage'>
                            <h1 className='text-white'>Manage Your <span>Transactions</span> through UNILABS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ManageTransactions